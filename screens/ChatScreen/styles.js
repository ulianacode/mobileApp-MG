import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5F0',
      },
      header: {
        backgroundColor: '#F8936E',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 17,
        height: 60,
      },
      chatContainer: {
        paddingHorizontal: 5,
        paddingBottom: 60,
        top: 10,
      },
      messageContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'flex-start',
      },
      leftMessage: {
        alignSelf: 'flex-start',
      },
      rightMessage: {
        alignSelf: 'flex-end',
        flexDirection: 'row-reverse',
      },
      avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
      },
      messageContent: {
        maxWidth: '75%',
      },
      username: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 2,
      },
      messageBubble: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#F8936E',
      },
      messageText: {
        color: 'white',
        fontSize: 14,
      },
      messageTime: {
        color: '#F8D5CE',
        fontSize: 10,
        textAlign: 'right',
        marginTop: 5,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F8936E',
        borderTopWidth: 1,
        borderTopColor: '#F8936E',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },
      input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#F8936E',
        backgroundColor: '#FFF',
      },
      iconsend: {
        marginLeft: 10,
        backgroundColor: '#FF8B7B',
        borderRadius: 0,
        padding: 10,
      },
      sendButtonText: {
        color: 'white',
        fontSize: 16,
      },
});
export default styles;