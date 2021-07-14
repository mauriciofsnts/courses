import React from "react";
import {
	AvatarStyled,
	RatingStyled,
	UserDescription,
	UserInformationContainer,
	UserName,
} from "./UserInformation.style";

interface UserInformationProps {
	picture: string;
	name: string;
	rating: number;
	description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({ picture, name, rating, description }) => {
	return (
		<UserInformationContainer>
			<AvatarStyled src={picture} />

			<UserName>{name}</UserName>
			<RatingStyled readOnly value={rating} />
			<UserDescription>{description}</UserDescription>
		</UserInformationContainer>
	);
};

export default UserInformation;
