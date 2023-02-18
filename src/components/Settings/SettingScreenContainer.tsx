import SettingScreenLeftContainer from "./SettingScreenLeftContainer";
import SettingScreenRightContainer from "./SettingScreenRightContainer";
import "../../styles/Settings.css"
import { useState } from "react";

export default function SettingScreenContainer() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="setting-screen-container">
            <SettingScreenLeftContainer activeIndex={activeIndex} onShow={(i : number)=>setActiveIndex(i)} />
            <SettingScreenRightContainer activeIndex={activeIndex} />
        </div>
    );
}