import HomePage from "../components/pages/HomePage";
import DetailsPage from "../components/details/DetailsPage";
import Contact from "../components/pages/Contact";
import NotFoundPage from "../components/pages/NotFoundPage";
import SearchResult from "../features/search/SearchResult";

export const links = [
  {
    link: "/",
    element: <HomePage />,
    title: "Башкы бет",
  },
  {
    link: "/contacts",
    element: <Contact />,
    title: "Байланыш",
  },
  {
    link: "/details/:id",
    element: <DetailsPage />,
  },
  {
    link: "/search/:query",
    element: <SearchResult />,
  },
  {
    link: "*",
    element: <NotFoundPage />,
  },
];
