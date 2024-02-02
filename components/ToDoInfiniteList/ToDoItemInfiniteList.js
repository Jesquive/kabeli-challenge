import { ActivityIndicator, Button, Text, View } from 'react-native';
import ToDoItem from './ToDoItem';
import { FlatList } from 'react-native-gesture-handler';
import ToDoListEmpty from './ToDoListEmpty';
import CustomButton from '../CustomButton';

export default function ToDoItemInfiniteList({items, getMoreItems ,isLastItem, loading, refresh, error}) {
  
  return (
    <View className="w-full px-4 ">
      {error ? 
        <View className="flex flex-col items-center justify-center mt-4 h-24 ">
          <Text className="mb-2">Ha ocurrido un error.</Text>
          <CustomButton onPress={refresh} text="Reintentar"/>
        </View>
        : 
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
      }

    </View>
  );
}

