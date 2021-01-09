import Header from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom";


function App(props) {
    return (
        <Router>
            <div className="App">
                <Header state={props.state} dispatch={props.dispatch} store={props.store}/>
            </div>
        </Router>
    );
}

export default App;
