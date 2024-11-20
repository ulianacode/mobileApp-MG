import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  ScrollView,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import axios from "axios";
import BackButton from "../../components/BackButton/BackButton";
import { useNavigation } from "@react-navigation/native";
import { API_URL, tokens } from "../../variables/ip";
import { useRoute } from '@react-navigation/native';

const EventCardInsideScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [participantStatus, setParticipantStatus] = useState("NOT_APPROVED");

  const [averageRating, setAverageRating] = useState(0);
  const [userGrade, setUserGrade] = useState(0);

  const [username, setUserName] = useState(null);
  const [profileImage, userProfileImage] = useState(null);

  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { eventId } = route.params;


  const accessToken = tokens.accessToken;

  const isUserAuthenticated = !!accessToken;

  const convertToISO = (dateString) => {
    const [datePart, timePart] = dateString.split(" ");

    const [day, month, year] = datePart.split(".");

    return `${year}-${month}-${day}T${timePart}:00`;
  };

  const handleChatPress = () => {
    if (!isUserAuthenticated) {
      Alert.alert("Ошибка", "Пожалуйста, авторизуйтесь для доступа к чату.");
      return;
    }
    navigation.navigate("ChatScreen", {
      eventTitle: eventData.title,
      eventId: eventData.id,
    });
  };

  const handleRatingPress = (star) => {
    if (!isUserAuthenticated) {
      Alert.alert("Ошибка", "Пожалуйста, авторизуйтесь для оценки мероприятия.");
      return;
    }
    setRating(star);
    fetchEventData();
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleOkRatingPress = () => {
    submitRating();
    fetchEventData();
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const months = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];

    return `${day} ${months[month]} ${hours}:${minutes}`;
  };

  const getCurrentDateInMoscowTimezone = () => {
    const currentDate = new Date();

    const moscowOffset = 3 * 60;
    const utcDate =
      currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;
    const moscowDate = new Date(utcDate + moscowOffset * 60000);

    const isoString = moscowDate.toISOString();
    return isoString.slice(0, -5);
  };

  const handleParticipationToggle = async () => {
    if (!isUserAuthenticated) {
      Alert.alert("Ошибка", "Пожалуйста, авторизуйтесь для участия в мероприятии.");
      return;
    }
    const userStatus = isChecked ? "NOT_APPROVED" : "APPROVED";

    try {
      setParticipantStatus(userStatus);
      setIsChecked(!isChecked);
      await fetchEventData();
    } catch (error) {
      console.error("Ошибка при обновлении статуса участия:", error);
    }
  };


  const fetchEventData = async () => {
    try {

      const response = await axios.get(`http://${API_URL}/v1/events/${eventId}`, {
        headers: {
          headers: tokens.accessToken
          ? { Authorization: `Bearer ${tokens.accessToken}` }
          : {},
        },
      });

      setEventData(response.data);
      const { userStatus, userGrade, userProfile } = response.data;
      const { averageRating } = userProfile;
      const { username } = userProfile;
      const { profileImage } = userProfile;

      setUserName(username);
      userProfileImage(profileImage);
      setIsChecked(userStatus === "APPROVED");
      setParticipantStatus(userStatus);
      setAverageRating(averageRating);
      setUserGrade(userGrade);
    } catch (error) {
      console.error("Ошибка при получении данных мероприятия", error);
    } finally {
      setLoading(false);
    }
  };

  const submitRating = async () => {
    try {
      const accessToken = tokens.accessToken;
      const score = rating;
      console.log(score);

      const response = await axios.post(
        `http://${API_URL}:8082/v1/grades`,
        { eventId, score },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Рейтинг успешно отправлен:", response.data);
      setRatingSubmitted(true);
      await fetchEventData();
    } catch (error) {
      console.error("Ошибка при отправке рейтинга:", error);
    }
  };


  useEffect(() => {
    fetchEventData();
  }, [eventId]);

  const currentDate = getCurrentDateInMoscowTimezone();
  const eventStartDate = eventData?.startDateTime
    ? convertToISO(eventData.startDateTime)
    : null;
  const eventEndDate = eventData?.endDateTime
    ? convertToISO(eventData.endDateTime)
    : null;

  const formattedStartDate = eventStartDate ? formatDate(eventStartDate) : "";
  const formattedEndDate = eventEndDate ? formatDate(eventEndDate) : "";

  let headerText = "";
  let headerBackgroundColor = "#D9D9D9";

  if (eventStartDate > currentDate) {
    headerText = "Ещё не началось";
    headerBackgroundColor = "#D9D9D9";
  } else if (eventStartDate <= currentDate && eventEndDate >= currentDate) {
    headerText = "Идёт сейчас";
    headerBackgroundColor = "#F26430";
  } else if (eventEndDate < currentDate) {
    headerText = "Уже закончилось";
    headerBackgroundColor = "#ADA5A1";
  }

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (!eventData) {
    return <Text style={styles.errorText}>Данные мероприятия недоступны</Text>;
  }

  const avatarSource =
    eventData.eventImage && eventData.eventImage !== ""
      ? { uri: eventData.eventImage }
      : require("../../assets/nonavatar.png");
  const avatarProfileSource =
    profileImage && profileImage !== ""
      ? { uri: profileImage }
      : require("../../assets/nonavatar.png");

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>

      <BackButton onPress={handleBackPress} />

      <View style={styles.dater}>
        <Text style={styles.dateText}>
          {formattedStartDate} - {formattedEndDate}
        </Text>
      </View>

      <View style={styles.namer}>
        <Text style={styles.title}>{eventData.title}</Text>
      </View>

      <View style={styles.imagesContainer}>
        <Image
          source={require("../../assets/icons/example.png")}
          style={styles.image}
        />
        <Image source={avatarSource} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoNumAndRating}>
          <View style={styles.infoNum}>
            <Image
              source={require("../../assets/aprove.png")}
              style={styles.miniicon}
            />
            <Text style={styles.infoTextAprove}>{eventData.approvalCount}</Text>
          </View>
          <View style={styles.infoRating}>
            <Image
              source={require("../../assets/aprove.png")}
              style={styles.miniicon}
            />
            <Text style={styles.infoTextRating}>
              {averageRating.toFixed(1)}
            </Text>
          </View>
        </View>
        <View style={styles.infoTitle}>
          <Image source={avatarProfileSource} style={styles.miniicontitle} />
          <Text style={styles.infoTextTitle}>{username}</Text>
        </View>
      </View>

      <Text style={styles.description}>{eventData.description}</Text>

      {eventStartDate > currentDate && (
        <View style={styles.participationContainer}>
          <Pressable
            onPress={handleParticipationToggle}
            style={styles.checkboxContainer}
          >
            <Text style={styles.label}>Участвую</Text>
            <View
              style={[styles.checkbox, isChecked && styles.checkboxChecked]}
            >
              {isChecked && <Text style={styles.checkboxText}>✔️</Text>}
            </View>
          </Pressable>
          {participantStatus === "APPROVED" && (
            <TouchableOpacity
              onPress={handleChatPress}
              style={styles.chatContainer}
            >
              <Image
                source={require("../../assets/icons/chat.png")}
                style={styles.chatIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      )}

      {eventStartDate <= currentDate && eventEndDate >= currentDate && (
        <View style={styles.participationContainer}>
          <Pressable
            onPress={handleParticipationToggle}
            style={styles.checkboxContainer}
          >
            <Text style={styles.label}>Участвую</Text>
            <View
              style={[styles.checkbox, isChecked && styles.checkboxChecked]}
            >
              {isChecked && <Text style={styles.checkboxText}>✔️</Text>}
            </View>
          </Pressable>
          {participantStatus === "APPROVED" && (
            <TouchableOpacity
              onPress={handleChatPress}
              style={styles.chatContainer}
            >
              <Image
                source={require("../../assets/icons/chat.png")}
                style={styles.chatIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
      {eventStartDate <= currentDate &&
        eventEndDate >= currentDate &&
        participantStatus === "NOT_APPROVED" && (
          <View style={styles.nonParticipationContainer}>
            <Text style={styles.nonParticipationText}>Вы не участвуете</Text>
          </View>
        )}

      {eventEndDate < currentDate &&
        participantStatus === "CAN_RATE" &&
        !ratingSubmitted && (
          <View style={styles.ratingAndOkContainer}>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>Оцените мероприятие:</Text>
              <View style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <TouchableOpacity
                    key={star}
                    onPress={() => handleRatingPress(star)}
                  >
                    <Image
                      source={
                        star <= rating
                          ? require("../../assets/icons/starfill.png")
                          : require("../../assets/icons/star.png")
                      }
                      style={styles.star}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <TouchableOpacity
              onPress={handleOkRatingPress}
              style={styles.starOkContainer}
            >
              <Image
                source={require("../../assets/icons/ok.png")}
                style={styles.starOkIcon}
              />
            </TouchableOpacity>
          </View>
        )}

      {eventEndDate < currentDate && participantStatus === "ALREADY_RATED" && (
        <View style={styles.ratingDisplayContainer}>
          <Text style={styles.ratingText}>Ваша оценка:</Text>
          <View style={styles.singleStarContainer}>
            <Image
              source={require("../../assets/icons/starfill.png")}
              style={styles.singleStar}
            />
            <Text style={styles.ratingNumber}>{userGrade}</Text>
          </View>
        </View>
      )}

      {eventEndDate < currentDate && participantStatus === "NOT_APPROVED" && (
        <View style={styles.nonParticipationContainer}>
          <Text style={styles.nonParticipationText}>Вы не участвовали</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default EventCardInsideScreen;
