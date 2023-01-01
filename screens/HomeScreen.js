import { Image, SafeAreaView, View } from 'react-native'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={ tw`p-5 pt-12` }>
        <Image 
            style = {{
                width: 250, 
                height: 100,
                resizeMode: 'contain',
            }}
            source = { require('../images/logo.png') }
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen