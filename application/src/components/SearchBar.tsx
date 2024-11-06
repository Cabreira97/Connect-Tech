import { View } from "react-native";
import { Input } from "./Input";

const SearchBar = () => {
  return (
    <View className="flex items-center">
    
      <Input
        className="rounded-full px-14 mx-6 h-9 w-80 bg-gray-100"
        placeholder="Procure um evento"
      />
    </View>
  );
};

export default SearchBar;
