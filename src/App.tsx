import Header from "./common/header/Header";
import Login from "./common/Login/Login";
import Router from "./Router";
import Navbar from "./common/navbar/navbar";
import "./App.css";
import { getUserRole } from "./utils";
import { useRef, useState, useEffect } from "react";
import Footer from "./common/footer/footer";

const App = () => {
  const Userloged = getUserRole();
  const navBarTargetRef: any = useRef(null);
  const [targetWidth, setTargetWidth] = useState(0);

  useEffect(() => {
    if (navBarTargetRef.current) {
      setTargetWidth(navBarTargetRef.current.offsetWidth);
    }
  }, []);
  if (!Userloged) {
    return (
      <div>
        <Login />
      </div>
    );
  }

  return (
    <main>
      <Header />
      <section style={{ marginTop: 80 }} className="screen-container">
        <Navbar ref={navBarTargetRef}></Navbar>
        <div style={{ marginLeft: targetWidth, padding: 20 }}>
          <Router />
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default App;