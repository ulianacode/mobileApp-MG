import React, { useState, useMemo } from 'react';
import { View, Image, TouchableOpacity, Alert, Modal, Text, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import { API_URL, tokens } from '../../variables/ip';
import styles from './styles'; // Импортируем стили из отдельного файла

const UserAddFriend = ({ friendStatus, style, username, displayName  }) => {
  const [friendStatus2, setFriendStatus] = useState(friendStatus);
  const [modalVisible, setModalVisible] = useState(false);

  const iconSource = useMemo(() => {
    if (friendStatus2 === 'SENT') {
      return require('../../assets/friendwithletter.png');
    } else if (friendStatus2 === 'ACCEPTED') {
      return require('../../assets/friendno.png');
    } else if (friendStatus2 === 'NOT_FRIENDS') {
      return require('../../assets/friendyes.png');
    } else if (friendStatus2 === 'PENDING') {
      return require('../../assets/friendpending.png');
    }
  }, [friendStatus2]);

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
          setFriendStatus('NOT_FRIENDS');
        } else {
          Alert.alert('Ошибка', 'Не удалось удалить пользователя из друзей.');
        }
      } catch (error) {
        console.error(error);
      }
    } else if (friendStatus2 === 'PENDING') {
      setModalVisible(true);
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

  const handleAccept = async () => {
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
        setFriendStatus('ACCEPTED');
        setModalVisible(false);
      } else {
        Alert.alert('Ошибка', 'Не удалось принять запрос.');
      }
    } catch (error) {
      Alert.alert('Ошибка', 'Произошла ошибка при принятии запроса.');
      console.error(error);
    }
  };

  const handleDecline = async () => {
    try {
      const response = await axios.put(
        `http://${API_URL}/v1/friendships/decision`,
        {
          senderUsername: username,
          decision: 'DECLINED',
        },
        {
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        setFriendStatus('NOT_FRIENDS');
        setModalVisible(false);
      } else {
        Alert.alert('Ошибка', 'Не удалось отклонить запрос.');
      }
    } catch (error) {
      Alert.alert('Ошибка', 'Произошла ошибка при отклонении запроса.');
      console.error(error);
    }
  };

 
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View style={style.actionsContainer}>
          <Image source={iconSource} style={style.friendIcon} />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <View style={styles.modalTextContainer}>
              <Text style={[styles.modalText, styles.interBold, {marginBottom: -30}]}>Входящий запрос в друзья</Text>
              <Text style={[styles.modalText, styles.interBold]}>
                от {displayName ? displayName : username}
              </Text>
            </View>
          </View>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={handleAccept}>
              <Text style={styles.textStyle}>Подтвердить</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.declineButton]} onPress={handleDecline}>
              <Text style={styles.textStyle}>Отклонить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserAddFriend;