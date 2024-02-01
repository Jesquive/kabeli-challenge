import { Text, View } from 'react-native';
import { useToDoItems } from '../../hooks/useToDoItems';
import ToDoItem from './ToDoItem';

export default function ToDoItemInfiniteList({text, status}) {
  
  const items = useToDoItems()

  return (
    <View className="w-full px-4">
      <ToDoItem text={items?.[0]?.Text}/>
    </View>
  );
}

