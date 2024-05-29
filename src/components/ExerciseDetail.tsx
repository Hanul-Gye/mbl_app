import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type Props = {
  route: RouteProp<RootStackParamList, 'ExerciseDetail'>;
};

const ExerciseDetail: React.FC<Props> = ({ route }) => {
  const { exercise } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default ExerciseDetail;