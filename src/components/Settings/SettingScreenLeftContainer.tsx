import SettingCell from "./SettingCell"
import "../../styles/Settings.css"


export default function SettingScreenLeftContainer(props: any) {


    return (
        <div className="setting-screen-left-container">
            {/* Account */}
            <SettingCell name="Profile" redirect="profile" img={'/icons8-user-96.png'} active={props.active === "Profile"} ></SettingCell>
            <hr></hr>
            <SettingCell name="Account" redirect="TODO: linking to Account right container" img={'/icons8-lock.svg'} active={props.active === "Account"} ></SettingCell>
            <hr></hr>
            <SettingCell name="Manage Subscription" redirect="TODO: linking to Manage Subscription right container" img="TODO: find img" active={props.active === "Subscription"} ></SettingCell>
            <hr></hr>           
            {/* Preferences */}
            <SettingCell name="Units" redirect="TODO: linking to Units right container" img="TODO: find img" active={props.active === "Units"} ></SettingCell>
            <hr></hr>
            <SettingCell name="Theme" redirect="TODO: linking to Theme right container" img="TODO: find img" active={props.active === "Theme"} ></SettingCell>
            <hr></hr>
            <SettingCell name="Export Data" redirect="TODO: linking to Export Data right container" img="TODO: find img" active={props.active === "Data"} ></SettingCell>
            <hr></hr>
        </div>
    );
}