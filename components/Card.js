import { View } from 'react-native'
import styled from 'styled-components/native'

const Card = styled(View)`
	padding: 16px;
	align-items: center;
	border-radius: 4px;
	shadow-radius: 3;
	shadow-opacity: 0.8;
	shadow-color: rgba(0,0,0,0.2);
	shadow-offset: {
		width: 0,
		height: 3,
	};
	background-color: white;
	elevation: 3;
`

export default Card
