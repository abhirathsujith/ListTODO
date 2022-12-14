import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.tasksWrapper}>
         <Text style={styles.sectionTitle}> Today's Tasksssss </Text>


         <View style={styles.items}>

         <Task text = {'Task1'} />
         <Task text = {'Task2'} />
         <Task text = {'Task2'} /> 
         <Task text = {'Task2'} />
         <Task text = {'Task2'} />
         <Task text = {'Task2'} />
         </View> 
 
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F54F',
   
  },

  tasksWrapper:{
  paddingTop: 80,
  paddingHorizontal: 20

  },
  sectionTitle:{
    fontSize: 30,
    fontWeight: 'bold',
    
  },
  items:{
    marginTop: 25,
  },
});
