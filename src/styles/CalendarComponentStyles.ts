import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  calendar: {
    paddingTop: 10,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: 'rgb(39, 39, 41)',
    borderRadius: 10,
  },
  logo: {
    width: 60,  // 적절한 크기로 조정
    height: 60, // 적절한 크기로 조정
    resizeMode: 'contain',
    marginBottom: 50,
    alignSelf: 'center',
  },
  totalCheckedDays: {
    marginTop: 50,
    fontSize: 25,
    color: 'white', // 적절한 색상으로 조정
    textAlign: 'center',
  },
});
