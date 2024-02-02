import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, LogBox, Platform, SafeAreaView, Text, View } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomSelectInput from '../components/CustomSelectInput';
import CustomButton from '../components/CustomButton';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { useEditToDoItem } from '../hooks/useEditToDoItem';
import { Loading } from '../components/Loading';
import { useDeleteToDoItem } from '../hooks/useDeleteToDoItem';


export default function EditItemScreen({route}) {
  // This message do not apply to our case
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);


  const { text, isCompleted, id, refreshCallback } = route.params;

  const { navigate } = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Title: text,
      Status: isCompleted,
    },
  })
  const onSuccess = async (data) => {
    navigate('Home')
    refreshCallback && refreshCallback()
  }

  const { loading, editItem } = useEditToDoItem({onEditCallback: onSuccess})
  const { loading: loadingDelete, showDeleteDialog } = useDeleteToDoItem({onDeleteCallback: onSuccess})


  return (
    <SafeAreaView className="bg-gray-200 flex-1 items-center  py-2 px-4">
      <StatusBar style="auto" />
      {loading || loadingDelete ? <Loading/> : null}
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
          <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomSelectInput label="Estado"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={errors.Status ? 'Estado es requerido' : null}
            />
          )}
          name="Status"
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View className="flex-row w-full pb-4">
            <CustomButton style={{marginHorizontal: 4}} text="Editar" onPress={handleSubmit((data)=>editItem(data, id))} />
            <CustomButton style={{backgroundColor: "#dc2626", marginHorizontal: 4 }} text="Eliminar" onPress={()=>showDeleteDialog(id)} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

