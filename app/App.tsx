import { Text, View } from "react-native";
import Profile from "./src/Profile";
import { Card, CardContent } from "./src/components/Card";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-200">
      <Card className="bg-white w-48 h-16 rounded-sm">
        <CardContent>
          <Text className="font-bold">App</Text>
          <Profile />
        </CardContent>
      </Card>
    </View>
  );
}
