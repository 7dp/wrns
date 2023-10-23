import { commonStyles } from '@/styles'
import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  button: {
    marginTop: 48,
  },

  passwordInput: {
    marginTop: 16,
  },

  root: {
    ...commonStyles.centerVertical,
    ...commonStyles.pagePadding,
  },
})

export { style }
