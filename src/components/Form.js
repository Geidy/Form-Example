import React from 'react';
import '../css/FormStyle.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value});
        console.log(event.target)    //always console.log so you can see the changes
    }

    clearForm() {
        console.log(this.state)
        this.setState({ name: '', email: '', college: '', info: '' })

    }

    handleSubmit(event) {
        alert('Thank you for your request : ' + this.state.name + '; We will send you a response asap at your prefered email address: ' 
        + this.state.email + '; And  we will request more info from your current college: ' 
        + this.state.college );
        event.preventDefault();
        this.clearForm();
    }

   


    render() {
        //(this.state.form)
        return (
            <div className="Modal">

                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="modal">
                        <label className="labels">Full Name </label>
                        <input type="input" id="name" className="input" value={this.state.name} onChange={this.handleChange} placeholder="Emily Smith" />

                    </div>
                    <div className="container">
                        <label className="labels">Prefered Email </label>
                        <input className="input" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Emily@gmail.com" />

                    </div>
                    <div className="container">
                        <label className="labels">College </label>
                        <input className="input" id="college" value={this.state.college} onChange={this.handleChange} placeholder="Lehman College" />

                    </div>
                    <div>
                        <label className="labels">
                            Info Request:
                    </label>
                        <textarea className="textarea" id="info" value={this.state.info} onChange={this.handleChange} placeholder="Info: Study Abroad in Greece" />

                    </div>


                    <button className="btn" type="submit" value="Submit">Submit</button>
                </form>




            </div>



            /*return(
                    <button onClick={() => this.setState({ form: true })}>
                        Form
                     </button>
                )*/
        );
    }
}


export default Form;

/*const domContainer = document.querySelector('#form_button_container');
ReactDOM.render(e(FormButton), domContainer); */

//export default FormButton;

