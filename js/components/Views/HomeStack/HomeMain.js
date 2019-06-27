import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { logout } from "../../../actions";
import globalSetting from "../../../common/setting"
import { PermissionsAndroid } from "react-native";
export default class HomeMain extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  async requestCameraPermission(callBack) {
    if (Platform.OS == "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Cool Photo App Camera Permission",
            message:
              "Cool Photo App needs access to your camera " +
              "so you can take awesome pictures."
          }
        );
        callBack();
      } catch (err) {}
    } else {
      callBack();
    }
  }

  postLogout() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Welcome</Text>
        <TouchableOpacity style={{
          backgroundColor: globalSetting.main_orange_color,
          padding: 20,margin: 20
        }}
        onPress = {()=>{
          this.props.dispatch({
            type: 'LOGOUT_SUCCESS'
          })
        }}
        
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
function select(store) {
  return {
    user: store.user
  };
}

module.exports = connect(select)(HomeMain);
