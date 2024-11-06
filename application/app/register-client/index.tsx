import { ScrollView, Text, View } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'expo-router';

const RegisterClient = () => {
  const router = useRouter();
  interface RegisterFormInputs {
    name: string;
    email: string;
    cpf: string;
    password: string;
    confirmPassword: string;
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    defaultValues: {
      name: '',
      email: '',
      cpf: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = (data: RegisterFormInputs) => {
    console.log(data);
    router.push('/home');
  };

  const getValues = (field: keyof RegisterFormInputs) => {
    return control._formValues[field];
  };
  return (
    <ScrollView className="flex-1 pt-16">
      <View className="flex-1 items-center">
        <Text className="pb-6 text-xl font-semibold">Faça seu cadastro</Text>
        <View className="w-72 gap-2 pb-8">
          <View>
            <Controller
              control={control}
              name="name"
              rules={{ required: 'O campo nome é obrigatório' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Digite seu nome"
                  label="Nome"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />
          </View>
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
                <Input
                  placeholder="Digite seu e-mail"
                  label="E-mail"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />
          </View>
          <View>
            <Controller
              control={control}
              name="cpf"
              rules={{ required: 'O campo cpf é obrigatório' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Digite seu cpf"
                  label="CPF"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  errorMessage={errors.cpf?.message}
                />
              )}
            />
          </View>
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
                <Input
                  placeholder="Digite sua senha"
                  label="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />
          </View>
          <View>
            <Controller
              control={control}
              name="confirmPassword"
              rules={{
                required: 'A confirmação da senha é obrigatória',
                validate: (value) => value === getValues('password') || 'As senhas não coincidem',
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Confirme sua senha"
                  label="Confirme a senha"
                  secureTextEntry
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  errorMessage={errors.confirmPassword?.message}
                />
              )}
            />
          </View>
        </View>
        <View className="items-center justify-center">
          <Button
            label="Registrar"
            className="m-auto w-80 rounded-full"
            labelClasses="text-xl font-semibold"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterClient;
