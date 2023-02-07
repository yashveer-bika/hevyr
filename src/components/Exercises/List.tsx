import * as React from 'react';
// import './App.css';
import ExerciseRow from './ExerciseRow';


export interface ListProps {
  items: ({ lift: string; muscle: string; imgPath: string; id: number; } )[]
  delete(item: ({ lift: string; muscle: string; imgPath: string; id: number; } )): void
}

export interface ListState {
  filtered: ({ lift: string; muscle: string; imgPath: string; id: number; })[]
}

class List extends React.Component<ListProps,ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state={
      filtered: []
    }
    this.handleChange=this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.items
    })
  }

  componentWillReceiveProps(nextProps: ListProps) {
    this.setState({
      filtered: nextProps.items
    })
  }

  handleChange(e: any) {
    let currentList=[];
    let newList=[];
    if(e.target.value!=="")
    {
      currentList=this.props.items
      newList=currentList.filter(item => {
        const lc1=item.lift.toLowerCase();
        const lc2=item.muscle.toLowerCase();
        const filter=e.target.value.toLowerCase();
        return lc1.includes(filter) || lc2.includes(filter)
      })
    } else
    {
      newList=this.props.items
    }
    this.setState({
      filtered: newList
    })
  }

  render() {
    console.log(this.props.items)
    return (
        <div>
          <input type="text" className="input" placeholder="Search..." onChange={this.handleChange} />
          <ul>
            {this.state.filtered.map((item: ({ lift: string; muscle: string; imgPath: string; id: number; } )) => (
              <li key={item.lift}>
                {/* {item.lift} &nbsp; */}
                <ExerciseRow props={item}></ExerciseRow>
                {/* <span className="" onClick={() => this.props.delete(item)} >x</span> */}
              </li>
            ))}
          </ul>
        </div>
      )
  
  }
}

export default List;
