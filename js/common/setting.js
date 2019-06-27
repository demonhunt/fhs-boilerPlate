'use strict'
import Dimensions from 'Dimensions'
import { Platform } from 'react-native'

var screenWidth = Dimensions.get('window').width
var screenHeight = Dimensions.get('window').height
const size = {
  sWidth : screenWidth,
  sHeight : screenHeight
}
const Color = {
  main_orange_color: '#FF971E',
  main_line_color: '#e4e4e4',
  price_product_color: '#FF971E',
  title_category_color: '#FF971E',
  seemore_color: '#565656',
  main_text_color: '#000000',
  sub_text_color: '#6A6A6A',
  toggle_green_color: '#ccffcc',
  lineColor: '#CED0CE',
  error_color: '#FC1D1D',
  green_color: '#228b22',
  drawer_line_color: '#FF971E',
  blue_color: '#2087FC',
  red_color: '#ff0000',
  main_background_color: '#DCDEE3',
  main_red_color: '#CA2027',
  blue: '#007bff',
  red: '#dc3545',
  yellow: '#fcf4a3',
  green: '#28a745',
  gray: '#e5e5eb',
  transparent: 'white',
  shadowBlock: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 15,
    ...Platform.select({
      ios: {
        width: screenWidth - 15 * 2,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
      },

      android: {
        elevation: 10,
        marginHorizontal: 15,
      },
    })
  }
}


module.exports = {
  ...size,
  ...Color,
  FOUR_API_URL: 'https://app3.fahasa.com',
  WEB_URL: 'https://www.fahasa.com',

  APPBAR_HEIGHT: Platform.OS === 'ios' ? 44 : 56,
  STATUSBAR_HEIGHT: Platform.OS === 'ios' ? 20 : 0,
  navbar_height: 47,
  drawer_marginTop: Platform.OS === 'ios' ? 20 : 0,

  loadingViewOpacity: 0.2,
  init: function() {
    if (Platform.OS === 'android') {
      //this.navigationBarHeight = this.screenHeight / 11;
      this.navigationBarHeight = 50
    }
    return this
  },
}.init()
