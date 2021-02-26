// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap from 'bootstrap'

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Trangle from "./components/trangle"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/treangle" component={Trangle} />
      </div>
    </Router>
  );
}

export default App;
