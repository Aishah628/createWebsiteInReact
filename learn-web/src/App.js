import Header from "./components/header";
import Fotter from "./components/footer";
import MainContent from "./components/mainContent";
import ToDoList from "./toDoList";
import Oprations from "./function";

function App() {
  return (
    <div className="App">
    <Header/>
    <MainContent/>
    <ToDoList/>
    <Fotter/>
    <Oprations/>
 

    </div>
  );
}

export default App;
