import { Alert , Linking} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage"

export async function EvaluationRequest  () {
    const lastDateWichAsked = await AsyncStorage.getItem('lastDateWichAsked')
    const dontAskAnymore = await AsyncStorage.getItem('dontAskAnymore')

    if(lastDateWichAsked){
        const dateNow = new Date().getTime()
        const lastDate = new Date(lastDateWichAsked).getTime()
        const daysDifference = Math.floor((dateNow - lastDate)/1000/60/60/24)

        //Request again After 3 days
        if(daysDifference > 3 && dontAskAnymore === 'false'){
            Alert.alert(
                'Avaliar a Aplicação',
                'Gostou do app? Então não se importaria de o avaliar? Não demora nem um minuto. Obrigado pelo apoio!',
                [
                  {text: 'Avaliar', onPress: async () => {
                    const url = "https://play.google.com/store/apps/details?id=br.com.fiiquedeboa.juroscompostos";
                    Linking.canOpenURL(url).then(supported => {
                            if (supported) {
                                return Linking.openURL(url);
                            }
                        }).catch(err => {
                    })
                    await AsyncStorage.setItem('dontAskAnymore', 'true')
                  }},
                  {text: 'Mais Tarde', onPress: async () => {
                  }},
                  {text: 'Não Obrigado', onPress: async () => {
                    await AsyncStorage.setItem('dontAskAnymore', 'true')
                    }},
                ]
              )

              await AsyncStorage.setItem('lastTimeWichAsked', new Date().toString())
        }
    }else {
        await AsyncStorage.setItem('lastTimeWichAsked', new Date().toString())
        await AsyncStorage.setItem('dontAskAnymore', 'false')
    }
}