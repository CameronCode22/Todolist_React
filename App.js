import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <TodoList />
    </View>
  );
}

function TodoList(){
  const [todos, setTodos] = useState(['Buy shopping','Finish homework','Go for a run']);


  return(
    <View style={styles.container}>
      <Text> This is now the to do list</Text>
      {/* Display the list of to-dos */}
      {todos.map((todo, index) =>(<Text key={index}>{todo}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});