import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { useRouter } from 'expo-router';

const InitialPage = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-end">
      <View className="mb-40 w-72 items-center gap-2">
        <Button
          label="Login"
          className="w-full rounded-full"
          onPress={() => router.push('/login')}
        />
        <Text className="font-bold">Ou</Text>
        <Button
          label="Cadastrar"
          className="w-full rounded-full"
          onPress={() => router.push('/create-type-selector')}
        />
      </View>
    </View>
  );
};

export default InitialPage;
