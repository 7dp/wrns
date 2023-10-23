import { t } from '@/i18n'
import { Colors, commonStyles, typography } from '@/styles'
import React, {
  Dispatch,
  SetStateAction,
  memo,
  useCallback,
  useRef,
  useState,
} from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

type Props = {
  items: string[]
  label: string
  setValue: Dispatch<SetStateAction<string>>
  value: string | undefined
  containerProps?: ViewProps
  isLoading?: boolean
  placeholder?: string
}

const Dropdown = memo((iProps: Props) => {
  const { items, label, containerProps, placeholder, setValue, value, isLoading } = iProps

  const refDropdown = useRef<ModalDropdown>(null)

  const [status, setStatus] = useState<'closed' | 'opened'>('closed')

  const onPress = useCallback((value: string, index: number) => {
    setValue(value)
    refDropdown.current?.select(index)
    refDropdown.current?.hide()
    setStatus('closed')
  }, [])

  const onDropdownWillShow = useCallback(() => {
    setStatus('opened')
  }, [])

  const onDropdownWillHide = useCallback(() => {
    setStatus('closed')
  }, [])

  const renderRow = (item: string, index: string, isSelected: boolean) => {
    return (
      <TouchableHighlight
        onPress={isLoading ? undefined : () => onPress(item, Number(index))}
        style={[
          style.row,
          isSelected && style.rowSelected,
          isLoading && style.loadingView,
        ]}
        underlayColor="rgba(0, 0, 0, 0.075)"
      >
        <Text style={[style.rowText, isSelected && style.rowTextSelected]}>{item}</Text>
      </TouchableHighlight>
    )
  }

  const renderArrow = () => {
    return (
      <MaterialIcon
        color={Colors.black50}
        name={status === 'closed' ? 'arrow-drop-down' : 'arrow-drop-up'}
        size={32}
        style={style.arrowIcon}
      />
    )
  }

  const rowHeight = 42

  const minimumDropdownHeight = {
    height: rowHeight * items.length,
  } as ViewStyle

  const loadingStateDropdownHeight = {
    height: rowHeight,
  } as ViewStyle

  return (
    <View {...containerProps} style={[style.root, { ...containerProps }.style]}>
      <Text style={style.label}>{label}</Text>
      <ModalDropdown
        ref={refDropdown}
        defaultTextStyle={style.placeholder}
        defaultValue={value || placeholder}
        dropdownStyle={[
          style.dropdown,
          items.length <= 3 && minimumDropdownHeight,
          isLoading && loadingStateDropdownHeight,
        ]}
        dropdownTextHighlightStyle={style.dropdownTextHighlight}
        dropdownTextStyle={style.dropdownItemText}
        isFullWidth
        onDropdownWillHide={onDropdownWillHide}
        onDropdownWillShow={onDropdownWillShow}
        options={isLoading ? [t('common.loading')] : items}
        renderButtonProps={{
          activeOpacity: 0.6,
          style: style.button,
        }}
        renderRightComponent={renderArrow}
        renderRow={renderRow}
        style={style.dropdownContainer}
        textStyle={style.value}
      />
    </View>
  )
})

const style = StyleSheet.create({
  arrowIcon: {
    marginEnd: 8,
    marginStart: 16,
  },

  button: {
    ...commonStyles.flex,
    justifyContent: 'center',
  },

  dropdown: {
    ...commonStyles.borderRadius,
    ...commonStyles.shadow,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginBottom: 20,
    marginTop: 4,
    paddingBottom: 0,
  },

  dropdownContainer: {
    ...commonStyles.borderLine,
    ...commonStyles.borderRadius,
    backgroundColor: Colors.white,
    height: 48,
    justifyContent: 'center',
    marginTop: 8,
  },

  dropdownItemText: {
    ...typography.heading4,
    paddingHorizontal: 12,
  },

  dropdownTextHighlight: {
    ...typography.heading4,
    color: Colors.dodgerBlue,
  },

  label: {
    ...typography.heading4,
    color: Colors.black34,
  },

  loadingView: {
    ...commonStyles.borderRadius,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  placeholder: {
    ...commonStyles.flex,
    ...typography.placeholder,
    marginHorizontal: 12,
  },

  root: {
    marginTop: 20,
  },

  row: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  rowSelected: {
    backgroundColor: Colors.dodgerBlue25,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  rowText: {
    ...commonStyles.flex,
    ...typography.heading4,
    marginVertical: 1,
  },

  rowTextSelected: {
    ...commonStyles.flex,
    ...typography.heading4,
    color: Colors.dodgerBlue,
  },

  value: {
    ...commonStyles.flex,
    ...typography.heading4,
    marginHorizontal: 12,
  },
})

export { Dropdown }
