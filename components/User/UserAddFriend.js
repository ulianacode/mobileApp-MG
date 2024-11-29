import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { API_URL, tokens } from '../../variables/ip';

const UserAddFriend = ({ friendStatus, style, username }) => {
  const [friendStatus2, setFriendStatus] = useState(friendStatus);
  let iconSource;

  if (friendStatus2 === 'SENT') {
    iconSource = require('../../assets/friendwithletter.png');
  } else if (friendStatus2 === 'ACCEPTED') {
    iconSource = require('../../assets/friendno.png');
  } else if (friendStatus2 === 'NOT_FRIENDS') {
    iconSource = require('../../assets/friendyes.png');
  }
  else if (friendStatus2 === 'PENDING') {
    iconSource = require('../../assets/friendpending.png');
  }

  console.log(friendStatus);
 
  const handlePress = async () => {
    if (friendStatus2 === 'NOT_FRIENDS') {
      try {
        const response = await axios.post(
          `http://${API_URL}/v1/friendships/action`,
          {
            receiverUsername: username,
          },
          {
            headers: {
              Authorization: `Bearer ${tokens.accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          Alert.alert('Успешно', 'Запрос на дружбу отправлен.');
          setFriendStatus('SENT'); 
        } else {
          Alert.alert('Ошибка', 'Не удалось отправить запрос на дружбу.');
        }
      } catch (error) {
        Alert.alert('Ошибка', 'Произошла ошибка при отправке запроса.');
        console.error(error);
      }
    } else if (friendStatus2 === 'ACCEPTED') {
      try {
        const response = await axios.delete(
          `http://${API_URL}/v1/friendships/${username}`,
          {
            headers: {
              Authorization: `Bearer ${tokens.accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          Alert.alert('Успешно', 'Пользователь удален из друзей.');
          setFriendStatus('NOT_FRIENDS'); 
        } else {
          Alert.alert('Ошибка', 'Не удалось удалить пользователя из друзей.');
        }
      } catch (error) {
        Alert.alert('Ошибка', 'Произошла ошибка при удалении пользователя.');
        console.error(error);
      }
    } else if (friendStatus2 === 'PENDING') {
      try {
        const response = await axios.put(
          `http://${API_URL}/v1/friendships/decision`,
          {
            senderUsername: username,
            decision: 'ACCEPTED',
          },
          {
            headers: {
              Authorization: `Bearer ${tokens.accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          Alert.alert('Успешно', 'Запрос отправлено.');
          setFriendStatus('ACCEPTED');
        } else {
          Alert.alert('Ошибка', 'Не удалось отправить запрос.');
        }
      } catch (error) {
        Alert.alert('Ошибка', 'Произошла ошибка при отправке запроса.');
        console.error(error);
      }
    } else if (friendStatus2 === 'SENT') {
      try {
        const response = await axios.post(
          `http://${API_URL}/v1/friendships/action`,
          {
            receiverUsername: username,
          },
          {
            headers: {
              Authorization: `Bearer ${tokens.accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          Alert.alert('Успешно', 'Запрос отменен.');
          setFriendStatus('NOT_FRIENDS');
        } else {
          Alert.alert('Ошибка', 'Не удалось отправить запрос.');
        }
      } catch (error) {
        Alert.alert('Ошибка', 'Произошла ошибка при отправке запроса.');
        console.error(error);
      }
    } else {
      Alert.alert('Информация', 'Действие недоступно для текущего статуса.');
    }

  };

  return (
    
    <TouchableOpacity onPress={handlePress}>
      <View style={style.actionsContainer}>
        <Image source={iconSource} style={style.friendIcon} />
      </View>
    </TouchableOpacity>
  );
};

export default UserAddFriend;

