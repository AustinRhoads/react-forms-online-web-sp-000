import React from 'react' 
import Form from './Form.js' 
import DisplayData from './DisplayData.js'

export default class ParentComponent extends React.Component{

    state = {
        firstName: "",
        lastName: "",
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    render(){
        return (
            <div>
            <Form formData={this.state} handleFirstNameChange={this.handleFirstNameChange} handleLastNameChange={this.handleLastNameChange} />
           <DisplayData formData={this.state} />
           </div> 
        )
    }

}