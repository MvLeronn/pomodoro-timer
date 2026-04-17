import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity } from "react-native"
import { TNavigationScreenProps } from "../AppRoutes";

export const Home = () => {
    const navigation = useNavigation<TNavigationScreenProps>();

    return (
        <View>
            <Text style={{ fontSize: 30, fontFamily: 'InterRegular' }}>Home</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text style={{ fontSize: 30, fontFamily: 'InterRegular' }}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}