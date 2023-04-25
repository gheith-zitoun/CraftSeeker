import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const dummy = ["a", "b", "d", "c", "e", "a", "ez", "aze"];
  const [data, setData] = useState(dummy);

  const handleDelete = (id) => {
    setData(data.filter((e, i) => i !== id));
  };

  return (
    <View style={styles.container}>
      <Text>life is shit</Text>
      <StatusBar style="auto" />
      <ScrollView>
        {data.map((e, i) => (
          <TouchableOpacity key={i} onPress={() => handleDelete(i)}>
            <Text>{e}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 33,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
