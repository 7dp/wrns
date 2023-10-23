import { Colors } from './colors'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

const numberOfLines = 6
const textHeight = 16.5

const commonStyles = StyleSheet.create({
  absolute: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  } as ViewStyle,

  background: {
    backgroundColor: Colors.white,
  } as ViewStyle,

  borderLine: {
    borderColor: Colors.black25,
    borderWidth: 1,
  } as ViewStyle,

  borderRadius: {
    borderRadius: 8,
  } as ViewStyle,

  center: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  } as ViewStyle,

  centerRow: {
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,

  centerVertical: {
    flexDirection: 'column',
    justifyContent: 'center',
  } as ViewStyle,

  flex: {
    flex: 1,
  } as ViewStyle,

  flexGrow: {
    flexGrow: 1,
  } as ViewStyle,

  listFooterLoadingIndicator: {
    margin: 20,
    marginBottom: 0,
  },

  multilineTextInput: {
    height: textHeight * numberOfLines,
    paddingBottom: 10,
    paddingTop: 10,
  } as TextStyle,

  pagePadding: {
    padding: 20,
  } as ViewStyle,

  root: {
    backgroundColor: Colors.white,
    flex: 1,
  } as ViewStyle,

  row: {
    flexDirection: 'row',
  } as ViewStyle,

  screen: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: 20,
  },

  shadow: {
    backgroundColor: Colors.white,
    elevation: 3,
    shadowColor: Colors.black25,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  } as ViewStyle,

  spaceBetweenListItem: {
    marginTop: 16,
  } as ViewStyle,
})

export { commonStyles }
