import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Text>Payment Method: Cash</Text>

      <Button
        title="Confirm Payment"
        onPress={() => navigation.navigate('Rating')}
      />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
