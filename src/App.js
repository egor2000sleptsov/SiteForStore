import {BrowserRouter as Router} from "react-router-dom";
import HeaderContainer from "./components/HeaderContainer";


function App(props) {
    return (
        <Router>
            <div className="App">
                <HeaderContainer />
            </div>
        </Router>
    );
}

export default App;
