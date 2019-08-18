import React from 'react';

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
                    <input className="input" id="name" placeholder="Emily Smith" /> 
                    <label className="labels">Full Name</label> 
                    </div>
                    <div className="container">               
                    <input className="input" id="email" placeholder="Emily@gmail.com"/>
                    <label className="labels">Email  </label>
                    </div>
                    <div>
                    <textarea id="info" placeholder="Extra info about Study Abroad program in Greece" />
                    <label className="labels">
                        Info Request:
                    
                    </label>
                    </div>
                    
                    
                    <button><input type="submit" value="Submit" /></button>
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

