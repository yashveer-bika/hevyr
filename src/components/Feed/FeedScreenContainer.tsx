import AthleteSearchBox from "./AthleteSearchBox";
import FeedContainer from "./FeedContainer";
import "../../styles/Feed.css"

export default function FeedScreenContainer() {
    return (
        <div className="feed-screen-container">
            <FeedContainer></FeedContainer>
            <AthleteSearchBox></AthleteSearchBox> 
        </div>
            
    );
}