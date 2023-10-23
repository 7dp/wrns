import { t } from '@/i18n'
import { Colors, commonStyles, typography } from '@/styles'
import React from 'react'
import { FallbackProps } from 'react-error-boundary'
import { StyleSheet, Text, TextStyle, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from './button'

const ErrorFallback = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={style.root}>
      <Text style={style.title}>{t('errorFallback.somethingWentWrong')}</Text>
      <View style={style.errorContainer}>
        <Text style={style.description}>
          {t('errorFallback.error')} {error?.message}
        </Text>
      </View>
      <Button
        text={t('errorFallback.backToApp')}
        props={{ onPress: resetErrorBoundary, style: style.button }}
        type="outline"
      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  button: {
    marginTop: 32,
  },

  description: {
    ...typography.heading4,
    color: Colors.black25,
    fontStyle: 'italic',
  } as TextStyle,

  errorContainer: {
    ...commonStyles.borderRadius,
    backgroundColor: Colors.whitesmoke,
    marginTop: 8,
    padding: 8,
  },

  root: {
    ...commonStyles.centerVertical,
    ...commonStyles.root,
    padding: 32,
  },

  title: {
    ...typography.heading1,
  } as TextStyle,
})

export { ErrorFallback }
