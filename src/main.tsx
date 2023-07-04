import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ErrorPage } from "ErrorPage";
import { createGlobalStyle } from 'styled-components';
import { Home, Blog, About, Specialties, Fees, Contact, Services } from 'components/pages';

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; $blackBackground?: boolean }>`
@font-face {
  font-family: semplicita;
  src: url('public/fonts/semplicitapro/SemplicitaPro-Light.otf');
}
@font-face {
  font-family: semplicita-bold;
  src: url('public/fonts/semplicitapro/SemplicitaPro-Medium.otf');
}
  :root {
    font-family: semplicita sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    min-width: 375px;
    min-height: 667px;
    --primary-bg: red;
  }
  body {
    margin: 0;
    color: ${(props) => (props.$whiteColor ? 'white' : 'black')};
    background-color: ${(props) => (props.$blackBackground ? 'black' : 'white')};
    min-width: 375px;
    height: 1000px;
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
      { path: baseUrl + 'contact', element: <Contact />, errorElement: <ErrorPage /> },
      { path: baseUrl + 'services', element: <Services />, errorElement: <ErrorPage /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
