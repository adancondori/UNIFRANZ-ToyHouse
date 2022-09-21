import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard,TouchableOpacity, Text } from 'react-native';

import Header from './src/components/header';
import ItemToy from './src/components/item_toy';
import AddToy from './src/list_toy/addToy'

export default function App() {
    const [todos, setTodos] = useState([
      { text: 'Toy car ', key: '1' },
      { text: 'horse toy', key: '2' },
      { text: 'children table', key: '3' },
      { text: 'mini laptop toy', key: '4' },

    ]);
  
    const pressHandler = (key) => {
      setTodos(prevTodos => {
        return prevTodos.filter(todo => todo.key != key);
      });
    };
  
    const submitHandler = (text) => {
      if(text.length > 3){
        setTodos(prevTodos => {
          return [
            { text, key: Math.random().toString() },
            ...prevTodos
          ];
        });
      } else {
        Alert.alert('OOPS', 'Todo must be over 3 characters long', [
          {text: 'Understood', onPress: () => console.log('alert closed') }
        ]);
      }
    };
  
    return (
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}> 
            <Text style={styles.comment}>Listado de juguetes</Text>

            <AddToy submitHandler={submitHandler} ></AddToy>
            <View style={styles.list}> 
                <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <ItemToy item={item} pressHandler={pressHandler}></ItemToy>
                )}
                />

            </View>
            
        </View>
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      padding: 40,
    },
    list: {
      marginTop: 20,
      backgroundColor: '#fff',
    },
      comment: {
        textAlign: 'left',
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
      },
      item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
      }
  });
  