import React from "react";
import { Icon, Stack, Text, StackProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BiHash } from "react-icons/bi";
import {
	FaBell,
	FaBookmark,
	FaEnvelope,
	FaRegBell,
	FaRegBookmark,
	FaRegEnvelope,
	FaRegUser,
	FaUser,
} from "react-icons/fa";
import {
	IoEllipsisHorizontalCircle,
	IoEllipsisHorizontalCircleSharp,
} from "react-icons/io5";
import {
	RiFileList2Fill,
	RiFileList2Line,
	RiHome2Fill,
	RiHome2Line,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

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

const Navbar: React.FC<StackProps> = (props) => {
	const { pathname } = useLocation();

	return (
		<Stack fontSize="xl" fontWeight="400" width="100%" spacing={7} {...props}>
			{links.map((link) => (
				<Link to={link.href} key={link.href}>
					<Stack direction="row" alignItems="center" spacing={5}>
						<Icon
							width={6}
							height={6}
							as={pathname === link.href ? link.activeIcon : link.inactiveIcon}
						/>
						<Text fontWeight={pathname === link.href ? "700" : "400"}>
							{link.text}
						</Text>
					</Stack>
				</Link>
			))}
		</Stack>
	);
};

export default Navbar;
