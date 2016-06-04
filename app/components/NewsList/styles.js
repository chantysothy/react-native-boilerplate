import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  refresh: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginTop: 60,
    width: '100%',
    backgroundColor: '#e9e9ef',
  },
})

export default styles
