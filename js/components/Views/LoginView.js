import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  KeyboardAvoidingView,
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import globalSetting from '../../common/setting'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ImageUtil from '../../common/image/ImageUtil'
import { connect } from 'react-redux'
import AlertView from './AlertView'
import { login, chooseDatabase } from '../../actions'
import { ApiPost } from '../../actions/apiFetcher'
import ShowLoadingView from '../../common/ShowLoadingView'
var md5Hex = require('md5-hex')
import Toast from 'react-native-root-toast'

class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:
        props.user.userInfor && props.user.userInfor.username
          ? props.user.userInfor.username
          : '',
      pass: '',
      secureTextEntry: true,
      message: '',
      isShowAlertView: false,
    }
   
  }

  _loginIn() {
    let data = {
      user: this.state.user.trim().toLowerCase(),
      pass: this.state.pass.trim(),
    }
 
    if (data.user && data.pass) {
      this.props.dispatch(login(data.user, data.pass))
    }
  }
  

  render() {
    let nameIcon = this.state.secureTextEntry ? 'ios-eye-off' : 'ios-eye'
    let iconVisible = (
      <TouchableOpacity
        style={{ width: 50, alignItems: 'flex-end' }}
        onPress={() =>
          this.setState({ secureTextEntry: !this.state.secureTextEntry })
        }
      >
        <Ionicons name={nameIcon} size={25} color={globalSetting.lineColor} />
      </TouchableOpacity>
    )

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.welcomeContainer}
            onPress={() => {
              if (this.count < 4) {
                this.count++
              } else {
                this.setState({ isShowLogin: true })
                this.count = 0
              }
            }}
          >
            <Image
              style={{ width: 110, height: 110 }}
              source={ImageUtil.getImageSource('fahasaPromotion')}
              resizeMode="contain"
            />
            <View style={styles.welcomeView}>
              <Text style={styles.welcomeText}>Đăng nhập</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <KeyboardAvoidingView>
              <View style={{ alignItems: 'center' }}>
                <View style={styles.inputContainer}>
                  <TextInput
                    value={this.state.user}
                    onChangeText={text => {
                      this.setState({ user: text })
                    }}
                    placeholder="Tài khoản"
                    style={styles.inputForm}
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                    placeholderTextColor={globalSetting.lineColor}
                  />
                </View>
                <View style={{ marginTop: 10 }} />
                <View style={styles.inputContainer}>
                  <TextInput
                    value={this.state.pass}
                    onChangeText={text => {
                      this.setState({ pass: text })
                    }}
                    placeholderTextColor={globalSetting.lineColor}
                    placeholder="Mật khẩu"
                    secureTextEntry={this.state.secureTextEntry}
                    style={styles.inputForm}
                    underlineColorAndroid="transparent"
                  />
                  {iconVisible}
                </View>
                <View style={{ marginTop: 60 }} />
                <View style={styles.welcomeView}>
                  <TouchableOpacity
                    onPress={() => {
                      this._loginIn()
                    }}
                  >
                    <View style={styles.loginButton}>
                      <Text style={styles.loginButtonText}>Đăng nhập</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
            <ShowLoadingView
              ref={input => (this.loadingView = input)}
              isModal={true}
              timeout={10000}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  imageContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: globalSetting.main_text_color,
    fontSize: 18,
    color: globalSetting.main_orange_color,
    fontWeight: 'bold',
  },
  loginContainer: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'flex-start',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: globalSetting.lineColor,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 300,
  },
  inputForm: {
    height: 35,
    flex: 1,
    paddingBottom: 5,
    color: globalSetting.main_text_color,
  },
  loginButton: {
    height: 40,
    width: 260,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'white',
    // borderWidth: 2,
    backgroundColor: globalSetting.main_orange_color,
    borderRadius: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginFacebookContainer: {
    height: 40,
    width: 260,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#3b5998',
    alignItems: 'center',
    paddingLeft: 13,
  },
  loginFacebookText: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  behindContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modalcontainer: {
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

function select(store) {
  return {
    user: store.user,
  }
}

module.exports = connect(select)(LoginView)
