import React from 'react';
import { StyleSheet,Text,View,  Image,ImageBackground,} from 'react-native';
  
// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="user" size={40} color="#a5a5a5" />;  

export default class App extends React.Component {
  render( ) {
    return (
      <View style= {styles.container}>
        
              <View style={styles.profileblock}>
                     <Text style={styles.profileblock1}>PROFILE</Text>
               </View>
        
        
              <View style={styles.Imageblock}>
                   
                    <View style={styles.TopemptyImageblock}></View>
                   
                    <View style={styles.IconImageblock}>
                           
                           <View style={styles.leftIconImageblock}></View>
                           <View style={styles.MainIconImageblock}></View>
                           <View style={styles.rightIconImageblock}></View>

                    </View>
                   
                    <View style={styles.JenifarlofezImageblock}>
                      <Text style={styles.JenifarlofezImageblock1}>Jenifar Lofez</Text>
                    </View>
                   
                    <View style={styles.HouseownerImageblock}>
                         <Text style={styles.HouseownerImageblock1}>House Owner</Text>
                    </View>
                   
                    <View style={styles.BottomemptyImageblock}></View>
              </View>


               <View style={styles.contentblock}>
                        
                        <View style={styles.Firstblock}>
                              <View style={styles.iconFirstblock}></View>
                                
                              <View style={styles.textFirstblock}>
                                     <Text style={styles.textFirstblock1}>Family Members</Text>
                              </View>
                             
                             
                              <View style={styles.emptyFirstblock}></View>
                        </View>
                        
                        
                        <View style={styles.Secondblock}>
                             <View style={styles.iconSecondblock}></View>
                             
                             <View style={styles.textSecondblock}>
                                  <Text style={styles.textSecondblock1}>Clip Storage</Text>
                             </View>
                             
                             <View style={styles.emptySecondblock}></View>
                        </View>


                        <View style={styles.Thirdblock}>
                              <View style={styles.iconThirdblock}></View>
                              
                              <View style={styles.textThirdblock}>
                                <Text style={styles.textThirdblock1}>Personal Information</Text>
                              </View>
                              
                              
                              <View style={styles.emptyThirdblock}></View>
                        </View>
                       
                       
                        <View style={styles.Fourtblock}>
                              <View style={styles.iconFourthblock}></View>
                              
                              <View style={styles.textFourthblock}>
                                    <Text style={styles.textFourthblock1}>Security & Others</Text>
                              </View>
                              
                              <View style={styles.emptyFourthblock}></View>
                        </View>
                       
                       
                       <View style={styles.Fifthblock}>
                              <View style={styles.iconFifthblock}></View>
                              
                              <View style={styles.textFifthblock}>
                                <Text style={styles.textFifthblock1}>Support Center</Text>
                              </View>
                              
                              <View style={styles.emptyFifthblock}></View>
                       </View>
              
              
               </View>
               
               <View style={styles.emtpybottomblock}></View>
              
              <View style={styles.logoutblock}>
                <Text style={styles.logoutblock1}>LOG OUT </Text>
              </View>
     
       </View>
    );
  }
}

const styles =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',

  },
  profileblock:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    borderWidth:1,
  },
  profileblock1:{
    fontWeight:'bold',
    fontSize:15,

  },

  Imageblock:{
    flex:6,
    borderWidth:1,
  },
  
  TopemptyImageblock:{
     flex:1,
     borderWidth:1,

  },
  IconImageblock:{
    flex:8,
    flexDirection:'row',
    borderWidth:1,
  },
  leftIconImageblock:{
   flex:1.5,
   borderWidth:1,
  },
  MainIconImageblock:{
    flex:1,
    borderRadius:15,
    borderWidth:1,
  },
  rightIconImageblock:{
    flex:1.5,
    borderWidth:1,
  },



JenifarlofezImageblock:{
flex:2.3,
alignItems:'center',
justifyContent:'center',
borderWidth:1,
},
JenifarlofezImageblock1:{
  fontSize:18,
   fontWeight:'bold',

},

HouseownerImageblock:{
  flex:1.5,
  alignItems:'center',
  justifyContent:'center',
  borderWidth:1,
},

HouseownerImageblock1:{
fontSize:12,
fontWeight:'bold',
color:'rgb(190,198,214)',
},

BottomemptyImageblock:{
  flex:1,

  borderWidth:1,
},

  contentblock:{
    flex:10,
    marginLeft:20,
    marginRight:20,
    borderWidth:1,
  },
  Firstblock:{
    flex:1.2,
    flexDirection:'row',
    borderRadius:15,
    marginBottom:5,
    borderWidth:1,
  },

  iconFirstblock:{
   flex:2,

   borderWidth:1,
  },
  textFirstblock:{
    flex:4.8,
   justifyContent:'center',
    borderWidth:1,
  },
  textFirstblock1:{
    fontSize:13,
    fontWeight:'bold',
  },

  emptyFirstblock:{
    flex:5,
    borderWidth:1,
  },

  Secondblock:{
    flex:1,
    flexDirection:'row',
    marginTop:5,
    marginBottom:5,
    borderRadius:15,
    borderWidth:1,
  },

  iconSecondblock:{
    flex:2,

    borderWidth:1,
  },
  textSecondblock:{
    flex:4.8,
    justifyContent:'center',
    borderWidth:1,
  },

  textSecondblock1:{
   fontSize:13,
   fontWeight:'bold',
  },


  emptySecondblock:{
    flex:5,
    borderWidth:1,
  },


  Thirdblock:{
    flex:1,
    flexDirection:'row',
    borderRadius:15,
    marginTop:5,
    marginBottom:5,
    borderWidth:1,

  },
  iconThirdblock:{
    flex:2,

    borderWidth:1,
  },
  textThirdblock:{
    flex:4.8,
    justifyContent:'center',
    borderWidth:1,
  },
  textThirdblock1:{
    fontSize:13,
    fontWeight:'bold',
  },

  emptyThirdblock:{
    flex:5,
    borderWidth:1,
  },




  Fourtblock:{
    flex:1,
    flexDirection:'row',
    borderRadius:15,
    marginTop:5,
    marginBottom:5,
    borderWidth:1,
  },
  iconFourthblock:{
    flex:2,

    borderWidth:1,
  },

 textFourthblock:{
  flex:4.8,
  justifyContent:'center',
  borderWidth:1,
 },
 textFourthblock1:{
  fontSize:13,
  fontWeight:'bold',
 },
 emptyFourthblock:{
  flex:5,
  borderWidth:1,
 },



 

  Fifthblock:{
    flex:1,
    flexDirection:'row',
    borderRadius:15,
    marginTop:5,
    marginBottom:5,
    borderWidth:1,
  },
  iconFifthblock:{
    flex:2,

    borderWidth:1,
  },
  textFifthblock:{
    flex:4.8,
    justifyContent:'center',
    borderWidth:1,
  },
  textFifthblock1:{
    fontSize:13,
    fontWeight:'bold',
  },

  emptyFifthblock:{
    flex:4.8,

    borderWidth:1,
  },


  emtpybottomblock:{
    flex:2,
    borderWidth:1,

  },
  logoutblock:{
    flex:2,
    marginLeft:20,
    marginRight:20,
    borderRadius:15,
    backgroundColor:'rgb(244,246,249)',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
    borderWidth:1,
  },
  logoutblock1:{
    fontSize:15,
    fontWeight:'bold',
    color:'red',
  }

});