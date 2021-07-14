import React from "react";
import { PageTitleContainer, PageTitleStyled } from "./PageTitle.style";

interface PageTitleProps {
	title: string;
	subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
	const { title, subtitle } = props;

	return (
		<PageTitleContainer>
			<PageTitleStyled>{title}</PageTitleStyled>

			{subtitle}
		</PageTitleContainer>
	);
};

export default PageTitle;
