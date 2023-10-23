import { Colors } from '@/styles'
import { StyleSheet, TextStyle } from 'react-native'

const style = StyleSheet.create({
  listItem: {
    paddingVertical: 12,
  },

  logoutText: {
    color: Colors.dodgerBlue,
  } as TextStyle,

  separator: {
    backgroundColor: Colors.black25,
    height: 0.5,
  },
})

export { style }
