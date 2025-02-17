import Footer from "./Footer.jsx";
import Nav from "./Nav.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
