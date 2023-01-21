import Case from "./Components/Case";
import Creations from "./Components/Creations";
import Header from "./Components/Header";
import Interactive from "./Components/Interactive";
import CreationsDesktop from "./Components/CreationsDesktop";
import Footer from "./Components/Footer";

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
