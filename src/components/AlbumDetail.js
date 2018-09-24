import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  StyleSheet, Image,
} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

/* eslint-disable camelcase */
const AlbumDetail = ({ album }) => {
  const {
    title,
    artist,
    thumbnail_image,
    image,
  } = album

  const {
    headerContent,
    headerText,
    thumbnailContainer,
    thumbnailImage,
    imageStyle,
  } = styles

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image
            source={{ uri: thumbnail_image }}
            style={thumbnailImage}
          />
        </View>
        <View style={headerContent}>
          <Text style={headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
      </CardSection>
      <CardSection>
        <Button />
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 18,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  thumbnailImage: {
    width: 50,
    height: 50,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
})

/* eslint-disable react/forbid-prop-types */
AlbumDetail.propTypes = {
  album: PropTypes.object.isRequired,
}

export default AlbumDetail
