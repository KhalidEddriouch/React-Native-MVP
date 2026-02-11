import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateRequest'>;

const CreateRequestScreen: React.FC<Props> = ({ navigation, route }) => {
  const { category } = route.params;
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} Issue</Text>

      <TextInput
        placeholder="Describe the problem..."
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Button title="Upload Photo" onPress={pickImage} />

      {image && <Image source={{ uri: image }} style={styles.image} />}

      <Button
        title="Analyze Problem"
        onPress={() => navigation.navigate('AIDiagnostic')}
      />
    </View>
  );
};

export default CreateRequestScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    height: 80,
  },
  image: { width: '100%', height: 200, marginVertical: 15, borderRadius: 10 },
});
