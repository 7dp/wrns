import { Colors, commonStyles } from '@/styles'
import React, { memo } from 'react'
import { StyleSheet, Text, TextStyle, View } from 'react-native'
import { ToastConfigParams } from 'react-native-toast-message'
import { VectorIcon } from './vector-icon'

type Props = {
  toastProps: ToastConfigParams<unknown>
  type?: 'info' | 'error'
}

const Toast = memo(({ type, toastProps }: Props) => {
  const isInfo = type === 'info'

  return (
    <View style={style.root}>
      <VectorIcon
        props={{
          color: isInfo ? Colors.dodgerBlue : Colors.red,
          name: isInfo ? 'check-circle' : 'alert-circle',
          size: 20,
        }}
        source="material-community"
      />
      <Text disabled numberOfLines={3} style={style.text}>
        {toastProps.text1}
      </Text>
    </View>
  )
})

const style = StyleSheet.create({
  root: {
    ...commonStyles.borderRadius,
    ...commonStyles.centerRow,
    ...commonStyles.flex,
    ...commonStyles.shadow,
    paddingHorizontal: 12,
    paddingVertical: 16,
    width: '90%',
  },

  text: {
    ...commonStyles.flex,
    color: Colors.black82,
    marginStart: 8,
  } as TextStyle,
})

export { Toast }
