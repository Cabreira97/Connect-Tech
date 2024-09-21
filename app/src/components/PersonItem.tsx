import { Image, Text, View } from "react-native";

const PersonItem = () => {
  return (
    <View className="flex flex-col justify-center items-center min-w-20 max-w-20">
      <View className="relative w-14 h-14 lg:w-36 lg:h-36">
        <Image
          source={require("../../assets/angelo.png")}
          className="rounded-full"
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
      </View>
      <Text className="font-medium text-center overflow-hidden text-ellipsis">
        Angelo
      </Text>
    </View>
  );
};

export default PersonItem;
