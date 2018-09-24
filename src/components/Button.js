import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

/* eslint-disable arrow-body-style */
const Button = () => {
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>Click Me</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
})

export default Button