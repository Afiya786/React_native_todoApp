import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text, View, StyleSheet,Image} from "react-native";
import { FlatList, TextInput, TouchableOpacity } from "react-native-web";
import SingleTodo from "./components/SingleTodo";


const App = () => {
  const[todo,  setTodo] = useState("");
  const[todos, setTodos] = useState([]);

  const handleAddTodo = () =>{
    if(!todo) return;

    setTodos([...todos, {id:Date.now(), text: todo}])
    setTodo("");

  }
  console.log(todos)
  


  return (
  
  <View style={styles.container}>
    <Text style={styles.heading}>TODO APP</Text>
    <hr></hr>
    <Image 
    style=
    {styles.edit}
    
    source={require('./assets/creativity.png')} />

    <hr></hr>
    <View style={styles.inputContainer}>
      <TextInput 
      onChangeText={

        (text)=> setTodo(text)
      }
      value={todo}
      placeholder="Enter a TODO"
       style={styles.input}/>
      <TouchableOpacity onPress ={handleAddTodo}>
        <Text style={styles.button}>GO</Text>
      </TouchableOpacity>

      <Image style={styles.editOne}
      
      source={require("./assets/light-bulb.png")}/>
    </View>

     <View style={{width:"100%", marginTop: 10}}>
      <FlatList
      style={styles.body}
      

      data={todos}
      renderItem={
        ({item}) => <SingleTodo 
        todo={item}
        todos={todos}
        setTodos ={setTodos}
        
        
        
        />
      } 
      keyExtractor={(item) => item.id.toString()}
      />
      </View>

      
      

     
      ``


    <StatusBar style={styles.button}>"auto"</StatusBar>
    
  </View>
    
  )
  
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor: "#98fb98"
    
  },
  heading:{
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "700",
    shadowColor:'white',
    shadowRadius:8,
  },

  edit:{
    height:200,
    width:200,
  },

  editOne:{
    height:130,
    width:130,


  },
  // body:{
  //   backgroundColor:"#008b8b",

  // },

  
  

  inputContainer:{
    flexDirection:'row',
    marginHorizontal:15,
    alignItems:'center',
    gap:10
    
    
  },

  contentContainer: {
    flexDirection: "row", // Arrange children horizontally
    alignItems: "center", // Center children vertically
    marginBottom: 10, 
  },

  input:{
    flex:1,
    shadowColor:'black',
    backgroundColor:'#ffefd5',
    shadowRadius:8,
    elevation:10,
    marginRight:5,
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:50,
    
  },
  button:{
    padding:13,
    backgroundColor:'#da70d6',
    borderRadius:50,
    elevation:10,
    shadowColor:'black',
    shadowRadius:5

  }
 

})