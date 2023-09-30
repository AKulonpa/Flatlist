import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {DATA} from './Data';
import Row from './components/Row';

export default function App() {

  const renderItem = ({item}) => (
    <Text key={item.id}>{item.lastname}</Text>
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem= {({item}) => (
          <Row person={item} />
        )}
        ></FlatList>
    </SafeAreaView>
  );
}

/*function renderItem({item}) {
  return (<Text>{item.lastname}</Text>);
}
*/

/*const renderItem = ({item}) => (
  <Text>{item.lastname}</Text>
)*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
