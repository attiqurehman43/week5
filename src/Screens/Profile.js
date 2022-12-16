import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const Profile = () => {
  const route = useRoute();
  return (
    //use of Params with empty field
    <View style={styles.container}>
      <Text>Name: {route?.params?.name || 'no name'}</Text>
      <Text>Email: {route?.params?.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
