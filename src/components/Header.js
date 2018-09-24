import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

/* eslint-disable arrow-body-style */
const Header = ({ headerText }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{headerText}</Text>
    </View>
  )
}

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    elevation: 4,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
})

export default Header
