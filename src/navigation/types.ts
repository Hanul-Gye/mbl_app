import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    WorkoutRecord: undefined;
    ExerciseDetail: { exercise: { id: number; name: string } };
};

export type ExerciseDetailRouteProp = RouteProp<RootStackParamList, 'ExerciseDetail'>;
