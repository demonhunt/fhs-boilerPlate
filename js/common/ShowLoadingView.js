import React, { Component } from 'react'
import { View, ActivityIndicator, Modal, StyleSheet } from 'react-native'
export default class showLoadingView extends Component {
  props: {
    isShow: React.PropTypes.bool,
    timeout: React.PropTypes.number,
    isModal: React.PropTypes.number,
    style: any,
  }
  constructor(props) {
    super(props)
    this.state = {
      isShow: this.props.isShow ? this.props.isShow : false,
    }
    this.id = new Date().getTime().toString()
    this.notchangeID = new Date().getTime().toString()
    this.timeout = this.props.timeout ? this.props.timeout : 2000
    this.hideLoadingView = this.hideLoadingView.bind(this)
    this.showLoadingViewWithTimeOut = this.showLoadingViewWithTimeOut.bind(this)
    this.showLoadingView = this.showLoadingView.bind(this)
    this.mounted = null
  }
  showLoadingViewWithTimeOut(timeout) {
    try {
      this.setState({
        isShow: true,
      })
    } catch (error) {}

    var self = this
    this.id = new Date().getTime().toString()
    var id = this.id
    setTimeout(function() {
      if (id == self.id) {
        self.hideLoadingView()
      }
    }, timeout)
  }
  showLoadingView() {
    try {
      this.setState({
        isShow: true,
      })
    } catch (error) {}

    var self = this
    this.id = new Date().getTime().toString()
    var id = this.id
    setTimeout(function() {
      if (id == self.id) {
        self.hideLoadingView()
      }
    }, this.timeout)
  }
  hideLoadingView() {
    if ((this.state.isShow != false) & this.mounted) {
      try {
        this.setState({
          isShow: false,
        })
      } catch (error) {}
    }
  }
  componentDidMount() {
    this.mounted = true
    if (this.state.isShow) {
      var self = this
      this.id = new Date().getTime().toString()
      var id = this.id
      setTimeout(function() {
        if (id == self.id) {
          try {
            self.setState({ isShow: false })
          } catch (error) {}
        }
      }, this.timeout)
    }
  }
  componentWillUnmount() {
    this.mounted = false
  }
  render() {
    if (this.state.isShow == false) return null
    if (this.props.isModal) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
            animating={this.state.isShow}
            style={{ height: 80, width: 80 }}
            size="large"
          />
        </View>
      )
    }
    return (
      <View
        showLoadingViewWithTimeOutTest={() => {
          this.showLoadingViewWithTimeOut(4000)
        }}
        showLoadingViewTest={() => {
          this.showLoadingView()
        }}
        hideLoadingViewTest={() => {
          this.hideLoadingView()
        }}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <ActivityIndicator
          animating={this.state.isShow}
          style={{ height: 80 }}
          size="large"
        />
      </View>
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
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
