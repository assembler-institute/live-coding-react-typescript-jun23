import { StyleSheet, Text, TouchableWithoutFeedback, View, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Alert.alert('Dude! We got hitted!')}>
        <Text>Hola mundo</Text>
      </TouchableWithoutFeedback>
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
