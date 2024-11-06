import { Image, Text, View, ScrollView } from 'react-native';
import { Card } from '../../../components/Card';
import EventItem from '../../../components/EventItem';
import PersonItem from '../../../components/PersonItem';
import SearchBar from '../../../components/SearchBar';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import axios from 'axios';

const getUserInfo = async () => {
  const access_token = await AsyncStorage.getItem('access_token');
  const user = await AsyncStorage.getItem('user');

  return { access_token, user };
};

const Home = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');

  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const response = await axios.get('http://192.168.130.125:3000/events', {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 5000,
    });

    if (response.status === 200) {
      setEvents(response.data);
    }
  };

  useEffect(() => {
    getUserInfo().then(async (user) => {
      if (!user.user || !user.access_token) {
        router.push('/login');
      } else {
        const data = JSON.parse(user.user);
        setNomeUsuario(data.name);
      }
    });

    fetchEvents();
  }, []);

  return (
    <ScrollView className="flex-1 bg-white">
      <Card className="flex">
        <View className="flex-1 px-5 pb-2 pt-12">
          <View className="px-7">
            <Text className="text-3xl font-bold">Olá {nomeUsuario}!</Text>
            <Text className="pb-3 font-semibold">Confira os eventos de hoje</Text>
          </View>
          <SearchBar />
        </View>
        <View className="relative flex-1">
          <Image
            source={require('../../../assets/image.png')}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: 170,
            }}
          />
        </View>
      </Card>

      <Card className="mb-3 py-2">
        <Text className="px-5 text-base font-semibold uppercase">Eventos próximos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-3 pt-2 ">
          {events.map((event: any) => (
            <EventItem key={event.id} name={event.name} date={event.date} address={event.address} />
          ))}
        </ScrollView>
      </Card>

      <Card className="mb-3 py-2">
        <Text className="px-5 text-base font-semibold uppercase">Eventos Populares</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-3 pt-2">
          {events.map((event: any) => (
            <EventItem key={event.id} name={event.name} date={event.date} address={event.address} />
          ))}
        </ScrollView>
      </Card>

      <Card className="mb-5 py-2 lg:pl-4">
        <Text className="px-5 pb-3 text-base font-semibold uppercase">Pessoas e empresas</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-5">
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
        </ScrollView>
      </Card>
    </ScrollView>
  );
};

export default Home;
