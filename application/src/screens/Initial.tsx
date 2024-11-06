import { Text, View } from "react-native";
import { Button } from "../components/Button";

const InitialPage = () => {
    return ( <View className="flex-1 items-center justify-end">
        <View className="mb-40 w-72 items-center gap-2">
            <Button label="Login" className="w-full rounded-full"/>
            <Text className="font-bold">Ou</Text>
            <Button label="Cadastrar" className="w-full rounded-full"/>
        </View>

    </View> );
}
 
export default InitialPage;