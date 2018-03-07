import { Text } from 'react-native'
import styled from 'styled-components/native'
import COLOR from '../styles/colors'

export const Header = styled(Text)`
	color: ${props => (props.primary ? COLOR.primary : 'grey')};
	text-align: ${props => (props.center ? 'center' : 'left')};
	font-size: ${props =>
		(props.size === 'h1' && '32px') ||
		(props.size === 'h2' && '28px') ||
		(props.size === 'h3' && '24px') ||
		(props.size === 'h4' && '20px') ||
		(props.size === 'h5' && '16px')};
	padding: ${({ p }) => (p ? `${p * 8}px` : '0px')};
	padding-bottom: ${({ pb }) => (pb ? `${pb * 8}px` : '0px')};
`
