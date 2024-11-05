import { Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const RegisterClient = () => {
    return ( <View className="items-center">
        <Text className="text-xl font-semibold pb-6">Faça seu cadastro</Text>
        <View className="w-72 pb-8 gap-2">
            <View>
            <Text className="pb-2 font-semibold">Nome</Text>
            <Input placeholder="Digite seu nome"/>
            </View>
            <View>
            <Text className="pb-2 font-semibold">Email</Text>
            <Input placeholder="Digite seu email" />
            </View>
            <View>
            <Text className="pb-2 font-semibold">CPF</Text>
            <Input placeholder="Digite seu CPF" />
            </View>
            <View>
            <Text className="pb-2 font-semibold">Senha</Text>
            <Input placeholder="Digite sua senha" />
            </View>
            <View>
            <Text className="pb-2 font-semibold">Confirme sua senha</Text>
            <Input placeholder="Digite sua senha novamente" />
            </View>
        </View>
        <Button label="Cadastrar" className="w-60 rounded-full" />
    </View> );
}
 
export default RegisterClient;