import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { Hero } from "./components/Hero/Hero";
import { Office } from "./components/Office/Office";
import { Matrix } from "./components/Matrix/Matrix";
import { Client } from "./components/Client/Client";
import { Main } from "./components/Main/Main";
function App() {
  return (
    <>
      <Hero />
      <Main />
      <Office />
      <Matrix />
      <Client />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
