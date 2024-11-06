import { Image, Text, View, ScrollView } from 'react-native';
import { Card } from '../../../components/Card';
import EventItem from '../../../components/EventItem';
import PersonItem from '../../../components/PersonItem';
import SearchBar from '../../../components/SearchBar';

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <Card className="flex">
        <View className="flex-1 px-5 pb-2 pt-12">
          <View className="px-7">
            <Text className="text-3xl font-bold">Olá Usuário!</Text>
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
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </ScrollView>
      </Card>

      <Card className="mb-3 py-2">
        <Text className="px-5 text-base font-semibold uppercase">Eventos Populares</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-3 pt-2">
          <EventItem />
          <EventItem />
          <EventItem />
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
