import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer'

const NavLink = ({navigation, linkText, routeName}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>
            {linkText}
          </Text>
        </Spacer>
      </TouchableOpacity> 
  );
};

export default withNavigation(NavLink);

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    padding: 15,
  },
});
