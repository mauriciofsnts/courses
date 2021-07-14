import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";

const SafeEnvironment = () => {
	return (
		<SafeEnvironmentContainer>
			Ambiente seguro <i className="twf-lock"></i>
		</SafeEnvironmentContainer>
	);
};

export default SafeEnvironment;
