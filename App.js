import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Switch } from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <TodoList />
    </View>
  );
}

function TodoList(){
  const [todos, setTodos] = useState([
    {text: 'Buy shopping', completed: false},
    {text: 'Finish homework', completed: false},
    {text: 'Go for a run', completed: false}
  ]);
  const [text, setText] = useState('');

  const addTodo = () => {
    setTodos([...todos, {text: text, completed: false}]);
    setText(''); // Clear the input field after adding task
  };

  const clearTodos = () => {
    setTodos([]); // Clear all tasks
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos]; // ... spread operator creates a shallow copy to ensure you don't edit the original
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <Text>This is now the to-do list</Text>
      
      {/* Input field for new to-do */}
      <TextInput
        style={styles.input}
        placeholder="Add new task" // This is what you see when the box is empty
        value={text} // This is what you typed in the box
        onChangeText={setText} // This remembers what you typed
      />
      
      {/* Button to add a new task */}
      <Button title="Add Task" onPress={addTodo} />
      
      {/* Button to clear all tasks */}
      <Button title="Clear All Tasks" onPress={clearTodos} />
      
      {/* Display the list of to-dos */}
      {todos.map((todo, index) => (
        <View key={index} style={styles.todoItem}>
          
          {/* Switch to toggle task completion */}
          <Switch
            value={todo.completed} // Checked or not checked
            onValueChange={() => toggleComplete(index)} // Changes when you click it
          />
          
          {/* Text of the task */}
          <Text style={todo.completed ? styles.completed : null}>{todo.text}</Text>
          
        </View>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: '80%',
  },
  todoItem: {
    marginBottom: 15, // Add margin between items
    flexDirection: 'row',
    alignItems: 'center'
  },
  completed: {
    textDecorationLine: 'line-through',
  },
});

