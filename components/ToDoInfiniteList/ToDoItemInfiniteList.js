import { ActivityIndicator, View } from 'react-native';
import { useToDoItems } from '../../hooks/useToDoItems';
import ToDoItem from './ToDoItem';
import { FlatList } from 'react-native-gesture-handler';
import ToDoListEmpty from './ToDoListEmpty';
import { useEffect } from 'react';

export default function ToDoItemInfiniteList({items, getMoreItems ,isLastItem, loading, refresh}) {
  
  return (
    <View className="w-full px-4 ">
      <FlatList
        data={items}
        renderItem={({item})=>{
          return <View className="py-3"> 
            <ToDoItem text={item.Text} id={item.id} isCompleted={item.isCompleted} refresh={refresh}/>
          </View>
        }}
        onRefresh={refresh}
        keyExtractor={(item, index)=> `${item.id}-${index}`}
        showsVerticalScrollIndicator={false}
        onEndReached={getMoreItems}
        onEndReachedThreshold={0.4}
        scrollEventThrottle={150}
        ListFooterComponent={()=> isLastItem && !loading ? <View className="py-8" /> : 
          <View className="py-4"> 
            <ActivityIndicator color="#ea580c"  />
          </View>}
        ListEmptyComponent={()=> loading ? null : <ToDoListEmpty/>}
      />
    </View>
  );
}

