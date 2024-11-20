// src/components/EventCard/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  eventContainer: {
    height: 220,
    width: '100%',
    borderRadius: 10,
    marginBottom: -20,
    position: 'relative',
    overflow: 'hidden',
    marginTop: 60,
    top: -60,
  },
  eventDetails: {
    backgroundColor: '#F26430',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    flex: 1,
    marginTop: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textBackground: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginRight: 20,
    top: -45,
 
  },
  eventImage: {
    width: '35%',
    height: '90%',
    resizeMode: 'contain',
    borderRadius: 15,
  },
  eventTitle: {
    fontSize: 16,
    color: '#000000',
    numberOfLines: 2,
    top: 10,
    ellipsizeMode: 'tail',
    textAlign: 'center', 
    justifyContent: 'center',
  },
  eventDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    numberOfLines: 3,
    top: 35,
    ellipsizeMode: 'tail',
  },
  backgroundEventContainer: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#F8936E',
    height: 100,
    width: '100%',
    borderRadius: 10,
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  creatorText: {
    color: '#FFFFFF',
    fontSize: 14,
    position: 'absolute',
    top: 7,
    left: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 7,
    right: 0,
  },
  starsText: {
    color: '#FFFFFF',
    fontSize: 14,
    right: 10,
  },
  starIcon: {
    width: 15,
    height: 15,
    marginRight: 13,
  },
  dateText: {
    color: '#FFFFFF',
    fontSize: 14,
    left: -160,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  iconText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  dateContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  interBold: {
    fontFamily: 'Inter_700Bold',
  },
  interRegular: {
    fontFamily: 'Inter_400Regular',
  },
});

export default styles;