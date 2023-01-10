import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom";


const App = () => {
    return (
        <>
            <Navbar/>
            <div className="p-3">
                <Outlet/>
            </div>
        </>
    )
}

export default App;
