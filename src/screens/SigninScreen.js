import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText={'Signin to Tracker'}
        errorMessage={state.errorMessage}
        onSubmit={signin}
        btnText={'Sign In'}
      />
      <NavLink
        linkText={"Don't have an Account? Sign up Here!"}
        routeName={'Signup'}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
});
