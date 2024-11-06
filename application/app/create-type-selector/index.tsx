import { Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { useRouter } from 'expo-router';

const CreateTypeSelector = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-end">
      <Text className="mb-28 text-xl font-semibold">Escolha seu tipo de conta</Text>
      <View className="mb-40 w-72 items-center gap-2">
        <Button
          label="Cliente"
          className="w-full rounded-full"
          onPress={() => router.push('/register-client')}
        />
        <Text className="font-bold">Ou</Text>
        <Button
          label="Organizador"
          className="w-full rounded-full"
          onPress={() => router.push('/register-organization')}
        />
      </View>
    </View>
  );
};

export default CreateTypeSelector;
