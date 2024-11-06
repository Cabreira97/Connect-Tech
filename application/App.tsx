import { Text, View } from "react-native";
import InitialPage from "./src/screens/Initial";
import LoginPage from "./src/screens/Login";
import CreateTypeSelector from "./src/screens/CreateTypeSelector";
import RegisterClient from "./src/screens/RegisterClient";
import RegisterOrganization from "./src/screens/RegisterOrganization";
import EventItem from "./src/components/EventItem";
import PersonItem from "./src/components/PersonItem";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-200">
      <RegisterOrganization />
    </View>
  );
}
