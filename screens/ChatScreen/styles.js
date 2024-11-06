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
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10, // Для сообщений слева
    marginLeft: 10,  // Для сообщений справа
},
  messageContent: {
    maxWidth: '75%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  username: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#F26430', // Цвет фона сообщения
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
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
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#FF8B7B',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsend: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyMessage: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
  leftMessageBubble: {
    backgroundColor: '#F8936E',  // Персиковый цвет для чужих сообщений
},
rightMessageBubble: {
    backgroundColor: '#F26430',  // Оранжевый для текущего пользователя
},
});

export default styles;