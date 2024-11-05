import { Image, Text, View, ScrollView } from "react-native";
import { Card } from "../components/Card";
import EventItem from "../components/EventItem";
import PersonItem from "../components/PersonItem";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <Card className="flex">
        <View className="flex-1 px-5 pt-12 pb-2">
          <View className="px-7">
            <Text className="font-bold text-3xl">Olá Usuário!</Text>
            <Text className="font-semibold pb-3">
              Confira os eventos de hoje
            </Text>
          </View>
          <SearchBar />
        </View>
        <View className="flex-1 relative">
          <Image
            source={require("../../assets/image.png")}
            style={{
              resizeMode: "cover",
              width: '100%',
              height: 170,
            }}
          />
        </View>
      </Card>

      <Card className="mb-3 py-2">
        <Text className="font-semibold text-base px-5 uppercase">
          Eventos próximos
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-3 pt-2 "
        >
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </ScrollView>
      </Card>

      <Card className="mb-3 py-2">
        <Text className="font-semibold text-base px-5 uppercase">
          Eventos Populares
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-3 pt-2"
        >
          <EventItem />
          <EventItem />
          <EventItem />
        </ScrollView>
      </Card>

      <Card className="mb-5 py-2 lg:pl-4">
        <Text className="font-semibold text-base px-5 pb-3 uppercase">
          Pessoas e empresas
        </Text>
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
