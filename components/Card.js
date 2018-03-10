import { View } from 'react-native'
import styled from 'styled-components/native'
import COLOR from '../styles/colors'

const Card = styled(View)`
	padding: 16px;
	align-items: center;
	border-radius: 4px;
	background-color: ${COLOR.textLight};
	elevation: 3;
`

export default Card
