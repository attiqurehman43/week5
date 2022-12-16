import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const register = () => {
    // Creating form to navigate profile screen using Params
    navigation.navigate('Profile', {
      name: name,
      email: email,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.txtinpt}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.txtinpt}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        type="email"
      />
      <TextInput
        style={styles.txtinpt}
        placeholder="Enter Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.btnstl} onPress={register}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnstl: {
    height: 40,
    width: 80,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  txtinpt: {
    borderColor: '#808080',
    height: 60,
    width: 300,
    textAlign: 'center',
    borderBottomWidth: 2,
  },
});

export default Home;
