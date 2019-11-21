import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { Field, reduxForm } from "redux-form";
import { reset } from 'redux-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input, Form, FormGroup, Label } from 'reactstrap';
import { connect } from "react-redux";

class ContactForm extends Component {

    renderEmail = ({ input, meta }) => {

        return (
            <div>
                <FormGroup>
                    <Label htmlFor="Email address">Email:</Label>
                    <Input
                        {...input}
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="email" />
                    <div style={{ color: "red" }}>
                        {meta.touched ? meta.error : ""}
                    </div>
                </FormGroup>
            </div>
        );
    };

    todayDate = () => {
        const date = new Date();
        const day = date.getDate();
        const year = date.getFullYear();
        const month = date.getMonth();
        return `${month}/${day}/${year}`;
    };

    renderDate = ({ input, meta }) => {
        return (
            <div>
                <FormGroup >
                    <Label htmlFor="date">Birth Date:
                    </Label>
                    <DatePicker
                        placeholderText={this.todayDate()}
                        selected={input.value}
                        onChange={input.onChange} />
                    <div style={{ color: "red" }}>
                        {meta.touched ? meta.error : ""}
                    </div>
                </FormGroup>
            </div>
        );
    };

    renderTextarea = ({ input, meta }) => {
        return (
            <div>
                <FormGroup>
                    <Label htmlFor="exampleText">Message:
                    </Label>
                    <Input
                        {...input}
                        type="textarea"
                        placeholder="message"
                        name="text"
                        id="exampleText" />
                    <div style={{ color: "red" }}>
                        {meta.touched ? meta.error : ""}
                    </div>
                </FormGroup>
            </div>
        );
    };

    submit = values => {
        const { email, date, textarea } = values;

        alert(`email: ${email} date: ${date} Message: ${textarea}`);
        this.props.reset();
    }

    render() {
        return (
            <div style={{ fontSize: "1.2rem", fontWeight: "bold", padding: "5px", textAlign: "center", background: "lightcyan", border: "1px solid #DBDBDB", borderRadius: "5px", margin: "10% auto", maxWidth: "550px" }}>Form
            <Form
                    style={{
                        fontWeight: "normal",
                        maxWidth: "500px",
                        margin: "20px auto",
                        textAlign: "left",
                        // boxShadow:"1px 1px 1px 1px lightgrey",
                        padding: "5px",
                        borderRadius: "5%"
                    }}
                    onSubmit={this.props.handleSubmit(this.submit)}>

                    <Field name="email" component={this.renderEmail} />
                    <Field name="date" component={this.renderDate} />
                    <Field name="textarea" component={this.renderTextarea} />

                    <Button className="btn-lg btn-block" type="submit" variant="outline-primary">
                        Submit
                </Button>
                </Form>
            </div>
        );
    }
};
const validate = (values) => {

    const errors = {};

    if (!values.email) {
        errors.email = "Please enter a valid email!";
    }
    if (!values.date) {
        errors.date = "Please enter your birthday!";
    }
    if (values.date) {
        const age = new Date().getFullYear() - values.date.getFullYear();
        if (age < 16) {
            errors.date = 'Hmm, you seem a bit young...'
        }
    }

    if (!values.textarea) {
        errors.textarea = "Please leave a message!";
    } else if (values.textarea.length < 15) {
        errors.textarea = "Your message is too short!";
    } else if (values.textarea.length > 255) {
        errors.textarea = "Your message is too long!";
    }

    return errors;
};

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch(reset("userForm"))
    }
};

export default reduxForm({ form: "userForm", validate })(
    connect(null, mapDispatchToProps)(
        ContactForm
    )
);
