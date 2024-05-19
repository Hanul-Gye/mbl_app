import React, { useState, useEffect } from 'react';
import { Calendar, DateData } from 'react-native-calendars';
import '../data/LocaleConfigData'; // LocaleConfig 설정 추가
import { View, Alert, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles/CalendarComponentStyles';

interface MarkedDatesType {
  [key: string]: { selected: boolean; selectedColor: string };
}

// 커밋 테스트
const CalendarComponent: React.FC = () => {
  // 출석체크 데이터 상태 관리
  const [markedDates, setMarkedDates] = useState<MarkedDatesType>({});

  const onDayPress = (day: DateData) => {
    if (markedDates[day.dateString]) {
      // 이미 체크된 날짜인 경우
      Alert.alert(
        '출석체크 해제',
        '해당 날짜의 출석체크를 해제할까요?',
        [
          { text: '취소', style: 'cancel' },
          { text: '확인', onPress: () => removeMarkedDate(day.dateString) }
        ],
        { cancelable: true }
      );
    } else {
      // 체크되지 않은 날짜인 경우
      Alert.alert(
        '출석체크',
        '해당 날짜에 출석체크를 할까요?',
        [
          { text: '취소', style: 'cancel' },
          { text: '확인', onPress: () => addMarkedDate(day.dateString) }
        ],
        { cancelable: true }
      );
    }
  };

  const storeMarkedDates = async (newMarkedDates: MarkedDatesType) => {
    try {
      const jsonValue = JSON.stringify(newMarkedDates);
      await AsyncStorage.setItem('markedDates', jsonValue);
    } catch (e) {
      // 저장 에러 처리
    }
  };

  const addMarkedDate = async (dateString: string) => {
    const newMarkedDates = {
      ...markedDates,
      [dateString]: { selected: true, selectedColor: 'tomato' }
    };
    setMarkedDates(newMarkedDates);
    await storeMarkedDates(newMarkedDates);
  };
  
  const removeMarkedDate = async (dateString: string) => {
    const newMarkedDates = { ...markedDates };
    delete newMarkedDates[dateString];
    setMarkedDates(newMarkedDates);
    await storeMarkedDates(newMarkedDates);
  };

  const loadMarkedDates = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('markedDates');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // 불러오기 에러 처리
    }
  };

  // 컴포넌트 마운트 시 출석체크 데이터 불러오기
  useEffect(() => {
    loadMarkedDates().then(data => {
      if (data) {
        setMarkedDates(data);
      }
    });
  }, []);

  // 총 출석체크 일수 계산
  const totalCheckedDays = Object.keys(markedDates).length;

  return (
    <View style={styles.container}>
      {/* 로고 이미지 */}
      <Image
        source={require('../../assets/logo_upper.png')} // 로고 이미지 경로
        style={styles.logo}
      />
      
      <Calendar
        onDayPress={onDayPress}
        markedDates={markedDates}
        style={styles.calendar}
        // 캘린더 내 스타일 수정
        theme={{
          calendarBackground: 'rgb(18, 18, 18)',
          todayTextColor: 'tomato',
          arrowColor: 'tomato',
          textDayFontSize: 18,
          textMonthFontSize: 20,
          monthTextColor: 'rgb(229, 229, 231)',
          textMonthFontWeight: 'bold',
          textSectionTitleColor: 'rgb(229, 229, 231)',
          dayTextColor: '#4f5b66',
          textDayHeaderFontWeight: 'bold',
        }}
        // 이전 달, 다음 달 날짜 숨기기
        hideExtraDays={true}
        // 달 포맷 지정
        monthFormat={'M월'}
      />

      {/* 출석체크 일수 표시 */}
      <Text style={styles.totalCheckedDays}>
        총 출석체크 일수: {totalCheckedDays}일
      </Text>
    </View>
  );
};

export default CalendarComponent;
