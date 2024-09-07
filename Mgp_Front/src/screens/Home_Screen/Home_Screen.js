import { View , Text, ScrollView} from "react-native";

export default function Home_Screen(){
    return(
        <ScrollView>
            <View>
                <Text>Menu Hamburguer</Text>
            </View>
            <View>
                <Text>Mapa</Text>
            </View>
            <View>
                <Text>Pesquisa</Text>
            </View>
        </ScrollView>
        )
}