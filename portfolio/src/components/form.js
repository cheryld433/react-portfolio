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
            // action="https://formspree.io/mzbgjddk" method="POST"
            >
            <div className="form-group">
                {/* The htmlFor property sets or returns the value of the for attribute of a label. */}
                {/* The for attribute specifies which form element a label is bound to. */}
                {/* name */}
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control" />
            </div>
            <div>
                {/* email */}
            </div>
            <div>
                {/* message */}
            </div>
            {/* status */}
            </form>
        );
    }

    // submit Form function:

}
export default Form;