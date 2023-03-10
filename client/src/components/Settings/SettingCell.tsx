import { NavLink } from "react-router-dom";
import "../../styles/Settings.css"

export default function SettingCell({img, name, active, onShow} : any) {

    // TODO: give a highlight if active

    return (
        <div onClick={onShow} className={active ? "active-cell" : "non-active-cell"}>
           <img src={img} alt=""/>
           {name}
        </div>
    );
}