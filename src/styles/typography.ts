import { StyleSheet, TextStyle } from 'react-native'
import { Colors } from './colors'

const getLineHeightFor = (fontSize: number) => {
  return fontSize + Math.round(fontSize / 4)
}

const typography = StyleSheet.create({
  heading1: {
    color: Colors.black82,
    fontSize: 24,
    lineHeight: getLineHeightFor(24),
    fontWeight: '700',
  } as TextStyle,

  heading2: {
    color: Colors.black82,
    fontSize: 21,
    lineHeight: getLineHeightFor(21),
    fontWeight: '700',
  } as TextStyle,

  heading3: {
    color: Colors.black82,
    fontSize: 17,
    lineHeight: getLineHeightFor(17),
  } as TextStyle,

  heading4: {
    color: Colors.black82,
    fontSize: 14,
    lineHeight: getLineHeightFor(14),
  } as TextStyle,

  heading5: {
    color: Colors.black82,
    fontSize: 12,
    lineHeight: getLineHeightFor(12),
  } as TextStyle,

  heading6: {
    color: Colors.black82,
    fontSize: 10,
    lineHeight: getLineHeightFor(10),
  } as TextStyle,

  placeholder: {
    color: Colors.black34,
    fontSize: 14,
    lineHeight: getLineHeightFor(14),
  },
})

export { typography }
