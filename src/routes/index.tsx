import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Content from "../pages/Content";
import ContentExpanded from "../pages/ContentExpanded";
import DailyThought from "../pages/DailyThoughts/DailyThought";
import PieceOfMind from "../pages/PieceOfMind";
import Abroad from "../pages/Abroard";
import Passions from "../pages/Passions";
import Byelinguals from "./../pages/Byelinguals";
import HowRU from "../pages/HowRU";
import Books from "../pages/Books";
import BookDetail from "../pages/BookDetail";
import Material from "../pages/Material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/content",
    element: <MainLayout />,
    children: [
      { index: true, element: <Content /> },
      { path: "/content/life-abroad", element: <Abroad /> },
      { path: "/content/content-expanded", element: <ContentExpanded /> },
    ],
  },
  {
    path: "/content/daily-thoughts",
    element: <DailyThought />,
  },
  {
    path: "/content/piece-of-mind",
    element: <PieceOfMind />,
  },
  {
    path: "/content/passions",
    element: <Passions />,
  },
  {
    path: "/content/bye-linguals",
    element: <Byelinguals />,
  },
  {
    path: "/content/are-you-ok",
    element: <HowRU />,
  },
  {
    path: "/content/books",
    element: <Books />,
  },
  {
    path: "/content/books/:id",
    element: <BookDetail />,
  },
  {
    path: "/content/material",
    element: <Material />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
