import {React, useState} from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, StatusBar, TextInput } from 'react-native';
import styles from './styles';
import BackButton from '../../components/BackButton/BackButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { API_URL, tokens } from '../../variables/ip';
import axios from 'axios';


const UserComplaintScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { reported } = route.params; 

  const [description, setDescription] = useState('');

const handleBackPress = () => {
  navigation.goBack();
};
const handleComlaint = async () => {
  
  try {
      const response = await axios.post(`http://${API_URL}/v1/complaints`, 
        { reported, description},
        {
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
          },
        }
        );

      console.log(description);
      if (response.status === 200) {
         navigation.goBack();
      } else {
          Alert.alert('Ошибка отправки жалобы.');
      }
  } catch (error) {
      if (error.response) {
          if (error.response.status === 400) {
              Alert.alert('Ошибка 400');
          } 
      }
      console.error(error);
  }
};


  return (
    <View style={styles.container}>

    <BackButton onPress={handleBackPress} />

    <View style={styles.boxContainer}>
        <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={[styles.label, styles.interBold]}>Жалоба на</Text>
              <Text style={[styles.label, styles.interBold]}>пользователя</Text>
            </View>
            <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="Введите текст жалобы "
            multiline
            numberOfLines={5}
            maxLength={360}
            value={description}
            onChangeText={setDescription}
            cursorColor="#000"
          />
            </View> 
            <TouchableOpacity onPress={handleComlaint} style={styles.bottomBoxContainer}>
            <Text style={styles.bottomBoxText}>Отправить</Text>
        </TouchableOpacity>

        </View>
    </View>
</View>
);

};

export default UserComplaintScreen;