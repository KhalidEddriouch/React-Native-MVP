import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuotesScreen = ({ navigation }: any) => {
  const quotes = [
    { id: 1, name: 'Service Pro', price: '150 MAD', rating: 4.5 },
    { id: 2, name: 'QuickFix', price: '180 MAD', rating: 4.2 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compare Quotes</Text>

      {quotes.map(q => (
        <View key={q.id} style={styles.card}>
          <Text>{q.name}</Text>
          <Text>{q.price}</Text>
          <Text>⭐ {q.rating}</Text>
          <Button
            title="Choose"
            onPress={() => navigation.navigate('Schedule')}
          />
        </View>
      ))}
    </View>
  );
};

export default QuotesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: {
    padding: 15,
    backgroundColor: '#F0FDF4',
    borderRadius: 10,
    marginBottom: 15,
  },
});
