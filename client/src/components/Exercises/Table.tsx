import * as React from 'react';
// import AddItemSection from './AddItemSection';
// import './App.css';
import List from './List';
import ListData from './ListData.json';
// import MuscleGroups from './MuscleGroups.json';

// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import { Dropdown, DropdownButton } from "react-bootstrap";
import "../../styles/Exercises.css";
// import CreateExerciseButton from './CreateExerciseButton';


export type ListElement = { lift: string; muscle: string; imgPath: string; id: number; }

export interface Props {
  list?: ({ lift: string; muscle: string; imgPath: string; id: number; } )[],
  addable : boolean,
  addToScreen(lift: string) : void;

}

export interface State {
  list: ({ lift: string; muscle: string; imgPath: string; id: number; } )[],
  show: boolean,
  selected: string
}

class Table extends React.Component<Props,State> {
  constructor(props: Props) {
    super(props);
    this.state={
      list: ListData,
      show: false,
      selected: "Select..."
    }

    this.removeItem=this.removeItem.bind(this)
    this.handleClose=this.handleClose.bind(this)
    this.handleShow=this.handleShow.bind(this)
    this.addItem=this.addItem.bind(this)
    this.changeSelectOptionHandler=this.changeSelectOptionHandler.bind(this)


  }

  addItem(e: any) {
    // Prevent button click from submitting form
    e.preventDefault();

    // Create variables for our list, the item to add, and our form
    let list=this.state.list;

    const newItem=document.getElementById("addInput") as HTMLInputElement;
    const form=document.getElementById("addItemForm") as HTMLFormElement;


    // check if duplicate, popup if duplicate
    function getLift(x : ListElement) {
      return x.lift;
    } 

    // If our input has a unique value
    if(newItem.value!=="" && !(this.state.list.map(getLift)).includes(newItem.value))
    {
      // Add the new item to the end of our list array
      list.push( { lift: newItem.value, muscle:"", imgPath:"", id:0});
      // Then we use that to set the state for list
      this.setState({
        list: list
      });
      // Finally, we need to reset the form
      newItem.classList.remove("is-danger");
      form.reset();
    } else
    {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add("is-danger");
    }
  }

  removeItem(item: ({ lift: string; muscle: string; imgPath: string; id: number; } )) {
    // Put our list into an array
    const list=this.state.list.slice();
    // Check to see if item passed in matches item in array
    list.some((value,index) => {
      if(value === item)
      {
        // If item matches, remove it from array
        list.splice(index,1);
        return true;
      } else
      {
        return false;
      }
    });
    // Set state to list
    this.setState({
      list: list
    });
  };

  handleClose() {
    this.setState({list: this.state.list, show: false})
  }

  handleShow() {
    this.setState({list: this.state.list, show: true})
  }

  changeSelectOptionHandler(muscle:string) {
    this.setState({list: this.state.list, show: this.state.show, selected: muscle});
  };


  public render() {
    return (
      <div className="container">
        {/* <section className="section">
          <form className="form" id="addItemForm">
            <input type="text" className="input" id="addInput" placeholder="Something that needs to be done..." />
            <button className="button is-info" onClick={(e) => this.addItem(e)}>
              Add Item
            </button>
          </form>
        </section> */}
        
        {/* The state hook doesn't work here */}
        {/* <AddItemSection addItem={this.addItem}></AddItemSection> */}

        {/* <CreateExerciseButton/> */}

        <section className="section">
          <List items={this.state.list} delete={this.removeItem} addable={this.props.addable} addToScreen={this.props.addToScreen} />
        </section>
        <hr />
        
      </div>
    );
  }
}


export default Table;
