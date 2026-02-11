import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const services = ['Plumbing', 'Electricity', 'Cleaning'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Service</Text>
      <Text style={styles.subtitle}>Available in Casablanca only</Text>

      {services.map(service => (
        <TouchableOpacity
          key={service}
          style={styles.card}
          onPress={() =>
            navigation.navigate('CreateRequest', { category: service })
          }
        >
          <Text style={styles.cardText}>{service}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#555', marginBottom: 20 },
  card: {
    padding: 20,
    backgroundColor: '#E6FFFA',
    borderRadius: 10,
    marginBottom: 15,
  },
  cardText: { fontSize: 18, fontWeight: '600' },
});
