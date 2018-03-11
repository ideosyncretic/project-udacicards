import React from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components/native'
import COLOR from '../styles/colors'

const Input = props => {
	const { input, size, autoFocus, underlineColorAndroid, ...rest } = props
	const { name, value, onChange, ...inputProps } = input
	return (
		<StyledTextInput
			name={name}
			value={value}
			onChangeText={onChange}
			{...inputProps}
			{...rest}
			size={size}
			autoFocus={autoFocus !== 'undefined' ? autoFocus : null}
			multiline
			underlineColorAndroid={underlineColorAndroid || COLOR.primary}
			selectionColor={COLOR.primary}
		/>
	)
}

const StyledTextInput = styled(TextInput)`
	font-size: ${({ size }) => getSize(size)};
	padding: ${({ size }) => getPadding(size)};
	margin: 10px 0px;
`

const getSize = size => {
	switch (size) {
	case 's':
		return '18px'
	case 'm':
		return '22px'
	case 'l':
		return '28px'
	default:
		return '18px'
	}
}

const getPadding = size => {
	switch (size) {
	case 's':
		return '8px 0px'
	case 'm':
		return '10px 0px'
	case 'l':
		return '12px 0px'
	default:
		return '8px 0px'
	}
}

export default Input
