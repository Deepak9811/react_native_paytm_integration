// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

//  import React, {useState, useEffect} from 'react';
//  import {
//    SafeAreaView,
//    StyleSheet,
//    ScrollView,
//    View,
//    Text,
//    TextInput,
//    Button,
//    StatusBar,
//    Switch
//  } from 'react-native';
 
//  import AllInOneSDKManager from 'paytm_allinone_react-native';
 
//  const App = () => {
//    const [isOrderIdUpdated, setOrderIdUpdated] = useState(false);
//    useEffect(() => {
//      if (!isOrderIdUpdated) {
//        generateOrderId();
//        setOrderIdUpdated(true);
//      }
//    });
 
//    const [mid, setMid] = useState('Contin12746025656812');
//    const [orderId, setOrderId] = useState('639452b6dcd24dbca15ad26130d3e7e6');
//    const [amount, setAmount] = useState('100.00');
//    const [urlScheme, setURLScheme] = useState('');
//    const [callbackUrl, setcallbackUrl] = useState('https://securegw.paytm.in/theia/paytmCallback?ORDER_ID='+orderId);
//    const [tranxToken, setTranxToken] = useState('543def5decc24099a2afc22152303aeb1654516333949');
//    const [showToast, setShowToast] = useState('');
//    const [isStaging, setIsStaging] = useState(true);
//    const [appInvokeRestricted, setIsAppInvokeRestricted] = useState(true);
//    const [result, setResult] = useState('');
 
//    const generateOrderId = () => {
//     //  const r = Math.random() * new Date().getMilliseconds();
//     //  setOrderId(
//     //    'PARCEL' +
//     //      (1 + Math.floor(r % 2000) + 10000) +
//     //      'b' +
//     //      (Math.floor(r % 100000) + 10000),
//     //  );
//    };
 
//    const startRawTransaction = async () => {
//      try {
//       console.log('click here 8080')
//       fetch(`http://localhost:8080/payment`, {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           'content-type':"application/json"
//         },
       
//       }).then((data) => {
//         console.log('data :- ',data)
//         data.json().then((resp) => {
//           console.log("Add Coupon", resp);
//         });
//       });
//      } catch (error) {
//        console.log(error.messagae)
//      }

//     //  setShowToast('');
//     //  setResult('');
//     //  AllInOneSDKManager.startTransaction(
//     //    orderId,
//     //    mid,
//     //    tranxToken,
//     //    amount,
//     //    callbackUrl+orderId,
//     //    isStaging,
//     //    appInvokeRestricted,
//     //    urlScheme,
//     //  )
//     //  .then((result) => {
//     //    console.log("result", result);
//     //    setShowToast(JSON.stringify(result));
//     //    setOrderIdUpdated(false);
//     //  })
//     //  .catch((err) => {
//     //    setResult(err);
//     //    setShowToast("Error: " + err);
//     //    setOrderIdUpdated(false);
//     //  });
//  }
 
//    return (
//      <>
//        <StatusBar barStyle="default" />
//        <SafeAreaView style={styles.container}>
//          <ScrollView>
//            <View>
//              <View style={styles.header}>
//                <Text style={styles.headerText}>React Native App</Text>
//              </View>
//              <View style={{margin: 16}}>
//                <Text style={styles.textStyle}>Merchant Id</Text>
//                <TextInput
//                  style={styles.textInput}
//                  defaultValue={mid}
//                  onChangeText={(e) => setMid(e)}
//                />
//                <Text style={styles.textStyle}>Order Id</Text>
//                <TextInput
//                  style={styles.textInput}
//                  defaultValue={orderId}
//                  onChangeText={(e) => setOrderId(e)}
//                />
//                <Text style={styles.textStyle}>URL Scheme</Text>
//                <TextInput
//                  style={styles.textInput}
//                  defaultValue={urlScheme}
//                  onChangeText={(e) => setURLScheme(e)}
//                />
//                <Text style={styles.textStyle}>Amount</Text>
//                <TextInput
//                  style={styles.textInput}
//                  keyboardType="numeric"
//                  defaultValue={amount}
//                  onChangeText={(e) => setAmount(e)}
//                />
//                <Text style={styles.textStyle}>Transaction token</Text>
//                <TextInput
//                  style={styles.textInput}
//                  defaultValue={tranxToken}
//                  onChangeText={(e) => setTranxToken(e)}
//                />
 
//                <View
//                  style={{
//                    flexDirection: 'row',
//                    marginTop: 20,
//                    justifyContent: 'space-between',
//                    alignItems: 'center',
//                  }}>
//                  <View
//                    style={{
//                      flex: 1,
//                    }}>
//                    <Text
//                      style={{
//                        fontSize: 19,
//                        fontWeight: 'bold',
//                      }}>
//                      Staging : {isStaging ? 'true' : 'false'}
//                      </Text>
//                      </View>
 
//                      <View
//                    style={{
//                      flex: 1,
//                    }}>
//                      <Switch
//                      trackColor={{ false: "#767577", true: "#81b0ff" }}
//                      thumbColor={isStaging ? "#f5dd4b" : "#f4f3f4"}
//                      ios_backgroundColor="#3e3e3e"
//                      onValueChange={() =>
//                        isStaging ? setIsStaging(false) : setIsStaging(true)
//                      }
//                      value={isStaging}
//                    />
 
//                  </View>
//                </View>
 
//                <View
//                  style={{
//                    flexDirection: 'row',
//                    marginTop: 20,
//                    justifyContent: 'space-between',
//                    alignItems: 'center',
//                  }}>
 
//                <View
//                    style={{
//                      flex: 1,
//                    }}>
//                    <Text
//                      style={{
//                        fontSize: 19,
//                        fontWeight: 'bold',
//                      }}>
//                      isInvokeRestricted : {appInvokeRestricted ? 'true' : 'false'}
//                      </Text>
//                      </View>
 
//                      <View
//                    style={{
//                      flex: 0.5,
//                    }}>
//                      <Switch
//                      trackColor={{ false: "#767577", true: "#81b0ff" }}
//                      thumbColor={appInvokeRestricted ? "#f5dd4b" : "#f4f3f4"}
//                      ios_backgroundColor="#3e3e3e"
//                      onValueChange={() =>
//                        appInvokeRestricted ? setIsAppInvokeRestricted(false) : setIsAppInvokeRestricted(true)
//                      }
//                      value={appInvokeRestricted}
//                    />
 
//                  </View>
//                  </View>
 
 
//                <View style={styles.buttonStyle}>
//                  <Button
//                    title="Start Transaction"
//                    onPress={() => startRawTransaction()}
//                  />
//                </View>
//                <Text style={styles.textStyle}>Message :</Text>
//                <Text style={styles.messageText}> {showToast}</Text>
//              </View>
//            </View>
//          </ScrollView>
//        </SafeAreaView>
//      </>
//    );
//  };
 
//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      backgroundColor: 'white',
//    },
//    header: {
//      width: '100%',
//      height: 60,
//      justifyContent: 'center',
//      backgroundColor: '#2c86d4',
//    },
//    headerText: {
//      fontSize: 24,
//      fontWeight: 'bold',
//      color: 'white',
//      padding: 8,
//    },
//    textStyle: {
//      marginTop: 16,
//      marginStart: 4,
//      fontSize: 19,
//      fontWeight: 'bold',
//    },
//    textInput: {
//      fontSize: 18,
//      padding: 8,
//      borderColor: 'gray',
//      marginStart: 8,
//      marginEnd: 8,
//      borderBottomWidth: 1,
//    },
//    buttonStyle: {
//      padding: 8,
//      margin: 8,
//    },
//    messageText: {
//      fontSize: 16,
//      padding: 8,
//    },
//  });
 
//  export default App







// --------------------------------------------------------------------------------------------------------------------






import React, {useState, useEffect} from 'react';
import {
     SafeAreaView,
     StyleSheet,
     ScrollView,
     View,
     Text,
     TextInput,
     Button,
     StatusBar,
     Switch
   } from 'react-native';
import AllInOneSDKManager from 'paytm_allinone_react-native';
import { generateToken } from './Service';
import { CALLBACK_URL, MID, URL_SCHEME } from './Constant';

const Payment = () => {
  const [isOrderIdUpdated, setOrderIdUpdated] = useState(false);
  useEffect(() => {
    if (!isOrderIdUpdated) {
      generateOrderId();
      setOrderIdUpdated(true);
    }
  });

  const [MID, setMid] = useState('Contin18571014125103');
  const [orderId, setOrderId] = useState('');
  const [amounts, setAmount] = useState('0');
  const [urlScheme, setURLScheme] = useState('');
  const [callbackUrl, setcallbackUrl] = useState('https://securegw.paytm.in/theia/paytmCallback?ORDER_ID='+orderId);
  const [tranxToken, setTranxToken] = useState('');
  const [showToast, setShowToast] = useState('');
  const [isStaging, setIsStaging] = useState(true);
  const [appInvokeRestricted, setIsAppInvokeRestricted] = useState(true);
  const [result, setResult] = useState('');

  const generateOrderId = () => {
    const r = Math.random() * new Date().getMilliseconds();
    setOrderId(
      'PARCEL' +
        (1 + Math.floor(r % 2000) + 10000) +
        'b' +
        (Math.floor(r % 100000) + 10000),
    );
  };

//   const startRawTransaction = async () => {
//     try {
//      console.log('click here 8080')
//      fetch(`http://localhost:8080/payment`, {
//        method: "POST",
//        headers: {
//          Accept: "application/json",
//          'content-type':"application/json"
//        },
      
//      }).then((data) => {
//        console.log('data :- ',data)
//        data.json().then((resp) => {
//          console.log("Add Coupon", resp);
//        });
//      });
//     } catch (error) {
//       console.log(error.messagae)
//     }

//    //  setShowToast('');
//    //  setResult('');
//    //  AllInOneSDKManager.startTransaction(
//    //    orderId,
//    //    mid,
//    //    tranxToken,
//    //    amount,
//    //    callbackUrl+orderId,
//    //    isStaging,
//    //    appInvokeRestricted,
//    //    urlScheme,
//    //  )
//    //  .then((result) => {
//    //    console.log("result", result);
//    //    setShowToast(JSON.stringify(result));
//    //    setOrderIdUpdated(false);
//    //  })
//    //  .catch((err) => {
//    //    setResult(err);
//    //    setShowToast("Error: " + err);
//    //    setOrderIdUpdated(false);
//    //  });
// }



  const payNow = async () => {

    // let orderId = orderId;
    // let amount = '1.00';
   
    

    try {
      let amount= amounts+'.00'
      const tokens = await generateToken(orderId,amount);
    // console.log('token :- ',await generateToken(amount))
    const token= tokens.hiddenInput.txnToken
    setTranxToken(token)

    AllInOneSDKManager.startTransaction(
      orderId,
      MID,
      token,
      amount,
      CALLBACK_URL+orderId,
      isStaging,
      appInvokeRestricted,
      URL_SCHEME,
    )
    .then((result) => {
      console.log("result", result);
      setShowToast(JSON.stringify(result));
      setOrderIdUpdated(false);
    })
    .catch((err) => {
      setResult(err);
      setShowToast("Error: " + err);
      setOrderIdUpdated(false);
    });

      





      // AllInOneSDKManager.startTransaction(
      //   orderId,
      //   MID,
      //   token,
      //   amt.toFixed(2),
      //   CALLBACK_URL+orderId,
      //   false,
      //   false,
      //   URL_SCHEME
      // )
      // .then((result) => {
      //   console.log("gateway response", result);
      // })
      // .catch((err) => {
      //   console.log("gateway error",err);
      // });
    } catch (error) {
      console.log("try catch error",error)
    }
  }
  return (
    <>
        <StatusBar barStyle="default" />
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View>
              <View style={styles.header}>
                <Text style={styles.headerText}>React Native App</Text>
              </View>
              <View style={{margin: 16}}>
                <Text style={styles.textStyle}>Merchant Id</Text>
                <TextInput
                  style={styles.textInput}
                  defaultValue={MID}
                  onChangeText={(e) => setMid(e)}
                />
                <Text style={styles.textStyle}>Order Id</Text>
                <TextInput
                  style={styles.textInput}
                  defaultValue={orderId}
                  onChangeText={(e) => setOrderId(e)}
                />
                <Text style={styles.textStyle}>URL Scheme</Text>
                <TextInput
                  style={styles.textInput}
                  defaultValue={urlScheme}
                  onChangeText={(e) => setURLScheme(e)}
                />
                <Text style={styles.textStyle}>Amount</Text>
                <TextInput
                  style={styles.textInput}
                  keyboardType="numeric"
                  defaultValue={amounts}
                  onChangeText={(e) => setAmount(e)}
                />
                <Text style={styles.textStyle}>Transaction token</Text>
                <TextInput
                  style={styles.textInput}
                  defaultValue={tranxToken}
                  onChangeText={(e) => setTranxToken(e)}
                />
 
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <Text
                      style={{
                        fontSize: 19,
                        fontWeight: 'bold',
                      }}>
                      Staging : {isStaging ? 'true' : 'false'}
                      </Text>
                      </View>
 
                      <View
                    style={{
                      flex: 1,
                    }}>
                      <Switch
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      thumbColor={isStaging ? "#f5dd4b" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={() =>
                        isStaging ? setIsStaging(false) : setIsStaging(true)
                      }
                      value={isStaging}
                    />
 
                  </View>
                </View>
 
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
 
                <View
                    style={{
                      flex: 1,
                    }}>
                    <Text
                      style={{
                        fontSize: 19,
                        fontWeight: 'bold',
                      }}>
                      isInvokeRestricted : {appInvokeRestricted ? 'true' : 'false'}
                      </Text>
                      </View>
 
                      <View
                    style={{
                      flex: 0.5,
                    }}>
                      <Switch
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      thumbColor={appInvokeRestricted ? "#f5dd4b" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={() =>
                        appInvokeRestricted ? setIsAppInvokeRestricted(false) : setIsAppInvokeRestricted(true)
                      }
                      value={appInvokeRestricted}
                    />
 
                  </View>
                  </View>
 
 
                <View style={styles.buttonStyle}>
                  <Button
                    title="Start Transaction"
                    onPress={() => payNow()}
                  />
                </View>
                <Text style={styles.textStyle}>Message :</Text>
                <Text style={styles.messageText}> {showToast}</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
  )
}

export default Payment


const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: 'white',
     },
     header: {
       width: '100%',
       height: 60,
       justifyContent: 'center',
       backgroundColor: '#2c86d4',
     },
     headerText: {
       fontSize: 24,
       fontWeight: 'bold',
       color: 'white',
       padding: 8,
     },
     textStyle: {
       marginTop: 16,
       marginStart: 4,
       fontSize: 19,
       fontWeight: 'bold',
     },
     textInput: {
       fontSize: 18,
       padding: 8,
       borderColor: 'gray',
       marginStart: 8,
       marginEnd: 8,
       borderBottomWidth: 1,
     },
     buttonStyle: {
       padding: 8,
       margin: 8,
     },
     messageText: {
       fontSize: 16,
       padding: 8,
     },
   });