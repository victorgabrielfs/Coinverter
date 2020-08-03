import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultText: {
    fontSize: 100
  },
  resultButton: {
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 30,
    borderRadius: 50
  },
  resultButtonText: {
    color: '#fff',
  },
  queryInput: {
    color: '#fff',
    backgroundColor: '#777',
    width: 250,
    height: 35,
    fontSize: 25,
    alignItems: 'flex-end',
    paddingLeft: 10
  },
  queryButton: {
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 35,

  },
  queryButtonText: {
    color: '#fff',
  },
  queryInputButton: {
    flexDirection: 'row',
    marginTop: 20,

  },
  headerModal: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  headerModalText: {
    flex: 1,
    backgroundColor: '#777',
    color: "#fff",
    height: 60,
  },
  headerModalButton: {
    height: 60,
    width: 60,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerModalButtonText: {
    fontSize: 35,
    color: '#fff'
  }
})

export default styles