import { Colors, commonStyles, typography } from '@/styles'
import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useCallback,
  useMemo,
  useReducer,
  useState,
} from 'react'
import {
  TextInput as RNTextInput,
  StyleSheet,
  Text,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native'
import { VectorIcon } from './vector-icon'
import { t } from '@/i18n'

type Props = {
  label?: string
  containerProps?: ViewProps
  inputProps?: TextInputProps
  isError?: boolean
  isPassword?: boolean
  trailingIcon?: string
  leadingText?: string
  trailingText?: string
  isInsideBottomSheet?: boolean
}

const TextInput = memo(
  forwardRef<RNTextInput, Props>((props: Props, ref: ForwardedRef<RNTextInput>) => {
    const {
      label,
      inputProps,
      containerProps,
      isError,
      isPassword,
      isInsideBottomSheet,
      leadingText,
      trailingText,
      trailingIcon,
    } = props

    const numberOfLines = inputProps?.numberOfLines ?? 1
    const style = styles(numberOfLines)

    const [isFocus, setIsFocus] = useState(false)
    const [secureTextEntry, toggleSecureTextEntry] = useReducer(
      (current: boolean) => !current,
      true,
    )
    const isMultiline: boolean =
      !!inputProps && !!inputProps.multiline && !!inputProps.numberOfLines

    const onBlur = useCallback(() => {
      setIsFocus(false)
    }, [])

    const onFocus = useCallback(() => {
      setIsFocus(true)
    }, [])

    const onVisibilityTogglePress = useCallback(() => {
      toggleSecureTextEntry()
    }, [])

    const getBorderColor = useMemo(() => {
      if (isError) return Colors.red
      if (isFocus) return Colors.dodgerBlue
      return Colors.black25
    }, [isError, isFocus])

    const inputContainerStyle = {
      ...style.inputContainer,
      borderColor: getBorderColor,
      marginTop: label ? 8 : 0,
    } as ViewStyle

    const labelStyle = {
      ...typography.heading4,
      color: isError ? Colors.red : isFocus ? Colors.dodgerBlue : Colors.black34,
    } as TextStyle

    const renderTrailingIcon = useMemo(() => {
      let icon
      if (isPassword) icon = secureTextEntry ? 'visibility' : 'visibility-off'
      else icon = trailingIcon

      if (!icon) return null

      return (
        <TouchableOpacity
          activeOpacity={isPassword ? 0.5 : 1}
          onPress={isPassword ? onVisibilityTogglePress : undefined}
          style={style.button}
        >
          <VectorIcon props={{ color: Colors.black50, name: icon, size: 24 }} />
        </TouchableOpacity>
      )
    }, [isPassword, secureTextEntry, trailingIcon])

    return (
      <View {...containerProps}>
        {label && <Text style={labelStyle}>{label}</Text>}
        <View style={inputContainerStyle}>
          {leadingText && (
            <View style={style.leadingTextContainer}>
              <Text style={style.leadingText}>{leadingText}</Text>
            </View>
          )}
          {isInsideBottomSheet ? (
            <BottomSheetTextInput
              // @ts-ignore
              ref={ref}
              onBlur={onBlur}
              onFocus={onFocus}
              placeholder={t('common.typeHere')}
              placeholderTextColor={Colors.black34}
              secureTextEntry={isPassword ? secureTextEntry : undefined}
              {...inputProps}
              style={[
                style.input,
                isMultiline && style.multiline,
                { ...inputProps }?.style,
              ]}
            />
          ) : (
            <RNTextInput
              ref={ref}
              onBlur={onBlur}
              onFocus={onFocus}
              placeholder={t('common.typeHere')}
              placeholderTextColor={Colors.black34}
              secureTextEntry={isPassword ? secureTextEntry : undefined}
              {...inputProps}
              style={[
                style.input,
                isMultiline && style.multiline,
                { ...inputProps }?.style,
              ]}
            />
          )}
          {!!trailingText && (
            <View style={style.trailingTextContainer}>
              <Text style={style.trailingText}>{trailingText}</Text>
            </View>
          )}
          {renderTrailingIcon}
        </View>
      </View>
    )
  }),
)

const baseStyle = StyleSheet.create({
  currentTypography: {
    ...typography.heading4,
  } as TextStyle,
})

const lineHeight = baseStyle.currentTypography.lineHeight ?? 17

const styles = (numberOfLines: number) =>
  StyleSheet.create({
    button: {
      ...commonStyles.center,
      height: 48,
      marginEnd: 8,
      width: 32,
    } as ViewStyle,

    input: {
      ...baseStyle.currentTypography,
      ...commonStyles.flex,
      minHeight: 48,
      paddingHorizontal: 12,
      paddingVertical: 2,
    },

    inputContainer: {
      ...commonStyles.centerRow,
      borderRadius: 10,
      borderWidth: 1,
    },

    leadingText: {
      ...baseStyle.currentTypography,
      color: Colors.black82,
      marginEnd: -4,
      marginStart: 12,
    },

    leadingTextContainer: {
      justifyContent: 'center',
    } as ViewStyle,

    multiline: {
      height: lineHeight * numberOfLines + lineHeight / 2,
      paddingVertical: 8,
    },

    trailingText: {
      ...baseStyle.currentTypography,
      color: Colors.black82,
      marginEnd: 16,
      marginStart: 12,
    },

    trailingTextContainer: {
      borderLeftColor: Colors.black34,
      borderLeftWidth: 1,
      justifyContent: 'center',
    } as ViewStyle,
  })

export { TextInput }
