import React, { lazy, Suspense } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import SignInView from '../views/account/sign-in';

export const routes: RouteObject[] = [
	{ path: '/sign-in', element: <SignInView /> }
]

// 生成路由
const AppRoutes = () => {
	return useRoutes(routes);
};

export default AppRoutes;