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
                    <Label for="Email address">Email</Label>
                    <Input
                        {...input}
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="email" />

                </FormGroup>
                <div >{
                    meta.touched
                        ? meta.error
                        : ""
                }</div>
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
                    <Label for="date">Birth Date:
                    </Label>
                    <DatePicker
                        placeholderText={this.todayDate()}
                        selected={input.value}
                        onChange={input.onChange} />
                </FormGroup>
            </div>
        );
    };

    renderTextarea = ({ input, meta }) => {
        return (
            <div>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input {...input} type="textarea" name="text" id="exampleText" />
                </FormGroup>

                <div >{
                    meta.touched
                        ? meta.error
                        : ""
                }</div>
            </div>
        );
    };

    submit = values => {
        const { email, date, textarea } = values;
        alert(`
        email: ${email} t\
        date: ${date} t\
        Message: ${textarea}
        `);
        this.props.reset();
    }

    render() {
        return (
            <Form
                style={{
                    maxWidth: "500px",
                    margin: "0 auto",
                    textAlign: "left",
                    background:"lightcyan",
                    // boxShadow:"1px 1px 1px 1px lightgrey",
                    padding:"5px",
                    borderRadius:"5%"
                }}
                onSubmit={this
                    .props
                    .handleSubmit(this.submit)}>

                <Field name="email" component={this.renderEmail} />
                <Field name="date" component={this.renderDate} />
                <Field name="textarea" component={this.renderTextarea} />

                <Button type="submit" variant="outline-primary">
                    Submit
                </Button>
            </Form>
        );
    }
};
const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "error!";
    }
    if (!values.date) {
        errors.date = "error!";
    }
    if (!values.textarea) {
        errors.textarea = "error!";
    }
    return errors;
};

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch(reset('userForm'))
    }
};

export default reduxForm({ form: "userForm", validate })(
    connect(null, mapDispatchToProps)(
        ContactForm
    )
);