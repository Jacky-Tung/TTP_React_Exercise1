import React, {Component, ReactPropTypes} from "react";

class ContactCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            contactName: 'Elaine Luzung',
            mobileNumber: '555-555-5555',
            workPhone: '123-456-7890',
            email: 'elaine@google.com',
            input: 'DEFAULT VALUE',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    
    componentDidMount(){
        console.log('COMPONENT DID MOUNT');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('COMPONENT UPDATED');
    }

    handleInputChange(event){
        this.setState({
            input: event.target.value
        });
    }

    render(){
        return (
          <div>
            <h1>Contact Name: {this.state.contactName}</h1>
            <h2>Mobile Number: {this.state.mobileNumber}</h2>
            <h2>Work Number: {this.state.workPhone}</h2>
            <h2>Email: {this.state.email}</h2>
            <div>
                <input onChange={this.handleInputChange} defaultValue={this.state.input} />
            </div>
          </div>
        );
    }
}

export default ContactCard

