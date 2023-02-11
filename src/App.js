import "./assets/styles/global.scss";
import Home from "./components/Home";
import Container from "./components/Container";
import PetsList from "./components/PetsList";

function App() {
  return (
    <>
      <Container>
        <Home />
        <PetsList />
      </Container>
    </>
  );
}

export default App;
