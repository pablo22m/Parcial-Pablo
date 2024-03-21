import {Text, View, StyleSheet, Pressable, Image} from 'react-native'

export function Fut(){
  return(
    <View>
      <Text style={styles.nav}>VENDAS-FUT</Text>

      <Pressable>
        <Image source={require('../assets/icons8-balls-100.png')} style={styles.colum1}/>
        <Text style={styles.colum11}>BOLAS</Text>
      </Pressable>
       
      <Pressable>
        <Image source={require('../assets/icons8-polo-shirt-100.png')} style={styles.colum2}/>
        <Text style={styles.colum22}>CAMISA</Text>
      </Pressable>

      <Pressable>
        <Image source={require('../assets/icons8-socks-100.png')} style={styles.colum1}/>
        <Text style={styles.colum11}>MEIAS</Text>
      </Pressable>

      <Pressable>
        <Image source={require('../assets/icons8-shin-guard-100.png')} style={styles.colum2}/>
        <Text style={styles.colum22}>CANELERA</Text>
      </Pressable>
      
      <Pressable>
        <Image source={require('../assets/icons8-rubber-gloves-100.png')} style={styles.colum1}/>
        <Text style={styles.colum11}>LUVAS</Text>
      </Pressable>

      <Pressable>
        <Image source={require('../assets/icons8-cleats-100.png')} style={styles.colum2}/>
        <Text style={styles.colum22}>CHUTEIRA</Text>
      </Pressable>
    
    </View>
  )
}

const styles = StyleSheet.create({
    nav: {
      backgroundColor: '#33C300',
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20,
      color: '#fff'
    },
    colum1:{
      marginLeft: 30,
      marginTop: 35,
    },
    colum11:{
        width: 100,
        height:  40,
        backgroundColor: '#004517',
        marginLeft: 30,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
        borderEndEndRadius: 10,
        borderEndStartRadius:10,
        color: '#fff'
    },
    colum2:{
      marginLeft: 200,
      marginTop: -138,
    },
    colum22:{
        width: 100,
        height:  40,
        backgroundColor: '#004517',
        marginLeft: 200,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
        borderEndEndRadius: 10,
        borderEndStartRadius:10,
        color: '#fff'  
    }
}
)