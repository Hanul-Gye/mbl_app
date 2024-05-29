import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const WorkoutRecordComponent = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 1.2,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (exercise: { id: number; name: string; image: any; size: number }) => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate("ExerciseDetail", { exercise });
    });
  };

  const exercises = [
    { id: 1, name: 'Push Up', image: require('../../assets/workouts/push-up.png'), size: 100 },
    { id: 2, name: 'Squat', image: require('../../assets/workouts/squat.png'), size: 120 },
    { id: 3, name: 'Pull Up', image: require('../../assets/workouts/pull-up.png'), size: 110 },
    { id: 4, name: 'Sit Up', image: require('../../assets/workouts/sit-up.png'), size: 130 },
    { id: 5, name: 'Plank', image: require('../../assets/workouts/plank.png'), size: 90 },
    { id: 6, name: 'Dumbbell Curl', image: require('../../assets/workouts/dumbbell-curl.png'), size: 115 },
    { id: 7, name: 'Running', image: require('../../assets/workouts/running.png'), size: 125 },
  ];

  return (
    <View style={styles.container}>
      {exercises.map((exercise) => (
        <TouchableOpacity
          key={exercise.id}
          onPressIn={handlePressIn}
          onPressOut={() => handlePressOut(exercise)}
          style={{ ...styles.iconContainer, width: exercise.size, height: exercise.size, borderRadius: exercise.size / 2 }}
        >
          <Animated.View style={[styles.iconWrapper, { transform: [{ scale: scaleValue }] }]}>
            <Image source={exercise.image} style={{ width: exercise.size - 20, height: exercise.size - 20, resizeMode: 'contain' }} />
          </Animated.View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgb(18, 18, 18)',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderColor: '#00ced1',
    backgroundColor: '#121212',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WorkoutRecordComponent;
