import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Products from "./Components/Products";
import Login from "./Components/Login";

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />
  },
  {
    path: '/about',
    exact: false,
    component: () => <About />
  },
  {
    path: '/contact',
    exact: false,
    component: () => <Contact />
  },
  {
    path: '/products',
    exact: false,
    component: ({ match, location }) => <Products match={match} location={location} />
  },
  {
    path: '/login',
    exact: false,
    component: ({ location }) => <Login location={location} />
  },
  {
    path: '',
    exact: false,
    component: () => <NotFound />
  },

]

export default routes;