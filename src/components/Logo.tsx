import React from "react";
import {
	Icon,
	useColorMode,
	useColorModeValue,
	IconProps,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";

const Logo: React.FC<IconProps> = (props) => {
	const { toggleColorMode } = useColorMode();
	const logoColor = useColorModeValue("primary.500", undefined);

	return (
		<Icon
			color={logoColor}
			width={7}
			height={7}
			as={FaTwitter}
			onClick={toggleColorMode}
			{...props}
		/>
	);
};

export default Logo;
