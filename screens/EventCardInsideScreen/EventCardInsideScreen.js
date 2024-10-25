import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import styles from './styles';

const EventCardInsideScreen = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Ещё не началось</Text>
            </View>

            <View style={styles.dater}>
                <Text style={styles.dateText}>4 Октября 20:00 - 4 Октября 22:00</Text>
            </View>

            <View style={styles.namer}>
                <Text style={styles.title}>Название мероприятия</Text>
            </View>

            <View style={styles.imagesContainer}>
                <Image source={require('../../assets/icons/example.png')} style={styles.image} />
                <Image source={require('../../assets/icons/example.png')} style={styles.image} />
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infonumAndRating}>
                    <Text style={styles.infoTextAprove}>👥 1,923</Text>
                    <Text style={styles.infoTextRating}>⭐ 4.5</Text>
                </View>
                <Text style={styles.infoTextTitle}>🏦 T-BANK</Text>
            </View>

            <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Mattis purus donec dis nisl ornare potenti sedLorem ipsum dolor sit amet consectetur. Mattis purus donec dis nisl ornare potenti sedLorem ipsum dolor sit amet consectetur. Mattis purus donec dis nisl ornare potenti sedLorem ipsum dolor sit amet consectetur. Mattis purus donec dis nisl ornare potenti sedLorem ipsum dolor sit amet consectetur. Mattis purus donec dis nisl ornare potenti sedLorem ipsum dolor sit amet consectetur. Mattis purus donec dis nisl ornare potenti sedLorem ipsum dolor sit amet consectetur. Mattis purus donec dis nisl ornare potenti sedLorem ipsum dolor sit amet consectetur. Mattis purus donec dis nisl ornare potenti sedMattis purus donec dis nisl ornare potenti sed
            </Text>

            <View style={styles.participationContainer}>
                <Pressable onPress={() => setIsChecked(!isChecked)} style={styles.checkboxContainer}>
                <Text style={styles.label}>Участвую</Text>
                    <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                        {isChecked && <Text style={styles.checkboxText}>✔</Text>}
                    </View>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default EventCardInsideScreen;
