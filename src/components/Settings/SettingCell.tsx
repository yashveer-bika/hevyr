import { NavLink } from "react-router-dom";

export default function SettingCell(props : any) {

    return (
        <div>
           <img src={props.img} alt=""/>
           {props.name}
           {props.redirect}
        </div>
    );
}