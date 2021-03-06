
var Dimensions = require('Dimensions');
var ReactNative = require('react-native');
import React,{Component} from 'react';
import {findNodeHandle,Image,StyleSheet,View, Alert,  Text,ListView,RefreshControl,Button,ScrollView} from 'react-native';
import { captureRef } from "react-native-view-shot";
import TabNavigator from 'react-native-tab-navigator';  
import { StackNavigator } from 'react-navigation';
import SixrandomModule from './SixrandomModule'
import StorageModule from './StorageModule'
import ShareModule from './ShareModule'

var kWidth = Dimensions.get('window').width;
var kHeight = Dimensions.get('window').height;

var parameter = ""

class SixrandomFullinfoPage extends React.Component {
    constructor(props) {

  super(props);
  
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
      textcontent:'null',
      dataSource: dataSource,
      uri: 'null',
		};
    };

    componentDidMount() {
		this.timer = setTimeout(
			() => {
				this.refreshlist()
			},
			200
		);
	}

  static navigationOptions = ({navigation})=>{
    const { navigate } = navigation;
    return{
   // headerRight:(<Button title="分享" onPress={ () => ShareModule.Sharetotimeline() }/>),
    title: '卦象详解',
    }
  };

  takeToImage() {
    captureRef(this.refs.location, {
      format: "jpg",
      quality: 1,
      //snapshotContentContainer:true
    })
    .then(
      uri => console.log("Image saved to", uri),
      error => console.error("Oops, snapshot failed", error)
    );
    /*
    ReactNative.takeSnapshot(ReactNative.findNodeHandle(this.refs.location), {height:5000,format: 'png', quality: 1}).then(
        (uri) => {this.setState({uri:uri}),
        console.log(uri)}
    ).catch(
        
        (error) => {alert(error),
       console.log(error)}
    );
    */
  }

 
  
  refreshlist()
  {
        const { navigate } = this.props.navigation;

      parameter = this.props.navigation.state.params

            if("last"!=parameter)
      {
         
         //return
          var _ret = SixrandomModule.build(parameter);
          var _build = SixrandomModule.get_random_draw()
          console.log(_build)
          this.setState({  
            dataSource: this.state.dataSource.cloneWithRows(_build),parameter:parameter }); 
            this.setState({textcontent:_build})
      }
      else
      {
        StorageModule.load({
            key:"last",
        }).then(ret => {
       
              //return
            randArray = ret
            var date = new Date(Number(randArray[7]))
            var lunar = ""
            for (index =1;index<7;index++)
            {
              lunar = lunar+(randArray[index]).toString()
            }
            var question = randArray[0]

            var parameter = "?date="+date+"&lunar="+lunar+"&question="+question
            //alert(parameter);
            //console.log(parameter)
            var _ret = SixrandomModule.build(parameter);
            var _build = SixrandomModule.get_random_draw()
            console.log(_build)
            this.setState({textcontent:_build})
            this.setState({  
                  dataSource: this.state.dataSource.cloneWithRows(_build),parameter:parameter }); 
            }).catch(err => {
            //alert(err)
            if(false==jump)
            {
               this.begin('NewPage')
               jump = true
            }
        })
      }

  }

   _renderRow(rowData) {
    //alert(rowData.name)
    return (
      
      <View style={styles.list}>
        <Text style={styles.rowhigth}>{rowData}</Text>
      </View>
    );
  }

   _export() {  
        Alert.alert(
        '免费电话咨询',
        '13641392723',
        [
          {text: '取消', onPress: () => console.log('Cancel export'), style: 'cancel'},
          {text: '连接', onPress: () => this._call()},
        ],
        { cancelable: false }
      )
       
    }
    
    
  
  render(){
      const { navigate } = this.props.navigation;

      jump = false;
      
        return(
    <View style={styles.container} >

        
            <ListView ref='location' accessible={true}
            enableEmptySections={true}
						dataSource={this.state.dataSource}
						renderRow={this._renderRow.bind(this)}
						initialListSize={1}
						pageSize={8}
						refreshControl={
							<RefreshControl
                refreshing={false}
								onRefresh={this.refreshlist.bind(this)}
								enabled={false}
								colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
							/>}/>    
              
              {/*
              <TabNavigator 
       tabBarStyle={{ height: 40 }}
       sceneStyle={{ paddingBottom: 30 }}>  
                  <TabNavigator.Item
                        title="屏幕截图"  
                        onPress={()=>this.takeToImage()}  
                        titleStyle={styles.menufont}>  
                    </TabNavigator.Item>  
                </TabNavigator>  */
                }
               
              </View>  
    )
    }
}
var styles = StyleSheet.create ({
  container: {
    flex:1
  },
    webSize: {
    width:kWidth,
    height:kHeight
  },
  rowhigth:{
    lineHeight:25,
  },
  menufont:{
    fontSize:15,
    color: '#333333', 
    height:25
  },
  list:{
    //lineHigeht:25,
    //height:25,
    //borderWidth:1,
    marginLeft: 5,
    paddingLeft:5,
     marginRight: 5,
    paddingRight:5,
    //borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center', //虽然样式中设置了 justifyContent: 'center'，但无效 
    //textAlign:'center', 
    //textDecorationLine:'underline'
    flexWrap:'wrap',
    alignItems: 'flex-start',
    //flexDirection: 'row',
  },
    vb_text: {  
    color: '#333333',  
    fontFamily: 'Times',  
    margin: 10,  
    fontSize: 12,         
    textAlign: 'auto',  
    lineHeight: 22,     //行高  
    fontStyle: 'italic',    //设置文字：normal：正常体；italic：斜体  
    fontWeight: 'bold', //设置粗体字，'normal' /*default*/, 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'  
    textDecorationLine: 'underline line-through',//下划线和删除线的样式：['none' /*default*/, 'underline', 'line-through', 'underline line-through'  
  },
   button:{
    height: 40,
    width: 50,
    backgroundColor:'transparent',
   justifyContent:'center',
   borderRadius: 20,
    },
});
module.exports=SixrandomFullinfoPage;  