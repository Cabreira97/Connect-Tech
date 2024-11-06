import { Text, View } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {
  const router = useRouter();
  interface LoginFormInputs {
    email: string;
    password: string;
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: 'onBlur',
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await axios.post('http://192.168.130.125:3000/auth/login', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          email: data.email,
          password: data.password,
        },
        timeout: 5000,
      });

      if (response.status === 201) {
        const { access_token, user } = response.data;
        await AsyncStorage.setItem('access_token', access_token);
        await AsyncStorage.setItem('user', JSON.stringify(user));

        router.push('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="pb-6 text-xl font-semibold">Faça seu Login</Text>
      <View className="w-72 pb-12">
        <View className="pb-4">
          <View>
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'O campo e-mail é obrigatório',
                minLength: {
                  value: 5,
                  message: 'O campo e-mail deve ter pelo menos 5 caracteres',
                },
                pattern: {
                  value: /^\S+@\S+$/,
                  message: 'Insira um e-mail válido',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Input
                    className="w-full"
                    placeholder="E-mail"
                    label="Insira seu e-mail"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={errors.email?.message}
                  />
                </View>
              )}
            />
          </View>
        </View>
        <View>
          <View>
            <Controller
              control={control}
              name="password"
              rules={{
                required: 'O campo senha é obrigatório',
                minLength: {
                  value: 8,
                  message: 'O campo senha deve ter pelo menos 8 caracteres',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Input
                    className="w-full"
                    placeholder="Senha"
                    label="Insira sua senha"
                    secureTextEntry
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={errors.password?.message}
                  />
                </View>
              )}
            />
          </View>
        </View>
      </View>
      <View className="items-center justify-center">
        <Button
          className="w-80 rounded-full"
          labelClasses="m-auto"
          label="Entrar"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default LoginPage;
