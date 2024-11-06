import '../global.css';

import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="register-organization/index" options={{ headerShown: false }} />
      <Stack.Screen name="register-client/index" options={{ headerShown: false }} />
      <Stack.Screen name="create-type-selector/index" options={{ headerShown: false }} />
    </Stack>
  );
}
