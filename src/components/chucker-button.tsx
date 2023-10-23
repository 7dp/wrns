import { useNavigation } from '@/hooks'
import { Colors, commonStyles, windowHeight } from '@/styles'
import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { VectorIcon } from './vector-icon'

const ChuckerButton = () => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('Chucker')
  }

  return (
    <TouchableHighlight
      onPress={onPress}
      style={style.button}
      underlayColor={Colors.black18}
    >
      <VectorIcon props={{ color: Colors.dodgerBlue, name: 'network-check' }} />
    </TouchableHighlight>
  )
}

const style = StyleSheet.create({
  button: {
    ...commonStyles.shadow,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 8,
    position: 'absolute',
    top: windowHeight / 3,
  },
})

export { ChuckerButton }
