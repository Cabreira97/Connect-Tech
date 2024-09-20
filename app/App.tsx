import { Text, View } from 'react-native';
import Profile from './src/Profile';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>App</Text>
      <Profile />
    </View>
  );
}

