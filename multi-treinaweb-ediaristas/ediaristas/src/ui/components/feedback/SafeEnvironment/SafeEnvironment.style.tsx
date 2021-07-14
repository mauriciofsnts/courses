import { experimentalStyled as styled } from "@material-ui/core/styles";

export const SafeEnvironmentContainer = styled("div")`
	background-color: ${({ theme }) => theme.palette.background.default};
	color: ${({ theme }) => theme.palette.text.secondary};
	text-align: right;
	padding: ${({ theme }) => theme.spacing(2)} 0;
	font-size: 12px;
`;
