import React, { Component } from "react";
import { connect } from "react-redux";
import { View,SafeAreaView } from "react-native";

import { createStackNavigator } from "react-navigation";
import HomeMain from "./components/Views/HomeStack/HomeMain";
import LoginView from "./components/Views/LoginView";


class BookshelfApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: props.user.isLogin
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isLogin !== nextProps.user.isLogin) {
      this.setState({ isLogin: nextProps.user.isLogin });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.user.isLogin != this.state.isLogin) {
      return true;
    }
    return false;
  }


  render() {
    const HomeStack = createStackNavigator(
      {
        home: { screen: HomeMain },
      },

      {
        initialRouteName: "home"
      }
    );


    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            {this.state.isLogin ? (
              <HomeStack/>
            ) : (
              <LoginView />
            )}
          </View>
        </SafeAreaView>
      </View>
    );
  }
  getCurrentRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return this.getCurrentRouteName(route);
    }
    return route;
  }
}

function select(store) {
  return {
    user: store.user
  };
}

module.exports = connect(select)(BookshelfApp);
