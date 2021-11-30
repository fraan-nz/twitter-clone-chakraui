import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import FeedScreen from "../pages/Feed";
import MessagesScreen from "../pages/Messages";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/home" element={<FeedScreen />} />
			<Route path="/" element={<Navigate replace to="/home" />} />
			<Route path="/messages" element={<MessagesScreen />} />
		</Routes>
	);
};

export default AppRoutes;
