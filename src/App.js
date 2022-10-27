// import "./scss/_button.scss"
// import "./scss/_reset.scss"
// import "./scss/_variable.scss"
import "./App.scss";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import datA from "./data";
function App() {
  return (
    <div>
      <Header />
      <Card dataa={datA} />
      
    </div>
  );
}

export default App;
