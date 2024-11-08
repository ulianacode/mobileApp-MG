import React, { useState } from 'react';
import { View, Alert, Text, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigation } from '@react-navigation/native';

const initialMessages = [
  { id: '1', user: 'DoraTheExplorer', text: 'Я с тобою как в раю для тебя живу для тебя пою...', time: '23:09', isCurrentUser: false, avatar: require('../../assets/icons/chatavatar.png') },
  { id: '2', user: 'Homelander2004', text: 'Ты кому звонишь? Ты кому звонишь...', time: '23:10', isCurrentUser: true, avatar: require('../../assets/icons/chatavatar.png') },
  { id: '3', user: 'DoraTheExplorer', text: 'Привет, но ты проходишь мимо...', time: '23:11', isCurrentUser: false, avatar: require('../../assets/icons/chatavatar.png') },
  { id: '4', user: 'Homelander2004', text: 'Лови мой каждый импульс...', time: '23:12', isCurrentUser: true, avatar: require('../../assets/icons/chatavatar.png') },
  { id: '5', user: 'DoraTheExplorer', text: 'Безразличен, но я не влюблена...', time: '23:13', isCurrentUser: false, avatar: require('../../assets/icons/chatavatar.png') },
  { id: '6', user: 'Homelander2004', text: 'Ой ёй, потеряла голову...', time: '23:16', isCurrentUser: true, avatar: require('../../assets/icons/chatavatar.png') },
];

const ChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState('');

  const handleBackPress = () => {
    navigation.navigate('Feed');
  };

  const handleNotifications = () => {
    Alert.alert('Уведомление');
  };

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: (messages.length + 1).toString(),
        user: 'Homelander2004',
        text: message,
        time: new Date().toLocaleTimeString().slice(0, 5),
        isCurrentUser: true,
        avatar: require('../../assets/icons/chatavatar.png'),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.isCurrentUser ? styles.rightMessage : styles.leftMessage]}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.messageContent}>
        <Text style={styles.username}>{`@${item.user}`}</Text>
        <View style={[styles.messageBubble, { backgroundColor: item.isCurrentUser ? '#F26430' : '#F8936E' }]}>
          <Text style={styles.messageText}>{item.text}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <BackButton onPress={handleBackPress} />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Название мероприятия</Text>
        <TouchableOpacity onPress={handleNotifications}>
          <Image
            source={require('../../assets/icons/notification.png')}
            style={styles.notificationStyle}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Введите сообщение..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Image source={require('../../assets/icons/chatsend1.png')} style={styles.iconsend} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

