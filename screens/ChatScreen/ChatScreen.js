import React, { useEffect, useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, FlatList, ActivityIndicator } from 'react-native';
import { Client } from '@stomp/stompjs';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton/BackButton';
import { API_URL, tokens } from '../../variables/ip';  // Импорт токенов

export default function ChatScreen() {
    const [connected, setConnected] = useState(false);
    const [messages, setMessages] = useState([]);
    const [stompClient, setStompClient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [messageInput, setMessageInput] = useState('');
    const navigation = useNavigation();
    const flatListRef = useRef(null);
    const eventId = 4;

    const loadMessages = () => {
        if (stompClient && connected) {
            stompClient.publish({
                destination: '/chatapp/getChatHistory',  // Новый путь для получения истории сообщений
                body: JSON.stringify(eventId),
            });
        }
    };

    useEffect(() => {
        const client = new Client({
            brokerURL: `ws://${API_URL}:8083/meet-and-greet-chat`,  // Новый эндпоинт
            forceBinaryWSFrames: true,
            appendMissingNULLonIncoming: true,
            reconnectDelay: 500,
            debug: (str) => {
                console.log(`WebSocket debug: ${str}`);
            },
            onConnect: () => {
                setConnected(true);
                setLoading(false);
            },
            onWebSocketError: (error) => {
                console.error('WebSocket connection error:', error);
            },
            onStompError: (frame) => {
                console.error('STOMP error:', frame.headers['message']);
                console.error('Details:', frame.body);
            },
            onDisconnect: () => {
                setConnected(false);
                setLoading(true);
            },
        });

        setStompClient(client);
        client.activate();

        return () => {
            client.deactivate();
            setConnected(false);
        };
    }, []);

    useEffect(() => {
        if (stompClient && connected) {
            const chatHistorySubscription = stompClient.subscribe('/topic/chatHistory', (message) => {
                const parsedMessages = JSON.parse(message.body);
                if (Array.isArray(parsedMessages)) {
                    setMessages(parsedMessages);
                } else {
                    setMessages((prevMessages) => [...prevMessages, parsedMessages]);
                }
            });

            loadMessages();

            return () => {
                chatHistorySubscription.unsubscribe();
            };
        }
    }, [stompClient, connected]);

    const handleBackPress = () => {
        navigation.navigate('Feed');
    };

    const handleSend = () => {
        if (stompClient && connected && messageInput.trim()) {
            const newMessage = {
                id: Math.random(),
                content: messageInput,
                sender: tokens.username || 'Guest',  // Используем username из токенов
                timestamp: Date.now(),
            };

            stompClient.publish({
                destination: '/chatapp/sendMessage',  // Новый путь для отправки сообщения
                body: JSON.stringify({
                    content: newMessage.content,
                    sender: newMessage.sender,
                    type: 'MESSAGE',
                    eventId: eventId,
                }),
            });

            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setMessageInput('');
        }
    };

    const renderMessage = ({ item }) => (
      <View style={[styles.messageContainer, item.sender === tokens.username ? styles.rightMessage : styles.leftMessage]}>
          <Image source={require('../../assets/icons/chatavatar.png')} style={styles.avatar} />
          <View style={styles.messageContent}>
              <Text style={styles.username}>{`@${item.sender}`}</Text>
              <View
                  style={[
                      styles.messageBubble,
                      item.sender === tokens.username
                          ? styles.rightMessageBubble // Оранжевый цвет для текущего пользователя
                          : styles.leftMessageBubble, // Персиковый для чужих сообщений
                  ]}
              >
                  <Text style={styles.messageText}>{item.content}</Text>
                  <Text style={styles.messageTime}>{new Date(item.timestamp).toLocaleTimeString()}</Text>
              </View>
          </View>
      </View>
  );

    return (
        <View style={styles.container}>
            <BackButton onPress={handleBackPress} />
            <Text style={styles.header}>Название мероприятия</Text>

            {loading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#F26430" />
                    <Text>Подключение к WebSocket...</Text>
                </View>
            ) : (
                <FlatList
                    ref={flatListRef}
                    data={messages}
                    renderItem={renderMessage}
                    keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
                    contentContainerStyle={styles.chatContainer}
                    onContentSizeChange={(contentWidth, contentHeight) => {
                        flatListRef.current?.scrollToOffset({
                            offset: contentHeight,
                            animated: true,
                        });
                    }}
                    onLayout={() => {
                        flatListRef.current?.scrollToEnd({ animated: true });
                    }}
                    ListFooterComponent={<View style={{ height: 20 }} />}
                />
            )}

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Введите сообщение..."
                    value={messageInput}
                    onChangeText={(text) => setMessageInput(text)}
                />
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                    <Image source={require('../../assets/icons/chatsend1.png')} style={styles.iconsend} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
