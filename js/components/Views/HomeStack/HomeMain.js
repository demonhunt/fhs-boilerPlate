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
      <View>
        <Text>Welcome to my home</Text>
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
