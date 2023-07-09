import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ErrorPage } from "ErrorPage";
import { createGlobalStyle } from 'styled-components';
import { Home, Blog, About, Specialties, Fees, Contact, Services } from 'components/pages';
//constants
import { baseUrl } from "project-constants";

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; $blackBackground?: boolean }>`
  @font-face {
    font-family: semplicita;
    src: url('/fonts/semplicitapro/SemplicitaPro-Light.otf');
  }
  @font-face {
    font-family: semplicita-med;
    src: url('/fonts/semplicitapro/SemplicitaPro-Medium.otf');
  }
  @font-face {
    font-family: semplicita-bold;
    src: url('/fonts/semplicitapro/SemplicitaPro-Bold.otf');
  }
  @font-face {
    font-family: cormorant-infant-semibold;
    src: url('/Cormorant_Infant/CormorantInfant-SemiBold.ttf');
  }
  @font-face {
    font-family: cormorant-infant-italic;
    src: url('/Cormorant_Infant/CormorantInfant-Italic.ttf');
  }
  @font-face {
    font-family: cormorant-infant-bold;
    src: url('/Cormorant_Infant/CormorantInfant-Bold.ttf');
  }
  @font-face {
    font-family: cormorant-infant-reg;
    src: url('/Cormorant_Infant/CormorantInfant-Regular.ttf');
  }
  :root {
    font-family: semplicita, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    min-width: 375px;
    max-width: 1440px;
    min-height: 667px;
    --primary-bg: red;
  }
  body {
    margin: 0;
    color: ${(props) => (props.$whiteColor ? 'white' : 'black')};
    background-color: ${(props) => (props.$blackBackground ? 'black' : 'white')};
    min-width: 375px;
  }
  p {
    font-family: semplicita, sans-serif;
  }
  #root {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  nav {
    flex-basis: 100%;
  }
  main {
    flex-basis: 90%;
    padding-bottom: 40px;
  }
  .hero-image-container {
    flex-basis: 100%;
  }
`;
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
