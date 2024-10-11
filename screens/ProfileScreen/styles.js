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
  backgroundColor: 'white',
  paddingHorizontal: 20, 
 },
 icon: {
  width: 130,
  height: 130,
 },
 iconTopRight: { 
  position: 'absolute',
  top: 20, 
  right: -170, 
  zIndex: 1, 
 },
 fieldContainer: {
  width: '100%', 
  paddingVertical: 10,
  top: 20,
 },
 labelContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 0,
  backgroundColor: 'black',
  paddingVertical: 5,
 },
 label: {
  fontSize: 20,
  marginBottom: 0,
  lineHeight: 5,
 },
 miniicon: {
  width: 20,
  height: 20,
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
});

export default styles;




