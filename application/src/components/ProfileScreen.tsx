import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.image}
        />
      </View>
      <Text style={styles.name}>Nome do Usuário</Text>
      <Text style={styles.text}>Email: usuario@email.com</Text>

      <Text style={styles.description}>
        Já participou de diversos eventos como voluntário, contribuindo para o sucesso de iniciativas sociais e culturais.
        Seu engajamento inclui eventos como feiras de startups e workshops comunitários.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    borderRadius: 75,
    overflow: 'hidden',
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#444',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default ProfileScreen;
