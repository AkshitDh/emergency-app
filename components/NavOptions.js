import { useNavigation } from '@react-navigation/native'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import tw from 'twrnc'

const data = [
    {
        id: '1',
        title: 'Call an ambulance',
        image: 'https://cdn-icons-png.flaticon.com/128/2869/2869649.png',
        screen: 'MapScreen',
    },
    {
        id: '2',
        title: 'Get assistance',
        image: 'https://cdn-icons-png.flaticon.com/128/9288/9288808.png',
        screen: 'ChatScreen'
    }
]

const NavOptions = () => {
    const navigation = useNavigation()

  return (
    <FlatList 
        data={ data }
        keyExtractor={ (item) => item.id }
        horizontal  
        renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={tw`p-4 pl-6 m-2 bg-gray-100 h-45 w-35`}
            >
                <View>
                    <Image 
                        style={{ width: 70, height: 70, resizeMode: 'contain' }}
                        source={{ uri: item.image }}
                    />
                </View>
                <Text style={ tw`mt-2 text-lg font-semibold` }>{ item.title }</Text>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions