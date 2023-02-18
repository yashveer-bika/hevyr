import SettingCell from "./SettingCell"
import "../../styles/Settings.css"


export default function SettingScreenLeftContainer({activeIndex, onShow}: any) {


    return (
        <div className="setting-screen-left-container">
            {/* Account */}
            <SettingCell name="Profile" img={'/icons8-user-96.png'} active={activeIndex === 0} onShow={() => onShow(0)} ></SettingCell>
            <hr></hr>
            <SettingCell name="Account" img={'/icons8-lock.svg'} active={activeIndex === 1} onShow={() => onShow(1)}  ></SettingCell>
            <hr></hr>
            <SettingCell name="Manage Subscription" img="TODO: find img" active={activeIndex === 2} onShow={() => onShow(2)} ></SettingCell>
            <hr></hr>           
            {/* Preferences */}
            <SettingCell name="Units" img="TODO: find img" active={activeIndex === 3} onShow={() => onShow(3)} ></SettingCell>
            <hr></hr>
            <SettingCell name="Theme" img="TODO: find img" active={activeIndex === 4} onShow={() => onShow(4)} ></SettingCell>
            <hr></hr>
            <SettingCell name="Export Data" img="TODO: find img" active={activeIndex === 5} onShow={() => onShow(5)} ></SettingCell>
            <hr></hr>
        </div>
    );
}