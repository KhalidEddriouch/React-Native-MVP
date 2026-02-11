import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import RatingStars from '../components/RatingStars';
import PrimaryButton from '../components/PrimaryButton';
import { useRequest } from '../context/RequestContext';

const RatingScreen = ({ navigation }: any) => {
  const [rating, setRating] = useState(0);
  const { setRating: saveRating, resetRequest } = useRequest();

  const handleSubmit = () => {
    if (rating === 0) {
      Alert.alert('Rating required', 'Please rate the service before submitting.');
      return;
    }

    // Save rating in context
    saveRating(rating);

    // Show completion message
    Alert.alert(
      'Task Completed ✅',
      'Your service request has been completed successfully.',
      [
        {
          text: 'OK',
          onPress: () => {
            resetRequest();
            navigation.navigate('Home');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate the Service</Text>

      <Text style={styles.subtitle}>
        How satisfied are you with the service?
      </Text>

      <RatingStars rating={rating} onChange={setRating} />

      <PrimaryButton title="Submit Rating" onPress={handleSubmit} />
    </View>
  );
};

export default RatingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#555',
  },
});
