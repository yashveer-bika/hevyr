import { Component } from "react";


// export interface IProps {

// }

export default class APIConnect extends Component<{}, { apiResponse: string }> {
    constructor(props : any) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="test-api-connect-box">
                <h1> {this.state.apiResponse} </h1>
            </div>
        );
    }
}