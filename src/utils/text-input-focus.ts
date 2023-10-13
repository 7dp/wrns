import { RefObject } from 'react'
import { TextInput } from 'react-native'

const setFocus = (ref: RefObject<TextInput>) => {
  ref.current?.focus()
}

export { setFocus }
