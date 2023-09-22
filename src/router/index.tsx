import React, { lazy, Suspense } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import SignInPage from "../app/(account)/sign-in/page";

export const routes: RouteObject[] = [
	{ path: '/sign-in', element: <SignInPage /> }
]

// 生成路由
const AppRoutes = () => {
	return useRoutes(routes);
};

export default AppRoutes;