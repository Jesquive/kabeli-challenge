import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, View } from 'react-native';
import CustomTextInput from '../components/CustomTextInput/CustomTextInput';
import CustomSelectInput from '../components/CustomSelectInput/CustomSelectInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { Controller, useForm } from 'react-hook-form';
import { createToDoItem } from '../services/ToDoItemsService';

export default function CreateItemScreen() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Title: "",
    },
  })

  const onSubmitButton = async (data) => {
    await createToDoItem(data)
  }


  return (
    <SafeAreaView className="flex-1 items-center  py-2 px-4">
      <StatusBar style="auto" />
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
      <CustomSelectInput label="Estado" disabled />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View className="flex-row w-full">
         <CustomButton text="Crear nuevo item" onPress={handleSubmit(onSubmitButton)} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

