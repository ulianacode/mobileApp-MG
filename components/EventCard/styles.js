// src/components/EventCard/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  eventContainer: {
    height: 235,
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
    borderRadius: 20,
    marginRight: 10,
    top: -51,
 
  },
  eventImage: {
    width: '40%',
    height: '85%',
    resizeMode: 'stretch',
    borderRadius: 20,
    marginTop: -20,
  },  
  eventTitle: {
    fontSize: 20,
    color: '#000000',
    numberOfLines: 2,
    top: 10,
    ellipsizeMode: 'tail',
    textAlign: 'center', 
    justifyContent: 'center',
  },
  eventDescription: {
    fontSize: 16,
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
    fontSize: 18,
    position: 'absolute',
    top: 3,
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
    fontSize: 16,
    right: 10,
    top: -2,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
    top: -2,
  },
  dateText: {
    color: '#FFFFFF',
    fontSize: 16,
    right: 3,
    top: 3
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 6,
    left: 10,
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  iconText: {
    fontSize: 16,
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