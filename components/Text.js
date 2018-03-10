import { Text } from 'react-native'
import styled from 'styled-components/native'
import COLOR from '../styles/colors'

export const Header = styled(Text)`
	color: ${props => (props.primary ? COLOR.primary : COLOR.textDark)};
	text-align: ${props => (props.center ? 'center' : 'left')};
	font-weight: ${props =>
		(props.size === 'h1' && 900) ||
		(props.size === 'h2' && 600) ||
		(props.size === 'h3' && 600) ||
		(props.size === 'h4' && 400) ||
		(props.size === 'h5' && 400)};
	font-size: ${props =>
		(props.size === 'h1' && '32px') ||
		(props.size === 'h2' && '28px') ||
		(props.size === 'h3' && '24px') ||
		(props.size === 'h4' && '20px') ||
		(props.size === 'h5' && '16px')};
	padding: ${({ p }) => (p ? `${p * 8}px` : '0px')};
	padding-top: ${({ pt }) => (pt ? `${pt * 8}px` : '0px')};
	padding-right: ${({ pr }) => (pr ? `${pr * 8}px` : '0px')};
	padding-bottom: ${({ pb }) => (pb ? `${pb * 8}px` : '0px')};
	padding-left: ${({ pl }) => (pl ? `${pl * 8}px` : '0px')};
`
