import React, { useEffect, useState, useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Client } from "@stomp/stompjs";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton/BackButton";
import { API_URL, tokens } from "../../variables/ip";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

export default function ChatScreen() {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messageInput, setMessageInput] = useState("");
  const route = useRoute();
  const { eventTitle, eventId } = route.params; // Теперь eventId получаем из params
  const navigation = useNavigation();
  const flatListRef = useRef(null);

  const fetchChatHistory = async () => {
    try {
      const response = await axios.get(
        `http://${API_URL}:8083/ws/api/chatHistory`,
        {
          params: { eventId: eventId },
        }
      );
      const chatHistoryResponse = response.data;
      setMessages(chatHistoryResponse.messages);
    } catch (error) {
      console.error("Ошибка загрузки истории сообщений:", error);
    }
  };

  useEffect(() => {
    const client = new Client({
      brokerURL: `ws://${API_URL}:8083/meet-and-greet-chat`,
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
      reconnectDelay: 500,
      debug: (str) => {
        console.log(`WebSocket debug: ${str}`);
      },
      onConnect: () => {
        setConnected(true);
        setLoading(false);
        fetchChatHistory();
      },
      onWebSocketError: (error) => {
        console.error("WebSocket connection error:", error);
      },
      onStompError: (frame) => {
        console.error("STOMP error:", frame.headers["message"]);
        console.error("Details:", frame.body);
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
      const chatHistorySubscription = stompClient.subscribe(
        "/topic/chat",
        (message) => {
          const parsedMessage = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, parsedMessage]);
        }
      );

      return () => {
        chatHistorySubscription.unsubscribe();
      };
    }
  }, [stompClient, connected]);

  const handleBackPress = () => {
    navigation.navigate("EventCardInsideScreen", { eventId: eventId });
  };

  const handleSend = () => {
    if (stompClient && connected && messageInput.trim()) {
      const newMessage = {
        id: Math.random(),
        content: messageInput,
        sender: tokens.username || "Guest",
        timestamp: Date.now(),
      };

      stompClient.publish({
        destination: "/chatapp/sendMessage",
        body: JSON.stringify({
          content: newMessage.content,
          sender: newMessage.sender,
          eventId: eventId,
        }),
      });

      setMessageInput("");
    }
  };
  const renderMessage = ({ item }) => {
    const messageTime = new Date(item.timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  
    return (
      <View style={[styles.messageContainer, item.sender === tokens.username ? styles.rightMessage : styles.leftMessage]}>
        <Image source={require('../../assets/icons/chatavatar.png')} style={styles.avatar} />
        <View style={styles.messageContent}>
          <Text style={styles.username}>{`@${item.sender}`}</Text>
          <View
            style={[
              styles.messageBubble,
              item.sender === tokens.username ? styles.rightMessageBubble : styles.leftMessageBubble,
            ]}
          >
            <Text style={styles.messageText}>{item.content}</Text>
          </View>
        </View>
  
        {/* Время рядом с облачком, отцентрировано по вертикали */}
        <View style={[styles.messageTimeContainer, item.sender === tokens.username ? styles.rightMessageTime : styles.leftMessageTime]}>
          <Text style={[styles.messageTime]}>
            {messageTime}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BackButton onPress={handleBackPress} />
      <Text style={styles.header}>{eventTitle}</Text>

      {loading ? (
        <View style={styles.loaderContainer}>
          {/* Заменен текст на ActivityIndicator */}
          <ActivityIndicator size="large" color="#F26430" />
        </View>
      ) : (
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id.toString()}
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
          <Image
            source={require("../../assets/icons/chatsend1.png")}
            style={styles.iconsend}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
