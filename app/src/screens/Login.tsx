import { Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const LoginPage = () => {
    return ( <View className="items-center">
        <Text className="text-xl font-semibold pb-6">Faça seu Login</Text>
        <View className="w-72 pb-12">
            <View className="pb-4">
            <Text className="pb-2 font-semibold">Email</Text>
            <Input placeholder="Digite seu email"/>
            </View>
            <View>
            <Text className="pb-2 font-semibold">Senha</Text>
            <Input placeholder="Digite sua senha" />
            </View>
        </View>
        <Button label="Entrar" className="w-60 rounded-full" />
    </View> );
}
 
export default LoginPage;