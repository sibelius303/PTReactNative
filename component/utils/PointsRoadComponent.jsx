import { Text, View, Image, Platform } from "react-native";
import { CheckIcon, StartIcon, TrophyIcon } from "../icons/icons";

export default function PointsRoadComponent() {
    const isIPhone = Platform.OS === 'ios' && Platform.isPad === false;
    return (
        <>
            <View
                className={isIPhone ? "items-center my-0 absolute right-[15px] top-[180px] -z-10"
                    : "items-center my-0 absolute right-[15px] top-[180px] -z-10"}
            >
                <Image
                    source={require('../../assets/pointroad2.png')}
                    className=" h-[350px] w-[355px] bg-no-repeat "
                />
            </View>
            <View
                className="flex-row items-center gap-x-2 absolute top-[150px] right-[0px] border-r-8 
                pr-1 border-circleColor py-4 -z-10"
            >
                <Text className="text-xl text-botonColor font-bold">Lider de tienda</Text>
                <View className="rounded-full bg-circleColor w-auto h-auto p-1">
                    <TrophyIcon />
                </View>
            </View>
            <View className={isIPhone ? "flex-row items-center gap-x-2 absolute top-[250px] right-[54px] -z-10 "
                : "flex-row items-center gap-x-2 absolute top-[250px] right-[46px] -z-10"}
            >
                <StartIcon />
                <Text className="text-lg text-gray-500">Administrador de personal</Text>
            </View>
            <View className="flex-row items-center gap-x-1 absolute top-[400px] right-[24px] ">
                <StartIcon />
                <Text className="text-lg text-gray-500">Encargado de turno</Text>
            </View>
            <View className={isIPhone ? "flex-row items-center gap-x-2 absolute bottom-[410px] left-[84px]"
                : "flex-row items-center gap-x-2 absolute bottom-[365px] left-[75px] "}
            >
                <StartIcon />
                <Text className="text-lg text-gray-500">Ayudante / Cajero</Text>
            </View>
            <View className={isIPhone ? "flex-row items-center absolute bottom-[240px] left-[-3px] pr-48"
                : "flex-row items-center absolute bottom-[205px] left-[-2px] pr-48"}
            >
                <View className="">
                    <Image source={require('../../assets/sss.png')} className=" h-[200px] w-[95px] bg-cover" />
                </View>
                <View className="bg-gray-100 w-full h-auto p-4 rounded-lg shadow-xl shadow-black">
                    <View className="flex-row items-center gap-x-1">
                        <CheckIcon />
                        <Text className="text-xl text-botonColor">Ayudante / Cajero</Text>
                    </View>
                    <Text className="text-gray-500">Experiencia: <Text className="text-black">6 meses</Text></Text>
                    <Text className="text-gray-500">Skills: <Text className="text-black">9 validadas</Text></Text>
                </View>
            </View>
        </>
    )
};