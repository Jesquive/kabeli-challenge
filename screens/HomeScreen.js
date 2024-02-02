import { StatusBar } from 'expo-status-bar';
import { SafeAreaView} from 'react-native';
import ToDoItemInfiniteList from '../components/ToDoInfiniteList/ToDoItemInfiniteList';
import FloatingButton from '../components/FloatingButton';
import { useToDoItems } from '../hooks/useToDoItems';

export default function HomeScreen({navigation}) {
  const {items, getMoreItems ,isLastItem, loading, refresh} = useToDoItems()

  const navigateToCreate = () =>{
    navigation.navigate('CreateItem', {onCreateCallback: refresh})
  }
  
  return (
    <SafeAreaView className="bg-gray-200 flex-1 items-center py-2 ">
      <ToDoItemInfiniteList items={items} getMoreItems={getMoreItems} isLastItem={isLastItem} loading={loading} refresh={refresh}/>
      <FloatingButton onPress={navigateToCreate}/>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

