import React from "react";
import {
	Stack,
	Text,
	Image,
	Icon,
	useColorModeValue,
	StackProps,
} from "@chakra-ui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const ProfileButton: React.FC<StackProps> = () => {
	const userColor = useColorModeValue(undefined, "white");

	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			paddingY={4}
			paddingLeft={4}
		>
			<Stack direction="row" alignItems="center">
				<Image
					height={10}
					width={10}
					borderRadius="50%"
					src="//placehold.it/64x64"
				/>
				<Stack spacing={0}>
					<Text fontWeight="bold" color={userColor} fontSize="sm">
						profile
					</Text>
					<Text fontSize="sm" color="gray.500">
						@profile
					</Text>
				</Stack>
			</Stack>
			<Icon as={BiDotsHorizontalRounded}></Icon>
		</Stack>
	);
};

export default ProfileButton;
