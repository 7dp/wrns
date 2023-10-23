import { Colors } from '@/styles'
import React from 'react'
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  ViewStyle,
} from 'react-native'

type Props = {
  props?: ActivityIndicatorProps
}

const LoadingIndicator = ({ props }: Props) => {
  return (
    <ActivityIndicator
      color={Colors.black34}
      size="large"
      {...props}
      style={[style.indicator, { ...props }?.style]}
    />
  )
}

const style = StyleSheet.create({
  indicator: {
    margin: 20,
  } as ViewStyle,
})

export { LoadingIndicator }
