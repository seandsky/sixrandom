
var Dimensions = require('Dimensions');
import React, {Component} from 'react';
import {StyleSheet,View, Button,TouchableOpacity,Text,WebView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation'

import HistoryPage from './HistoryPage';
import StorageModule from './StorageModule'
import NewPage from './NewPage';
import FullInfoPage from './FullInfoPage';

var kWidth = Dimensions.get('window').width;
var kHeight = Dimensions.get('window').height;
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = "./sixrandomsimple.html"
var randArray = []
var parameter = ""//"?date=Mon Jul 10 2017 23:43:54 GMT+0800 (CST)&lunar=123123";
class MainPage extends React.Component {
  webview: WebView
  static navigationOptions = {
    headerRight:(<Button title="分享" />),
    title: '卦象',
  };


  init()
  {
        const { navigate } = this.props.navigation;
    //StorageModule.remove({key:"last"})
    StorageModule.load({
            key:"last",
    }).then(ret => {
       //alert(ret)
      randArray = ret
      var date = new Date(Number(randArray[7]))
      var lunar = ""
      for (index =1;index<7;index++)
      {
        lunar = lunar+(randArray[index]).toString()
      }
      var question = randArray[0]

      parameter = "?date="+date+"&lunar="+lunar
      if (this.webview) {
      //DEFAULT_URL = event.url + this.props.navigation.state.params
      var smsg = "msg('"+parameter+"')";
      
      this.webview.postMessage(smsg)
      return true;
    }
      

      }).catch(err => {
           navigate('NewPage') 
         })
  }
   
  render(){
      this.init();
      const { navigate } = this.props.navigation;

        return(
    <View style={styles.container}>
        <WebView
          ref={webview => this.webview = webview}
          automaticallyAdjustContentInsets={true}
          style={styles.webView}
          source={{uri:DEFAULT_URL}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          injectedJavaScript="document.addEventListener('message', function(e) {eval(e.data);});"
        ></WebView>
        
        <TouchableOpacity style={styles.button} onPress={ () => navigate('FullInfoPage',parameter) }>
        <Text style={styles.textstyle}
        >
          详细   
        </Text>
        </TouchableOpacity>
       
      <TabNavigator tabBarStyle={{height:40}} style={{flex:1}}>  
                  <TabNavigator.Item
                        title="取卦"  
                        //   
                        //selected={this.state.tab=='liuyao'}  
                        //onPress={() => this.begin('NewPage')
                        onPress={() => navigate('NewPage') 
                        }  
                        titleStyle={styles.menufont}>  
                    </TabNavigator.Item>  
                    <TabNavigator.Item 
                        title="历史"  
                        //selected={this.state.tab=='history'}   
                        onPress={ 
                            () => navigate('HistoryPage') 
                          }titleStyle={styles.menufont}>  
                        
                    </TabNavigator.Item>  
                </TabNavigator>  
                 
              </View>  
    )
    }
    begin(pagename)
    {
      const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
              NavigationActions.navigate({ routeName: pagename}),
          ]
        })
        this.props.navigation.dispatch(resetAction)
    }

    onNavigationStateChange = (event) => {
    if (this.webview) {
       this.init();
      return true;
    }
  };


    
}



var styles = StyleSheet.create ({
  container: {
    flex:1,
  },
  menufont:{
    fontSize:15,
    color: '#333333', 
    height:25
  },
  webSize: {
    width:kWidth,
    height:kHeight+50
  },
   button:{
    height: 40,
    width: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 20,
    },
});
module.exports=MainPage;  