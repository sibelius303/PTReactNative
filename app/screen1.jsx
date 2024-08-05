import { Text, View, TouchableOpacity, Image, Platform } from "react-native";
import NavigationLayout from "../component/layouts/NavigationLayout";
import { useRouter } from "expo-router";
import { SelectComponent } from "../component/utils/SelectComponent";

export default function Screen1() {
    const router = useRouter();
    const handleActive = () => {
        router.push('screen2')
    }

    const isIPhone = Platform.OS === 'ios' && Platform.isPad === false;

    return (
        <NavigationLayout>
            <View className={isIPhone ? "h-screen w-screen pr-8 justify-between px-4 pb-6" 
                : "h-screen w-screen pr-8 justify-between px-4"}
            >
                <View>
                    <View className="flex-row">
                        <View className="w-1/2">
                            <Text className="text-xl">Hola, Carlos</Text>
                            <Text className="text-gray-500">Vas a llegar lejos</Text>
                        </View>
                        <View className="w-1/2">
                            <Text className="text-xl text-right text-botonColor">Asistente de Tienda</Text>
                            <Text className="text-right text-gray-500">Puesto</Text>
                        </View>
                    </View>
                    <View className={isIPhone ? "mt-4 z-30" : "mt-4"}>
                        <SelectComponent placheholder={"Busca el puesto deseado"} className="" />
                    </View>
                </View>
                <View className="items-center absolute -z-10 top-40 left-8">
                    <Image
                        source={require('../assets/backGround1.png')}
                        className="mt-5 h-[400px] w-[360px] bg-cover"
                    />
                </View>
                <View >
                    <TouchableOpacity
                        className="bg-botonColor mb-32 text-lg w-full p-3 items-center rounded-lg"
                        onPress={handleActive}
                    >
                        <Text className="font-extrabold text-lg text-white tracking-widest">Crear brecha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </NavigationLayout>
    )
};
