import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BackIcon, MenuIcon } from '../icons/icons';
import { useRouter } from 'expo-router';

const NavigationLayout = ({ children }) => {
  const router = useRouter();

  const RouterBack = ()=>{
    router.back()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header} className="">
        <TouchableOpacity style={styles.backView} onPress={RouterBack}>
          <BackIcon />
          <Text style={styles.headerText}>Elige tu sendero</Text>
        </TouchableOpacity>
        <View>
          <MenuIcon />
        </View>
      </View>

      <View style={styles.content}r>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
  },
  header: {
    marginTop: 40,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 16
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    marginTop:10
  },
  backView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default NavigationLayout;