import { Text, View } from "react-native";
import { Button } from "../components/Button";

const CreateTypeSelector = () => {
  return (
    <View className="flex-1 items-center justify-end">
        <Text className="text-xl font-semibold mb-28">Escolha seu tipo de conta</Text>
      <View className="mb-40 w-72 items-center gap-2">
        <Button label="Cliente" className="w-full rounded-full" />
        <Text className="font-bold">Ou</Text>
        <Button label="Organizador" className="w-full rounded-full" />
      </View>
    </View>
  );
};

export default CreateTypeSelector;
