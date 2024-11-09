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
  const [participants, setParticipants] = useState([]);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const route = useRoute();
  const { eventTitle, eventId } = route.params;
  const navigation = useNavigation();
  const flatListRef = useRef(null);

  const fetchChatHistory = async () => {
    try {
      const response = await axios.get(`http://${API_URL}:8083/chat/history`, {
        params: { eventId: eventId },
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      });
      setMessages(response.data.messages);
    } catch (error) {
      console.error("Ошибка загрузки истории сообщений:", error);
    }
  };

  const fetchChatParticipants = async () => {
    try {
      const response = await axios.get(
        `http://${API_URL}:8083/chat/participants`,
        {
          params: { eventId: eventId },
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
          },
        }
      );
      setParticipants(response.data);
    } catch (error) {
      console.error("Ошибка загрузки участников чата:", error);
    }
  };

  useEffect(() => {
    const client = new Client({
      brokerURL: `ws://${API_URL}:8083/meet-and-greet-chat?access_token=${tokens.accessToken}`,
      
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
      reconnectDelay: 500,
      debug: (str) => console.log(`WebSocket debug: ${str}`),
      onConnect: () => {
        setConnected(true);
        setLoading(false);
        fetchChatHistory();
        fetchChatParticipants();
        handleJoinChat();
      },
      onWebSocketError: (error) => console.error("WebSocket error:", error),
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

  const handleJoinChat = () => {
    if (stompClient && connected) {
      const joinRequest = {
        username: tokens.username || "Guest",
        eventId: eventId,
      };

      stompClient.publish({
        destination: "/app/joinChat",
        body: JSON.stringify(joinRequest),
      });
    }
  };

  useEffect(() => {
    if (stompClient && connected) {
      const userJoinSubscription = stompClient.subscribe(
        "/topic/joinChat",
        (message) => {
          const newUser = JSON.parse(message.body);

          setParticipants((prevParticipants) => {
            if (
              !prevParticipants.some(
                (participant) => participant.username === newUser.username
              )
            ) {
              return [...prevParticipants, newUser];
            }
            return prevParticipants;
          });
        }
      );

      const chatHistorySubscription = stompClient.subscribe(
        "/topic/chat",
        (message) => {
          const parsedMessage = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, parsedMessage]);
        }
      );

      return () => {
        userJoinSubscription.unsubscribe();
        chatHistorySubscription.unsubscribe();
      };
    }
  }, [stompClient, connected]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleNotifications = () => {
    Alert.alert('Уведомление');
  };

  const handleSend = async () => {
    if (stompClient && connected && messageInput.trim()) {
      const newMessage = {
        id: Math.random().toString(),
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
      setIsMessageSent(true);
    }
  };

  const renderMessage = ({ item }) => {
    const messageTime = new Date(item.timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const senderProfile = participants.find(
      (participant) => participant.username === item.sender
    );
    const displayName = senderProfile?.displayName || item.sender;

    const avatarSource =
      senderProfile?.profileImage && senderProfile.profileImage !== ""
        ? { uri: senderProfile.profileImage }
        : require("../../assets/nonavatar.png");

    const handleAvatarPress = () => {
      if (item.sender === tokens.username) {
        navigation.navigate("MyProfile");
      } else {
        navigation.navigate("Profile", { username: item.sender });
      }
    };

    return (
      <View
        style={[
          styles.messageContainer,
          item.sender === tokens.username
            ? styles.rightMessage
            : styles.leftMessage,
        ]}
      >
        <TouchableOpacity onPress={handleAvatarPress}>
          <Image source={avatarSource} style={styles.avatar} />
        </TouchableOpacity>
        <View style={styles.messageContent}>
          <Text
            style={[
              styles.username,
              item.sender === tokens.username
                ? styles.rightUsername
                : styles.leftUsername,
            ]}
          >
            {` ${displayName} `}
          </Text>
          <View
            style={[
              styles.messageBubble,
              item.sender === tokens.username
                ? styles.rightMessageBubble
                : styles.leftMessageBubble,
            ]}
          >
            <Text style={styles.messageText}>{item.content}</Text>
          </View>
        </View>

        <View
          style={[
            styles.messageTimeContainer,
            item.sender === tokens.username
              ? styles.rightMessageTime
              : styles.leftMessageTime,
          ]}
        >
          <Text style={[styles.messageTime]}>{messageTime}</Text>
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
