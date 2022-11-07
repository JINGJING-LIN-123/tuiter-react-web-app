import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import Nav from "./nav";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <h1>Welcome to WebDev</h1>
                <Routes>
                    <Route path="/*"
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>
                </Routes>
                <h1>This is the footer</h1>
            </div>
        </BrowserRouter>
    );
}
export default App;