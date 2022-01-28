import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text style={styles.text}>Account Screen</Text>
      <Spacer>
        <Button title={'Sign Out'} onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});
