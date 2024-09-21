import { Image, Text, View, TouchableOpacity } from "react-native";

const EventItem = () => {
  return (
    <TouchableOpacity className="min-w-[208px] max-w-[208px] lg:min-w-[384px] lg:max-w-[384px] cursor-pointer">
      <View className="py-0">
        <View className="w-full h-20 lg:h-[9rem] relative rounded-2xl overflow-hidden">
          <Image
            source={require("../../assets/image.png")}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>
        <Text
          className="font-bold text-2xl overflow-hidden text-ellipsis"
          numberOfLines={1}
        >
          Nome do evento
        </Text>
        <Text
          className="font-semibold overflow-hidden text-ellipsis"
          numberOfLines={1}
        >
          11/11/1111
        </Text>
        <Text
          className="font-semibold overflow-hidden text-ellipsis"
          numberOfLines={1}
        >
           Rua Vaiti esquina com Nãoti
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventItem;
