import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: 'column',
  },
  buttonContainer: {
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button1: {
    flex: 1,
    backgroundColor: '#F8936E',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  button2: {
    flex: 1,
    backgroundColor: '#ADA5A1',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
  },
  interBold: {
    fontFamily: 'Inter_700Bold',
  },
  imageStyle: {
    width: 40,
    height: 40,
    marginRight: -2,
    marginTop: 10,
  },
  statusBar: {
    position: 'absolute',
    top: 45, // Снижаем позицию статус-бара ближе к кнопкам
    left: -116,
    width: 150,
    zIndex: 10, // Устанавливаем высокий zIndex, чтобы он был выше кнопок
    backgroundColor: '#FBF6F4',
    borderColor: '#000000',
    borderWidth: 3,
    borderRadius: 0,
    textAlign: 'end',
    padding: 10, // Добавим немного padding для внутреннего отступа
  },
  statusOption: {
    color: '#000000',
    textAlign: 'right',
    paddingVertical: 5, // Вертикальные отступы между текстом и границей
    borderBottomWidth: 3, // Черная полоска между элементами
    borderBottomColor: '#000000', // Цвет черной полоски
  
  },
  lastStatusOption: {
    textAlign: 'right',
    borderBottomWidth: 0,
  },
  conteinerStatusBar: {
    position: 'absolute', // Делаем его абсолютным, чтобы он перекрывал другие элементы
    top: 53, // Начало контейнера на нуле
    left: 373,
    zIndex: 5, // Устанавливаем zIndex выше, чем у других элементов (но ниже статус-бара)
  },
});

export default styles;
