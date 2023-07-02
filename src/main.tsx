import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ErrorPage } from "ErrorPage";
import { createGlobalStyle } from 'styled-components';
import { Home, Blog, About, Specialties, Fees } from 'components/pages';

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; $blackBackground?: boolean }>`
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    min-width: 375px;
    --primary-bg: red;
  }
  body {
    margin: 0;
    color: ${(props) => (props.$whiteColor ? 'white' : 'black')};
    background-color: ${(props) => (props.$blackBackground ? 'black' : 'white')};
    height: 2000px;
    min-width: 375px;
  }
  #root {
    height: 100%;
    position: relative;
  }

`;
const baseUrl = '';
const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: baseUrl + '', element: <Home />, errorElement: <ErrorPage /> },
      { path: baseUrl + 'about', element: <About />, errorElement: <ErrorPage /> },
      { path: baseUrl + 'fees-insurance', element: <Fees />, errorElement: <ErrorPage /> },
      { path: baseUrl + 'blog', element: <Blog />, errorElement: <ErrorPage /> },
      { path: baseUrl + 'specialties', element: <Specialties />, errorElement: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
