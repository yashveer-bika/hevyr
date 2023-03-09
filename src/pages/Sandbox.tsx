import LogCell from '../components/Log/LogCell';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json";

function Sandbox() {
    return (
        <div>
            <Navbar pages={ Pages } />

            <LogCell lift="Front Squat" id="3"></LogCell>
        </div>
    );
}

export default Sandbox;