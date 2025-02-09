import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";
import LandingLayout from "./layouts/LandingLayout";
import AuthLayout from "./layouts/AuthLayout/Index";
import { Home, About, Services, Contact, FAQ, SignUp, Login } from "./routes";

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <RouterProvider
      router={createBrowserRouter([
        //Landing Routes
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "/",
          element: <LandingLayout />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },
            {
              path: "/contact",
              element: <Contact />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/faq",
              element: <FAQ />,
            },
            {
              path: "/services",
              element: <Services />,
            },
          ],
        },
        // Auth routes
        {
          path: "auth",
          element: token ? <Navigate to="/home" /> : <AuthLayout />,
          children: [
            {
              path: "sign-up",
              element: <SignUp />,
            },
            {
              path: "login",
              element: <Login />,
            },
          ],
        },

        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ])}
    />
  );
}

export default App;
