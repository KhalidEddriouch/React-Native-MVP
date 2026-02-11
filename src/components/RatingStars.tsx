import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  rating: number;
  onChange: (value: number) => void;
}

const RatingStars: React.FC<Props> = ({ rating, onChange }) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map(star => (
        <TouchableOpacity key={star} onPress={() => onChange(star)}>
          <Text style={star <= rating ? styles.active : styles.inactive}>
            ★
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RatingStars;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  active: {
    fontSize: 32,
    color: '#F59E0B',
    marginHorizontal: 4,
  },
  inactive: {
    fontSize: 32,
    color: '#D1D5DB',
    marginHorizontal: 4,
  },
});
