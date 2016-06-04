import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
  },
  list: {
    width: '100%',
  },
  row: {
    borderWidth: 0.5,
    borderColor: '#aaa',
    padding: 15,
    flex: 1,
  },
  rowText: {
    fontSize: 18,
  },
  subText: {
    marginTop: 4,
    fontSize: 12,
    color: '#676767',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  done: {
    textDecorationLine: 'line-through',
    color: '#9a9a9a',
  }
})

export default styles
