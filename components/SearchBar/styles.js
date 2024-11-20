import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  searchContainer: {
    top: 0,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  planetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    left: 10,
    marginRight: 10,
  
  },
  iconUser: {
    width: 35,
    height: 35,
    left: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#D3D3D3',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 40,
    borderColor: '#D3D3D3',
  },
  endIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    right: 45,
  },
  cityText: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 10,
  },
  interBold: {
    fontFamily: 'Inter_700Bold',
  },
  dropDownPickerContainer: {
    position: 'absolute',
    top: 45,
    zIndex: 10,
    width: '30%',
    left: '15%',
    backgroundColor: '#FBF6F4',
    borderRadius: 4,
    borderColor: "transparent",
    borderWidth: 1,
    maxHeight: 200,
  },
  flatListStyle: {
    maxHeight: 200,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 14,
  },
});


export default styles;
