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
      isShowLogin: false,
      database: this.props.chooseDatabase.database,
    }
    this.fetchedData = false
    this.count = 0
  }

  _loginIn() {
    let data = {
      user: this.state.user.trim().toLowerCase(),
      pass: this.state.pass.trim(),
    }
    if (this.fetchedData) {
      return true
    }
    if (data.user && data.pass) {
      this.fetchedData = true
      this.loadingView.showLoadingView()
      this.props.dispatch(login(data.user, data.pass, this.viewID))
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("receiveProp---------------------:",nextProps)
    if (
      this.fetchedData &&
      this.viewID === nextProps.user.viewID &&
      nextProps.user.success
    ) {
      this.loadingView.hideLoadingView()

      this.fetchedData = false
    }
    if (
      this.fetchedData &&
      this.viewID === nextProps.user.viewID &&
      !nextProps.user.success
    ) {
      this.fetchedData = false
      this.loadingView.hideLoadingView()
      this.setState({
        isShowAlertView: true,
        message: nextProps.user.message
          ? nextProps.user.message
          : 'Đăng nhập thất bại',
      })
    }
  }

  logIn() {
    let data = {
      userId: 'sa@fahasa.com',
      password: md5Hex(this.state.pass + 'fhs'),
    }
    
    this.props
      .dispatch(ApiPost('api/authenticate', data, true))
      .then(response => {
        if (response.errorCode == '0') {
          this.setState({ loggedin: true })
        } else if ((response.error = 2)) {
          Toast.show('Sai mật khẩu', {
            duration: Toast.durations.SHORT,
            position: 50,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: 'red',
            textColor: 'white',
            textStyle: { fontSize: 18, fontWeight: 'bold' },
            onHidden: () => {
              this.isShowShelfToast = false
            },
          })
        }
      })
  }
  chooseDatabase(database) {
    this.props.dispatch(chooseDatabase(database))
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
        <Modal
          animationType={'none'}
          transparent={true}
          visible={this.state.isShowLogin}
          onRequestClose={() => {}}
        >
          <View style={styles.modalcontainer}>
            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                borderWidth: 1,
              }}
            >
              <View style={{ flexDirection: 'column' }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}
                  >
                    Local
                  </Text>
                  <CheckBox
                    disable={true}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={this.state.database == 'Local'}
                    onPress={() => {
                      if (this.state.loggedin) {
                        this.setState({ database: 'Local' })
                      } else {
                      }
                    }}
                    checkedColor="#FF971E"
                    containerStyle={{
                      backgroundColor: 'transparent',
                      borderRadius: 20,
                      borderColor: '#fff',
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}
                  >
                    Test
                  </Text>
                  <CheckBox
                    disable={true}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={this.state.database == 'Test'}
                    onPress={() => {
                      if (this.state.loggedin) {
                        this.setState({ database: 'Test' })
                      } else {
                      }
                    }}
                    checkedColor="#FF971E"
                    containerStyle={{
                      backgroundColor: 'transparent',
                      borderRadius: 20,
                      borderColor: '#fff',
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}
                  >
                    Production
                  </Text>
                  <CheckBox
                    disable={true}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={this.state.database == 'Production'}
                    onPress={() => {
                      if (this.state.loggedin) {
                        this.setState({ database: 'Production' })
                      } else {
                      }
                    }}
                    checkedColor="#FF971E"
                    containerStyle={{
                      backgroundColor: 'transparent',
                      borderRadius: 20,
                      borderColor: '#fff',
                    }}
                  />
                </View>
              </View>

              {this.state.loggedin ? null : (
                <View style={styles.inputContainer}>
                  <TextInput
                    value={this.state.pass}
                    onChangeText={text => {
                      this.setState({ pass: text })
                    }}
                    placeholderTextColor={globalSetting.lineColor}
                    placeholder="Mật khẩu"
                    secureTextEntry={true}
                    style={styles.inputForm}
                    underlineColorAndroid="transparent"
                  />
                </View>
              )}
              <View style={{ flexDirection: 'row' }}>
                {this.state.loggedin ? null : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: globalSetting.main_orange_color,
                      margin: 15,
                      padding: 10,
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      this.setState({ isShowLogin: false })
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: 15,
                      }}
                    >
                      Hủy
                    </Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={{
                    backgroundColor: globalSetting.main_orange_color,
                    margin: 15,
                    padding: 10,
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    if (this.state.loggedin) {
                      this.chooseDatabase(this.state.database)
                      this.setState({ isShowLogin: false })
                    } else {
                      this.logIn()
                    }
                  }}
                >
                  <Text
                    style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }}
                  >
                    {this.state.loggedin ? 'Xác nhận' : 'Nhập'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <AlertView
          isShowAlertView={this.state.isShowAlertView}
          callBack={() => {
            this.setState({ isShowAlertView: false })
          }}
          message={this.state.message}
        />
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
    chooseDatabase: store.chooseDatabase,
  }
}

module.exports = connect(select)(LoginView)
