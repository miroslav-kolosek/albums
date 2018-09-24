import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

/* eslint-disable arrow-body-style */
const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardSection>
        <Text>{album.title}</Text>
      </CardSection>
    </Card>
  )
}

/* eslint-disable react/forbid-prop-types */
AlbumDetail.propTypes = {
  album: PropTypes.object.isRequired,
}

export default AlbumDetail
