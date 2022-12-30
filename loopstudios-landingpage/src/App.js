import Case from "./Components/Case";
import Creations from "./Components/Creations";
import Header from "./Components/Header";
import Interactive from "./Components/Interactive";
import Footer from "./Components/Footer";
import CreationsDesktop from "./Components/CreationsDesktop";

const App = () => {
  return (
    <>
      <Header />
      <Case />
      <Interactive />
      <Creations />
      <CreationsDesktop/>
      <Footer />
    </>
  );
};

export default App;
