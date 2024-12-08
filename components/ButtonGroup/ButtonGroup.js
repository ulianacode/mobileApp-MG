import { React, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const ButtonGroup = ({ selectedButton, setSelectedButton }) => {
  const [showImage, setShowImage] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(false);
  const navigation = useNavigation();

  const handleMenuPress = () => {
    setShowStatusBar(!showStatusBar);
  };

  const handleRecommendationsPress = () => {
    setSelectedButton("recommendations");
    navigation.navigate("Recommendations");
  };

  const handleUsersPress = () => {
    setSelectedButton("users");
    navigation.navigate("Users");
  };

  const handleMyEventsPress = () => {
    setSelectedButton("myevents");
    navigation.navigate("MyEvents");
  };

  const handleNotificationsPress = () => {
    setSelectedButton("notifications");
    navigation.navigate("Notifications");
  };

  useFocusEffect(
    useCallback(() => {
      if (selectedButton === "myevents") {
        setShowImage(true);
        setShowStatusBar(false);
      } else {
        setShowImage(false);
        setShowStatusBar(false);
      }
    }, [selectedButton])
  );

  const [filters, setFilters] = useState({
    participation: false,
    createdByMe: false,
    ongoing: false,
    upcoming: false,
    past: false,
  });

  const toggleFilter = (key) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: !prevFilters[key],
    }));
  };

  return (
    <View style={styles.conteiner}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button1,
            selectedButton === "recommendations"
              ? { backgroundColor: "#F8936E" }
              : { backgroundColor: "#ADA5A1" },
          ]}
          onPress={() => {
            handleRecommendationsPress();
          }}
        >
          <Text style={[styles.buttonText, styles.interBold]}>
            Рекомендации
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button2,
            selectedButton === "myevents"
              ? { backgroundColor: "#F8936E" }
              : { backgroundColor: "#ADA5A1" },
          ]}
          onPress={() => {
            handleMyEventsPress();
          }}
        >
          <Text style={[styles.buttonText, styles.interBold]}>
            Мои мероприятия
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button1,
            selectedButton === "users"
              ? { backgroundColor: "#F8936E" }
              : { backgroundColor: "#ADA5A1" },
          ]}
          onPress={() => {
            handleUsersPress();
          }}
        >
          <Text style={[styles.buttonText, styles.interBold]}>
            Пользователи
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button3,
            selectedButton === "notifications"
              ? { backgroundColor: "#F8936E" }
              : { backgroundColor: "#ADA5A1" },
          ]}
          onPress={() => {
            handleNotificationsPress();
          }}
        >
          <Image
            source={require("../../assets/icons/notification.png")}
            style={styles.notificationStyle}
          />
        </TouchableOpacity>
      </View>

      {selectedButton === "myevents" && (
        <View style={styles.conteinerStatusBar}>
          {showImage && (
            <TouchableOpacity onPress={handleMenuPress}>
              <Image
                source={require("../../assets/icons/menu.png")}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          )}
          {showStatusBar && (
            <View style={styles.statusBar}>
              <View style={styles.triangleBorder} />
              <View style={styles.triangle} />

              <View style={styles.rowContainer}>
                <TouchableOpacity
                  style={styles.rowItem}
                  onPress={() => toggleFilter("participation")}
                >
                  <Text style={styles.statusOption}>С моим участием</Text>
                  <View
                    style={[
                      styles.checkbox,
                      filters.participation ? styles.checkboxSelected : null,
                      { marginRight: -10, marginLeft: 10 }
                    ]}
                  >
                    {filters.participation && <Text style={styles.checkboxText}>✔️</Text>}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.rowItem}
                  onPress={() => toggleFilter("createdByMe")}
                >
                  <Text style={styles.statusOption}>Созданные мной</Text>
                  <View
                    style={[
                      styles.checkbox,
                      filters.createdByMe ? styles.checkboxSelected : null,
                      { marginRight: -10, marginLeft: 10 }
                    ]}
                  >
                    {filters.createdByMe && <Text style={styles.checkboxText}>✔️</Text>}
                  </View>
                </TouchableOpacity>
              </View>

              {["ongoing", "upcoming", "past"].map((key, index) => (
                <TouchableOpacity
                  key={key}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: index < 2 ? 5 : 0,
                  }}
                  onPress={() => toggleFilter(key)}
                >
                  <Text style={[styles.statusOption, { textAlign: 'center', flex: 1 }]}>
                    {key === "ongoing"
                      ? "Сейчас идёт"
                      : key === "upcoming"
                      ? "Ожидается"
                      : "Уже прошли"}
                  </Text>
                  <View
                    style={[
                      styles.checkbox,
                      filters[key] ? styles.checkboxSelected : null,
                      { marginRight: 50, marginLeft: -50 }
                    ]}
                  >
                    {filters[key] && <Text style={styles.checkboxText}>✔️</Text>}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default ButtonGroup;