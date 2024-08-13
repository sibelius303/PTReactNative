import { Text, View, TouchableOpacity, Image, Platform } from "react-native";
import NavigationLayout from "../component/layouts/NavigationLayout";
import { SelectComponent } from "../component/utils/SelectComponent";
import PointsRoadComponent from "../component/utils/PointsRoadComponent";
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';



export default function Screen2() {
    const router = useRouter();
    const isIPhone = Platform.OS === 'ios' && Platform.isPad === false;

    async function deleteSesion() {
        console.log("entre")
        await SecureStore.deleteItemAsync("auth_key", {})
        console.log("Borre la sesion")
        router.push('/')
      }

    return (
        <NavigationLayout>
            <View className={isIPhone ? "h-screen w-screen pr-8 justify-between px-4 pb-6"
                : "h-screen w-screen pr-8 justify-between px-4"}
            >
                <View>
                    <View className="flex-row">
                        <View className="w-1/2">
                            <Text className="text-xl">Hola, Carlos</Text>
                            <Text className="text-gray-500">¿A dónde quieres llegar?</Text>
                        </View>
                    </View>
                    <View className="mt-4">
                        <SelectComponent placheholder={"Escribe..."} />
                    </View>
                </View>
                <PointsRoadComponent />
                <View >
                    <TouchableOpacity
                        className="bg-botonColor mb-32 text-lg w-full p-3 items-center rounded-lg"
                        onPress={deleteSesion}
                    >
                        <Text className="font-extrabold text-lg text-white tracking-widest">Ver brecha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </NavigationLayout>
    )
};