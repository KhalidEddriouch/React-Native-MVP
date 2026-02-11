import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AIDiagnosticScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Diagnostic Result</Text>

      <Text style={styles.result}>
         Issue: Possible technical malfunction
      </Text>
      <Text style={styles.result}>⚠️ Urgency: Medium</Text>
      <Text style={styles.result}>
         Recommendation: Technician visit required
      </Text>

      <Button
        title="See Available Quotes"
        onPress={() => navigation.navigate('Quotes')}
      />
    </View>
  );
};

export default AIDiagnosticScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  result: { fontSize: 16, marginBottom: 10 },
});
