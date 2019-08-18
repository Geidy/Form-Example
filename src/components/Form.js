import React from 'react';
import '../css/FormStyle.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
                }
        


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Thank you for your request : ' + this.state.value);
        event.preventDefault();
      }


    render() {
        //(this.state.form)
        return (
            <div className="Modal">

                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="modal"> 
                    <label className="name">Full Name </label> 
                    <input type="text" id="name" className="input" value={this.state.name} onChange={this.handleChange} placeholder="Emily Smith" /> 
                    
                    </div>
                    <div className="container"> 
                    <label className="email">Email </label>              
                    <input className="input" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Emily@gmail.com"/>
                   
                    </div>
                    <div>
                    <label className="info">
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

