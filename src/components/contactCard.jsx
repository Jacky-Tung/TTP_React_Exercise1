import React, {Component, ReactPropTypes} from "react";

class ContactCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            contactName: 'Elaine Luzung',
            mobileNumber: '555-555-5555',
            workPhone: '123-456-7890',
            email: 'elaine@google.com',
            // input: 'DEFAULT VALUE',
        };

        // this.handleInputChange = this.handleInputChange.bind(this);
    }

    
    // componentDidMount(){
    //     console.log('COMPONENT DID MOUNT');
    // }

    // componentDidUpdate(prevProps, prevState){
    //     console.log('COMPONENT UPDATED');
    // }

    // handleInputChange(event){
    //     this.setState({
    //         input: event.target.value
    //     });
    // }

    render(){
        return (
          <div
            style={{
              padding: "15px",
              alignItems: "center",
              border: "1px solid black",
              height: '40vh'
            }}
          >
            <h1>Contact Name: {this.props.contactName}</h1>
            <h2>Mobile Number: {this.props.mobileNumber}</h2>
            <h2>Work Number: {this.props.workPhone}</h2>
            <h2>Email: {this.props.email}</h2>
            {/* <div>
                <input onChange={this.handleInputChange} defaultValue={this.state.input} />
            </div> */}
          </div>
        );
    }
}

export default ContactCard

