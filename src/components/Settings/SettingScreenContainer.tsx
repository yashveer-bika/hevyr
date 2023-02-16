import SettingScreenLeftContainer from "./SettingScreenLeftContainer";
import SettingScreenRightContainer from "./SettingScreenRightContainer";
import "../../styles/Settings.css"
import { useState } from "react";

export default function SettingScreenContainer() {
    const [activePage, setActivePage] = useState("Profile");

    return (
        <div className="setting-screen-container">
            <SettingScreenLeftContainer active={activePage} />
            <SettingScreenRightContainer active={activePage} />
        </div>
    );
}