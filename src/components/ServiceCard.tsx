import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const ServiceCard: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E6FFFA',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
