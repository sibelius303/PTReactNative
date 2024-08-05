import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { LinkdnIcon } from '../component/icons/icons';
import LoginForm from '../component/forms/LoginForm';

const Index = () => {
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
                <LoginForm />
                <View className="mt-20 flex-1 items-center h-3/4">
                    <Text className="text-gray-400 mb-10">
                        o Continua con
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
