import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
// import { Container, Row, Col } from 'reactstrap';
import {InputGroup, InputGroupAddon, Input} from 'reactstrap';

class ContactForm extends Component {

    state = {
        email: "",
        age: "",
        send: false
    }

    changeMail = (e) => {

        this.setState({email: e.target.value});
    }

    changeAge = (e) => {

        this.setState({age: e.target.value});

    }

    send = () => {
        if (this.state.email !== "" && this.state.email.includes("@") && this.state.age > 16) {

            this.setState({email: "", age: ""});

        }
        console.log("invalid data");

        this.setState({email: "", age: ""});

    }
    send = () => {
        this.setState({
            send: !this.state.send
        });

    }

    form = () => {
        return (
            <> < InputGroup > <InputGroupAddon addonType="prepend">@</InputGroupAddon>
            <Input
                onChange={(e) => this.changeMail(e)}
                value={this.state.email}
                placeholder="email"/>
        </InputGroup>
        <br/>
        <InputGroup>
            <InputGroupAddon addonType="prepend">Age</InputGroupAddon>
            <Input
                onChange={(e) => this.changeAge(e)}
                value={this.state.age}
                placeholder="your age"
                min={16}
                max={100}
                type="number"
                step="1"/>
            <InputGroupAddon addonType="append"></InputGroupAddon>
        </InputGroup>
        <br/></>
        )
    }

    validData = () => {
        if (this.state.email.length > 0 && this.state.age > 15) {
            return true;
        }
        return false;
    }

    render() {
        return (

            <div
                style={{
                    maxWidth: "500px",
                    paddingTop: "5%",
                    margin: "0 auto"
                }}>
                {
                    this.state.send && this.validData()
                        ? <div>
                                email: {this.state.email}
                                <br/>
                                age: {this.state.age}
                            </div>
                        : this.form()
                }

                <Button
                    onClick={this.send}
                    style={{
                        margin: "1.2em"
                    }}
                    variant="outline-primary">{
                        this.validData()
                            ? "Send"
                            : "Your data is Invalid!"
                    }</Button>

            </div>
        );
    }

};

export default ContactForm;