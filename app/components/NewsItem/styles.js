import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  row: {
    borderWidth: 0.5,
    borderColor: '#aaa',
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'column',
    flex: 1,
  },
  comments: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  commentsText:{
    textAlign: 'center',
  },
  headerText: {
    flexWrap: 'nowrap',
    fontSize: 18,
  },
  headerSubText: {
    marginTop: 4,
    fontSize: 12,
    color: '#676767',
  },
})

export default styles
