import React, {lazy, Suspense} from 'react';
import {RouteObject, createBrowserRouter, RouterProvider, createHashRouter} from 'react-router-dom';
import SignInPage from "../app/(account)/sign-in/page";
import {MainLayout} from "@/app/(normal)/layout";

export const routes: RouteObject[] = [
    {path: '/sign-in', element: <SignInPage/>},
    {path: `/`, element: <MainLayout/>}
]

export const router = createHashRouter(routes);

export const AppRouter = () => {
    return <RouterProvider router={router}/>
}