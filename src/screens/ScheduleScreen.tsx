import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ScheduleScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule Visit</Text>
      <Text> Date: Tomorrow</Text>
      <Text> Time: 10:00 AM</Text>

      <Button
        title="Confirm Schedule"
        onPress={() => navigation.navigate('Payment')}
      />
    </View>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
