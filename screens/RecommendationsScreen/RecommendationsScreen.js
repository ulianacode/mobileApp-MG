import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import SearchBar from '../../components/SearchBar/SearchBar';
import EventCard from '../../components/EventCard/EventCard';
import styles from './styles';
import { API_URL, tokens } from '../../variables/ip';
import axios from 'axios';

const EventList = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          description={event.description}
          imageSource={{ uri: event.eventImage }}
          count={event.approvalCount}
          date={event.startDateTime}
          creatorText={event.userProfile.username}
          rating={event.userProfile.averageRating }
        />
      ))}
    </>
  );
};

const RecommendationsScreen = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCity, setSelectedCity] = useState('Москва');

  const fetchEvents = async (reset = false) => {
    if (reset) {
      setEvents([]);
      setPage(0);
      setHasMore(true);
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `http://${API_URL}/v1/events/recommended`,
        {
          cityName: selectedCity,
          searchQuery: '',
        },
        {
          params: {
            page: reset ? 0 : page,
            size: 10,
          },
          headers: tokens.accessToken
            ? { Authorization: `Bearer ${tokens.accessToken}` }
            : {},
        }
      );

      const data = response.data.content;
      console.log(data);

      setEvents((prevEvents) => {
        const eventIds = new Set(prevEvents.map((e) => e.id));
        const uniqueEvents = data.filter((e) => !eventIds.has(e.id));
        return reset ? uniqueEvents : [...prevEvents, ...uniqueEvents];
      });

      setHasMore(data.length > 0);
    } catch (error) {
      console.error('Ошибка загрузки мероприятий:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(true); 
  }, [selectedCity]); 

  useEffect(() => {
    if (page > 0) {
      fetchEvents(false); 
    }
  }, [page]);

  const handleLoadMore = () => {
    if (hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
    >
      <View style={{ flex: 1 }}>
        <ButtonGroup />
        <SearchBar onCityChange={(city) => setSelectedCity(city)} />
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          onScroll={({ nativeEvent }) => {
            const isBottom =
              nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
              nativeEvent.contentSize.height;
            if (isBottom) {
              handleLoadMore();
            }
          }}
          scrollEventThrottle={400}
        >
          <EventList events={events} />
          {!loading && events.length === 0 && (
            <Text style={styles.noEventsText}>В этом городе нет мероприятий </Text>
          )}
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
          {hasMore && !loading && <Text style={styles.loadingText}></Text>}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RecommendationsScreen;

