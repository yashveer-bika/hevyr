// // TODO: convert into function
// // const SearchBar: React.FC<{ data: DataType[] }> = ({ data, }): JSX.Element => {

// function SearchBar() {
//   return (
//     <div className="searchBar">
//       THIS IS SEARCH BAR SLOT
//     </div>
//   );
// };

// export default SearchBar;


import { useState } from "react";
import TextField from "@mui/material/TextField";
import ExerciseList from "./ExerciseList";
import "../../styles/SearchBar.css";


function SearchBar() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e : any) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <ExerciseList input={inputText} />
    </div>
  );
}

export default SearchBar;