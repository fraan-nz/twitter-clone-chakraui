import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
	config: {
		initialColorMode: "dark",
	},
	colors: {
		primary: theme.colors.twitter,
	},
	styles: {
		global: (props: any) => ({
			"html, body, #root": {
				height: "100%",
				color: mode(undefined, "whiteAlpha.800")(props),
			},
		}),
	},
	components: {
		Button: {
			baseStyle: {
				borderLeftRadius: 50,
				borderRightRadius: 50,
			},
			sizes: {
				lg: {
					paddingY: 6,
					fontWeight: "bold",
					fontSize: "md",
				},
			},
			variants: {
				solid: (props: any) => ({
					backgroundColor: `${props.colorScheme}.500`,
					color: mode(undefined, "white")(props),
					fontWeight: "bold",
					_hover: {
						backgroundColor: `${props.colorScheme}.600`,
					},
				}),
				outline: (props: any) => ({
					borderColor: `${props.colorScheme}.500`,
					color: `${props.colorScheme}.500`,
					fontWeight: "bold",
					_hover: {
						borderColor: `${props.colorScheme}.600`,
						color: `${props.colorScheme}.600`,
					},
				}),
			},
		},
	},
});
