import React, { Component } from "react";

import ContactForm from "./ContactForm/ContactForm";
import InfiniteScrollList from "./InfiniteScrollList/InfiniteScrollList";




class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false //This is where I am having problems
        }

        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 900 });
    }

    render() {
        const isDesktop = this.state.isDesktop;

        return (
            <div>
                {isDesktop ? <ContactForm /> : <InfiniteScrollList />}
            </div>
        );
    }
}


export default Form;