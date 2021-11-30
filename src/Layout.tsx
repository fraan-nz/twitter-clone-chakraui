import React from "react";
import {
	Stack,
	Container,
	Icon,
	Text,
	Box,
	Button,
	useColorMode,
	useColorModeValue,
	Image,
} from "@chakra-ui/react";
import {
	FaTwitter,
	FaRegEnvelope,
	FaEnvelope,
	FaRegBookmark,
	FaBookmark,
	FaRegUser,
	FaUser,
	FaRegBell,
	FaBell,
} from "react-icons/fa";
import { BiHash, BiDotsHorizontalRounded } from "react-icons/bi";
import {
	RiHome2Fill,
	RiHome2Line,
	RiFileList2Line,
	RiFileList2Fill,
} from "react-icons/ri";
import {
	IoEllipsisHorizontalCircleSharp,
	IoEllipsisHorizontalCircle,
} from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { IconType } from "react-icons";

interface ListLink {
	href: string;
	text: string;
	activeIcon: IconType;
	inactiveIcon: IconType;
}

const links: ListLink[] = [
	{
		href: "/home",
		text: "Inicio",
		activeIcon: RiHome2Fill,
		inactiveIcon: RiHome2Line,
	},
	{
		href: "/explore",
		text: "Explorar",
		activeIcon: BiHash,
		inactiveIcon: BiHash,
	},
	{
		href: "/notifications",
		text: "Notificaciones",
		activeIcon: FaBell,
		inactiveIcon: FaRegBell,
	},
	{
		href: "/messages",
		text: "Mensajes",
		activeIcon: FaEnvelope,
		inactiveIcon: FaRegEnvelope,
	},
	{
		href: "/bookmarks",
		text: "Guardados",
		activeIcon: FaBookmark,
		inactiveIcon: FaRegBookmark,
	},
	{
		href: "/list",
		text: "Listas",
		activeIcon: RiFileList2Fill,
		inactiveIcon: RiFileList2Line,
	},
	{
		href: "/profile",
		text: "Perfil",
		activeIcon: FaUser,
		inactiveIcon: FaRegUser,
	},
	{
		href: "/options",
		text: "Más opciones",
		activeIcon: IoEllipsisHorizontalCircleSharp,
		inactiveIcon: IoEllipsisHorizontalCircle,
	},
];

const Layout: React.FC = ({ children }) => {
	const { toggleColorMode } = useColorMode();
	const { pathname } = useLocation();
	const logoColor = useColorModeValue("primary.500", undefined);
	const userColor = useColorModeValue(undefined, "white");

	return (
		<Container maxWidth="container.md" alignSelf="center" height="100%">
			<Stack direction="row" height="100%">
				<Stack
					justifyContent="space-between"
					borderRightColor="gray.700"
					borderRightWidth={1}
					paddingLeft={3}
					paddingRight={6}
					paddingY={3}
				>
					<Stack spacing={7}>
						<Link to="/">
							<Icon
								color={logoColor}
								width={7}
								height={7}
								as={FaTwitter}
								onClick={toggleColorMode}
							/>
						</Link>
						<Stack spacing={7}>
							{links.map((link) => (
								<Link to={link.href} key={link.href}>
									<Stack direction="row" alignItems="center" spacing={5}>
										<Icon
											width={6}
											height={6}
											as={
												pathname === link.href
													? link.activeIcon
													: link.inactiveIcon
											}
										/>
										<Text
											fontWeight={pathname === link.href ? "700" : "400"}
											fontSize="xl"
										>
											{link.text}
										</Text>
									</Stack>
								</Link>
							))}
						</Stack>
						<Button size="lg" width={225} colorScheme="primary">
							Twittear
						</Button>
					</Stack>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						paddingY={4}
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
				</Stack>
				<Box paddingX={4} width="100%" overflowY="auto" maxHeight="100vh">
					{children}
				</Box>
			</Stack>
		</Container>
	);
};

export default Layout;
