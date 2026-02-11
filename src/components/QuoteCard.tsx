import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from './PrimaryButton';

interface Props {
  name: string;
  price: string;
  rating: number;
  onSelect: () => void;
}

const QuoteCard: React.FC<Props> = ({ name, price, rating, onSelect }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>💰 Price: {price}</Text>
      <Text>⭐ Rating: {rating}</Text>

      <PrimaryButton title="Choose" onPress={onSelect} />
    </View>
  );
};

export default QuoteCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0FDF4',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
});
