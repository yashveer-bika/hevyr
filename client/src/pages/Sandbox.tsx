import LogCell from '../components/Log/LogCell';
import Navbar from '../components/NavBar/NavBar';
import APIConnect from '../components/Sandbox/ApiConnect';
import { EditableTable } from '../components/Sandbox/EditableTable';
import Pages from "./Pages.json";

function Sandbox() {
    return (
        <div>
            <Navbar pages={ Pages } />

            <EditableTable></EditableTable>

            {/* <LogCell lift="Front Squat" id="3"></LogCell> */}

            {/* <APIConnect/> */}
        </div>
    );
}

export default Sandbox;