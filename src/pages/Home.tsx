import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity } from "react-native"
import { TNavigationScreenProps } from "../AppRoutes";
import { Theme } from "../shared/themes/Theme";

export const Home = () => {
    const navigation = useNavigation<TNavigationScreenProps>();

    return (
        <View>
            <Text style={{ fontSize: 52, fontFamily: 'InterRegular', color: Theme.colors.text }}>Home</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text style={{ fontSize: 30, fontFamily: 'InterRegular', color: Theme.colors.text }}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}