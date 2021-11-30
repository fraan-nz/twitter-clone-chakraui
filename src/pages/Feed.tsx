import React, { useState } from "react";
import {
	Stack,
	StackDivider,
	Text,
	Icon,
	Image,
	Textarea,
	Button,
	CircularProgress,
	IconButton,
	SkeletonCircle,
	Skeleton,
	SkeletonText,
	Divider,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { BsEmojiSmile, BsStars } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import {
	AiOutlineCalendar,
	AiOutlineFileGif,
	AiOutlinePicture,
} from "react-icons/ai";
import { RiBarChartHorizontalFill } from "react-icons/ri";

const FeedScreen: React.FC = () => {
	const [count, setCount] = useState<number>(1);
	const tweets = React.useMemo(
		() => new Array(count).fill(true).map((_, index) => index),
		[count]
	);

	return (
		<Stack direction="row" divider={<StackDivider />} spacing={0}>
			<Stack
				divider={<StackDivider />}
				spacing={0}
				width="60%"
				minWidth="500px"
				maxHeight="100vh"
				// flex={1}
			>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					paddingX={4}
					paddingY={3}
				>
					<Text fontSize="xl" fontWeight="bold">
						Inicio
					</Text>
					<Icon width={5} height={5} as={BsStars} />
				</Stack>
				<Stack
					overflowY="auto"
					sx={{ "&::-webkit-scrollbar": { display: "none" } }}
				>
					<Stack direction="row" paddingY={2} paddingX={4} spacing={4}>
						<Image
							src="//placehold.it/64x64"
							borderRadius="50%"
							width={12}
							height={12}
						/>
						<Stack divider={<StackDivider />} width="100%" paddingRight={2}>
							<Textarea
								fontSize="xl"
								variant="unstyled"
								placeholder="¿Qué está pasando?"
								resize="none"
							/>
							<Stack
								direction="row"
								justifyContent="space-between"
								alignItems="center"
								paddingY={1}
							>
								<Stack
									direction="row"
									color="primary.500"
									fontSize={20}
									spacing={4}
									alignItems="center"
								>
									<Icon as={AiOutlinePicture} fontSize={23} />
									<Icon as={AiOutlineFileGif} />
									<Icon as={RiBarChartHorizontalFill} />
									<Icon as={BsEmojiSmile} />
									<Icon as={AiOutlineCalendar} fontSize={23} />
								</Stack>
								<Stack direction="row" spacing={3}>
									<Stack
										direction="row"
										divider={<StackDivider />}
										spacing={3}
										alignItems="center"
									>
										<CircularProgress
											size={6}
											value={5}
											thickness="6px"
											trackColor="gray.600"
										/>
										<IconButton
											aria-label="add"
											variant="outline"
											borderRadius="50%"
											size="xs"
											colorScheme="primary"
											borderColor="gray.600"
											fontSize="sm"
											icon={<FaPlus />}
										/>
									</Stack>
									<Button
										colorScheme="primary"
										onClick={() => setCount((count) => count + 1)}
									>
										Twittear
									</Button>
								</Stack>
							</Stack>
						</Stack>
					</Stack>
					<Divider borderBottomWidth={1} />
					<Stack>
						<AnimatePresence>
							{tweets.map((index) => (
								<>
									<Stack
										key={index}
										as={motion.div}
										layoutId={String(index)}
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										exit={{ scale: 0 }}
										direction="row"
										padding={4}
										spacing={4}
										width="100%"
									>
										<SkeletonCircle
											height={12}
											minHeight={12}
											width={12}
											minWidth={12}
										/>
										<Stack spacing={4} width="100%">
											<Stack alignItems="flex-end" direction="row" spacing={2}>
												<Skeleton height={6} width="120px" />
												<Skeleton height={3} width="80px" />
											</Stack>
											<SkeletonText height="100%" noOfLines={6} spacing={2} />
										</Stack>
									</Stack>
									<Divider borderBottomWidth={1} />
								</>
							))}
						</AnimatePresence>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default FeedScreen;
