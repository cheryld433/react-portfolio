import React, { Component } from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form 
            onSubmit={this.submitForm}
            // look into formspree = user to send email to me without knowing my email address
            action="https://formspree.io/mzbgjddk" method="POST"
            >
            <div className="form-group">
                {/* The htmlFor property sets or returns the value of the for attribute of a label. */}
                {/* The for attribute specifies which form element a label is bound to. */}
                {/* name */}
                <label htmlFor="name" className="label">Name</label>
                <input type="text" name="name" className="form-control" />
            </div>
            <div className="form-group">
                {/* email */}
                <label htmlFor="inputEmail" className="label">Email Address</label>
                <input type="email" name="email" className="form-control"></input>
            </div>
            <div className="form-group">
                {/* message */}
                <label htmlFor="message" className="label">Message</label>
                <textarea type="test" name="message"  rows="5" className="form-control" ></textarea>
            </div>
            {/* status */}
            {status === "Success" ? <p>Your email was sent.</p> : <button className="submitBtn">Submit</button>}
            {status === "Error" && <p>There was an error.</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();

        const form= ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application.json");
        xhr.onreadystatechange =() => {
            if(xhr.readyState !== XMLHttpRequest.DONE) return;
            if(xhr.status === 200) {
                form.reset();
                this.setState({status: "Success"});
            } else {
                this.setState({ status: "Error"});
            }
        };
        xhr.send(data);
    }



    // submit Form function: (possible API call to formspree)

// The XMLHttpRequest object is a developers dream, because you can:
   // Update a web page without reloading the page
   // Request data from a server - after the page has loaded
   // Receive data from a server  - after the page has loaded
   // Send data to a server - in the background

//    (ev)is the actual click event itself which would tell you if the user clicked 
// with the right mouse button or left mouse button...etc.

// https://medium.com/@catquarks/making-ajax-requests-with-react-48be0285d396
}
export default Form;