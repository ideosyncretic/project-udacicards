import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import COLOR from '../styles/colors'

const Button = styled(TouchableOpacity)`
	border-radius: 4px;
	padding: 10px 32px;
	margin: 4px;
	background-color: ${COLOR.primary};
	align-items: center;
`

export const ButtonText = ({ children }) => (
	<StyledButtonText>{children.toUpperCase()}</StyledButtonText>
)

const StyledButtonText = styled(Text)`
	font-size: 16px;
	font-weight: bold;
	color: ${COLOR.textLight};
`

export const MinimalButton = styled(TouchableOpacity)`
	padding: 10px;
	margin: 4px;
`
export const MinimalButtonText = styled(Text)`
	margin: 4px;
	font-size: 16px;
	font-weight: bold;
	color: ${COLOR.primary};
`

export default Button
