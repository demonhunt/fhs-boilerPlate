import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import golbalSetting from './setting'
export default class LoadingView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          opacity: golbalSetting.loadingViewOpacity,
        }}
      >
        <ActivityIndicator
          animating={true}
          style={{ height: 80 }}
          size="large"
        />
      </View>
    )
  }
}
