import React, { useEffect } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { LinkdnIcon } from '../component/icons/icons';
import LoginForm from '../component/forms/LoginForm';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';
import { EXPO_PUBLIC_VARIABLE_ENTORNO } from '@env';

async function save(key, value) {
    console.log("entre")
    await SecureStore.setItemAsync(key, JSON.stringify(value));
    console.log("Guarde")
  }

  console.log(EXPO_PUBLIC_VARIABLE_ENTORNO)

const Index = () => {
    const router = useRouter();

    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
          router.push('/screen1')
        } else {
          console.log('Inicia Sesion');
        }
      }
    
    useEffect(() => {
        getValueFor("auth_key")
    }, [])
    
    return (
        <ImageBackground
            source={require('../assets/fondoedit2.png')}
            className="h-screen w-screen items-center bg-cover lg:justify-center px-6  mt-10"
        >
            <View className="flex flex-col flex-1 items-center mt-1 w-full h-full ">
                <Image
                    source={require('../assets/iconosendos.png')}
                    className=" h-[60px] w-[250px] bg-cover mt-10"
                />
                <LoginForm save={save}/>
                <View className="mt-20 flex-1 items-center h-3/4">
                    <Text className="text-gray-400 mb-10">
                        o Continua con {EXPO_PUBLIC_VARIABLE_ENTORNO}
                    </Text>
                    <LinkdnIcon />
                    <View className="items-center mt-10">
                        <Text className="text-gray-500">
                            No tienes una cuenta?
                        </Text>
                        <Text>
                            <Text className="font-bold">Registrate </Text>con tu cuenta empresarial
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Index;
