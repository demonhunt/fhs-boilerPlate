import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import globalSetting from '../../common/setting'

export default class AlertView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Modal
        animationType={'none'}
        transparent={true}
        visible={this.props.isShowAlertView}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <View
            style={{
              width: 260,
              backgroundColor: 'white',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <View
              style={{
                alignItems: 'center',
                margin: 10,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  textAlign: 'center',
                  color: globalSetting.main_text_color,
                }}
              >
                {this.props.title ? this.props.title : 'Thông báo'}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  textAlign: 'center',
                  color: globalSetting.main_text_color,
                  lineHeight: 20,
                }}
              >
                {this.props.message}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  flex: 1,
                  borderTopWidth: 0.5,
                  borderTopColor: globalSetting.drawer_line_color,
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setTimeout(() => {
                  if (this.props.callBack) {
                    this.props.callBack()
                  }
                }, 100)
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    color: globalSetting.main_orange_color,
                    fontSize: 15,
                  }}
                >
                  {this.props.buttonTittle}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(52,52,52,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
