import Header from "./components/header";
import Fotter from "./components/footer";
import MainContent from "./components/mainContent";
import ToDoList from "./toDoList";

function App() {
  return (
    <div className="App">
    <Header/>
    <MainContent/>
    <ToDoList/>
    <Fotter/>
    
    </div>
  );
}

export default App;
