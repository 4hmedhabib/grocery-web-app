import { Fragment } from "react";

// components
import Header from "./components/Layout/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
