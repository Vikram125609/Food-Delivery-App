import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, SafeAreaView, Image, Text } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);
    return (
        <SafeAreaView>
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
                <View className='flex-1 bg-white'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>
                        Location
                        <Icon name="" size={30} color="#900" />
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen
