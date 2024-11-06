import { Image, Text, View, TouchableOpacity } from 'react-native';

interface EventItemProps {
  name: string;
  date: string;
  address: string;
}

const EventItem = ({ name, date, address }: EventItemProps) => {
  return (
    <TouchableOpacity className="min-w-[208px] max-w-[208px] cursor-pointer px-2">
      <View className="py-0">
        <View className="relative h-20 w-full overflow-hidden rounded-2xl">
          <Image
            source={require('../assets/image.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        </View>
        <Text className="overflow-hidden text-ellipsis text-2xl font-bold" numberOfLines={1}>
          {name}
        </Text>
        <Text className="overflow-hidden text-ellipsis font-semibold" numberOfLines={1}>
          {date}
        </Text>
        <Text className="overflow-hidden text-ellipsis font-semibold" numberOfLines={1}>
          {address}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventItem;
