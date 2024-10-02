import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import Toast from 'react-native-toast-message';

const EventDetails = ({ route }) => {
  const { event } = route.params;
  const navigation = useNavigation();

  const handleBuyTicket = () => {
    Toast.show({
      type: 'success',
      text1: 'Ingresso comprado!',
      text2: `Você comprou um ingresso para ${event.title}`,
    });
  };

  const handleVolunteer = () => {
    Toast.show({
      type: 'success',
      text1: 'Inscrição realizada!',
      text2: `Você se inscreveu como voluntário para ${event.title}`,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: event.image }} style={styles.image} />
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <Text style={styles.details}>Data: {event.date}</Text>
        <Text style={styles.details}>Hora: {event.time}</Text>
        <Text style={styles.details}>Número de Participantes: {event.participants}</Text>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: event.location.latitude,
            longitude: event.location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: event.location.latitude,
              longitude: event.location.longitude,
            }}
            title={event.title}
            description="Localização do evento"
          />
        </MapView>

        <View style={styles.buttonContainer}>
          <Button title="Comprar Ingresso" onPress={handleBuyTicket} />
          <Button title="Ser Voluntário" onPress={handleVolunteer} />
        </View>
      </View>
    </View>
  );
};

// Estilos...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  details: {
    fontSize: 14,
    color: '#999',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default EventDetails;
