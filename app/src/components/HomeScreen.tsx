import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const events = [
  {
    id: '1',
    title: 'Evento de Tecnologia',
    description: 'Um evento sobre as últimas novidades em tecnologia.',
    date: '2024-10-10',
    time: '14:00',
    participants: 150,
    imageUrl: 'https://via.placeholder.com/150',
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: '2',
    title: 'Feira de Startups',
    description: 'Conheça startups inovadoras e suas soluções.',
    date: '2024-11-05',
    time: '10:00',
    participants: 200,
    imageUrl: 'https://via.placeholder.com/150',
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: '3',
    title: 'Workshop de Design',
    description: 'Aprenda sobre as novas tendências de design gráfico.',
    date: '2024-12-15',
    time: '09:00',
    participants: 100,
    imageUrl: 'https://via.placeholder.com/150',
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('EventDetails', { event: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.details}>Data: {item.date} - Hora: {item.time}</Text>
              <Text style={styles.details}>Participantes: {item.participants}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
});

export default HomeScreen;
