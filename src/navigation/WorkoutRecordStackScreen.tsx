import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutRecordComponent from '../components/WorkoutRecordComponent';
import ExerciseDetail from '../components/ExerciseDetail';
import { RootStackParamList } from '../navigation/types';

const Stack = createStackNavigator<RootStackParamList>();

const WorkoutRecordStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WorkoutRecord" component={WorkoutRecordComponent} />
      <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />
    </Stack.Navigator>
  );
};

export default WorkoutRecordStackScreen;