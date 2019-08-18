import React from 'react';
import '../css/FormStyle.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        


        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        //(this.state.form)
        return (
            <div>

                <form className="form">
                    <div className="container">
                    <label className="labels">Full Name</label> 
                    <input className="input" id="name" placeholder="Emily Smith" /> 
                    
                    </div>
                    <div className="container"> 
                    <label className="labels">Email  </label>              
                    <input className="input" id="email" placeholder="Emily@gmail.com"/>
                   
                    </div>
                    <div>
                    <label className="labels">
                        Info Request:                    
                    </label>
                    <textarea id="info" placeholder="Extra info about Study Abroad program in Greece" />
                    
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

