import { Text, View } from "react-native";
import InitialPage from "./src/screens/Initial";
import LoginPage from "./src/screens/Login";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-200">
      <LoginPage />
    </View>
  );
}
