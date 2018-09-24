import React from 'react'
import { View, StyleSheet } from 'react-native'

/* eslint-disable react/destructuring-assignment, react/prop-types */
const CardSection = props => <View style={styles.container}>{ props.children }</View>

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
})

export default CardSection
