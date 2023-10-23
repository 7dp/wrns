// import { paddingBottomStyle } from '@/styles'
import { useMemo } from 'react'
import { ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const paddingBottomStyle = (custom: number = 20) =>
  ({
    paddingBottom: custom,
  } as ViewStyle)

const usePaddingBottom = () => {
  const { bottom } = useSafeAreaInsets()
  const style = useMemo(() => paddingBottomStyle(bottom), [bottom])
  return style
}

export { usePaddingBottom }
