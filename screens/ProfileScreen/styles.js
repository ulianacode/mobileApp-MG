import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {
  backgroundColor: '#F26430',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
 },
 boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: 'auto', 
    width: '90%',
    backgroundColor: '#FBF6F4',
    paddingHorizontal: 20, 
 },

 bottomBoxText: {
    bottom: 2,
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
  },
 icon: {
    width: '100%', 
    height: undefined, 
    aspectRatio: 1, 
 },
 iconTopRight: { 
  position: 'absolute',
  top: 15, 
  right: -170, 
  zIndex: 1, 
 },
 fieldContainer: {
  width: '100%', 
  paddingBottom: 10,
 },
 labelContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 0,
  paddingVertical: 5,
  top: 5,
 },
 label: {
  fontSize: 20,
  marginBottom: 0,
  lineHeight: 20,
 },
 miniiconmail: {
    marginRight: 10,
    width: 23,
    height: 20,
  },

 miniiconplanet: {
    marginRight: 10,
    width: 25,
    height: 25,
  },

  miniicongender: {
    marginRight: 5,
    width: 30,
    height: 24,
  },

  miniiconstar: {
    marginRight: 10,
    width: 23,
    height: 23,
    marginLeft: 5,
    marginBottom: 5,
  },

  miniiconabout: {
  width: 25,
  height: 25,
  marginRight: 10,
  },

 line: {
  height: 5,
  width: '150%', 
  backgroundColor: '#F26430',
  marginVertical: 5, 
  marginLeft: -20,
 }, 

 avatarContainer: {
  alignItems: 'center',
  marginBottom: 20,
 },
 avatar: {
  width: 142, 
  height: 142, 
  borderRadius: 50, 
  marginBottom: 10, 
  marginTop: 20,
 },
 name: {
  fontSize: 24,
  fontWeight: 'bold',
 },
 nickname: {
  fontSize: 20,
  color: 'gray', 
 },
 createEventButton: {
    marginTop: -25,
    padding: 10,
    backgroundColor: '#FBF6F4', 
    borderRadius: 30,
    borderWidth: 10, 
    alignItems: 'center',
    borderColor: '#F26430', 
},
createEventButtonText: {
    color: '#000000', 
    fontSize: 16,
    fontWeight: 'bold',
},
});

export default styles;





