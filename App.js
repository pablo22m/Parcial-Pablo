import {SafeAreaView, StyleSheet} from 'react-native'
import {Fut} from './components/Fut'
export default function App(){
  return(
    <SafeAreaView style={styles.body}>

      <Fut/>
      
    </SafeAreaView>

  )
}
const styles = StyleSheet.create(
  {
    body:{
      width: '100%',
      height: '100%',
      backgroundColor: '#F8F8FF'
    }
  }
  )