import { View } from 'react-native'
import styled from 'styled-components/native'
import COLOR from '../styles/colors'

const Card = styled(View)`
	padding: 32px;
	align-items: center;
	border-radius: 2px;
	background-color: ${COLOR.textLight};
	elevation: 3;
	margin: 16px;
`

export const FlatCard = styled(Card)`
	elevation: 0;
	margin: 16px;
	padding: 32px;
`

export default Card
