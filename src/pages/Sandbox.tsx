import LogCell from '../components/Log/LogCell';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json";

function Sandbox() {
    return (
        <div>
            <Navbar pages={ Pages } />

            <LogCell></LogCell>
        </div>
    );
}

export default Sandbox;