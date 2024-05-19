import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import CalendarComponent from './src/components/CalendarComponent';
import BoulderRecordStackScreen from './src/components/BoulderRecordStackScreen';
import WorkoutRecordComponent from './src/components/WorkoutRecordComponent';


const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let emoji;
            if (route.name === '출석체크') {
              emoji = '📅';
            } else if (route.name === '볼더링 과제') {
              emoji = '🧗‍♂️'; // 클라이밍 이모지
            } else if (route.name === 'Workout Record') {
              emoji = '🏋️‍♀️'; // 역도 이모지
            }
            return <Text style={{ fontSize: focused ? 30 : 25 }}>{emoji}</Text>;
          },
          // 각 탭 활성/비활성시 색상 변경
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="출석체크" component={CalendarComponent} />
        <Tab.Screen name="볼더링 과제" component={BoulderRecordStackScreen} />
        <Tab.Screen name="Workout Record" component={WorkoutRecordComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
