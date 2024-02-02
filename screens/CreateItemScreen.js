import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, LogBox, Platform, SafeAreaView, Text, View } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomSelectInput from '../components/CustomSelectInput';
import CustomButton from '../components/CustomButton';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { useCreateToDoItem } from '../hooks/useCreateToDoItem';
import { Loading } from '../components/Loading';

export default function CreateItemScreen({route}) {
  const { onCreateCallback } = route.params;

  // This message do not apply to our case
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const { navigate } = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Title: "",
    },
  })

  const onSuccess = async (data) => {
    navigate('Home')
    onCreateCallback && onCreateCallback()
  }

  const { loading, createItem } = useCreateToDoItem({onCreateCallback: onSuccess})

  return (
    <SafeAreaView className="bg-gray-200 flex-1 items-center  py-2 px-4">
      <StatusBar style="auto" />
      {loading ? <Loading/> : null}
      <View className="w-full flex-1 ">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput placeholder="Ej: Sacar la basura" label="Titulo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.Title ? 'Titulo es requerido' : null}
            />
          )}
          name="Title"
        />
        <CustomSelectInput     items={[
              { label: 'Pendiente', value: false },
              { label: 'Terminada', value: true },
          ]} value={false} label="Estado" disabled />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View className="flex-row w-full pb-4">
         <CustomButton text="Crear nuevo item" onPress={handleSubmit(createItem)} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

