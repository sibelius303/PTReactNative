import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Dimensions, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { LinkdnIcon, PassWordIcon, UserIcon } from '../icons/icons';

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        router.push('/screen1')
    };

    return (
        <View className="mt-32">
            <Text className="font-bold text-4xl mb-5 pl-6">Ingresa</Text>
            <View className="bg-white flex-row items-center border-2 rounded-lg 
                    p-4 mb-6 border-borderColor w-full">
                <TextInput
                    className="flex-1 ml-2"
                    placeholder="Correo electronico"
                    value={email}
                    onChangeText={setEmail}
                />
                <UserIcon />
            </View>
            <View className="bg-white flex-row items-center border-2 rounded-lg 
                    p-4 mb-6 border-borderColor w-full">
                <TextInput
                    className="flex-1 ml-2"
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <PassWordIcon />
            </View>
            <View className="items-end">
                <Text className="text-gray-400 text-end">
                    Olvide mi contraseña
                </Text>
            </View>
            <View className="mt-5">
                <TouchableOpacity
                    title="Iniciar Sesión"
                    className="bg-botonColor  text-lg w-full p-3 items-center rounded-lg"
                    onPress={handleLogin} >
                    <Text className="font-extrabold text-lg text-white tracking-widest">Inicia sesion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginForm;
