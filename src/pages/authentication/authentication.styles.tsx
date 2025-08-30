import styled from 'styled-components'


export const AuthenticationContainer = styled.div `
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 2.5rem;
	max-width: 1100px;
	margin: 2.5rem auto;
	padding: 0 1rem;
	align-items: start;

	@media screen and (max-width: 900px) {
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}
`


