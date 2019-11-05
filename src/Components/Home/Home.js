import React, { Component } from "react";
import { connect } from "react-redux";
import { timeAction } from "../../actions/index.js";
import { bindActionCreators } from "redux";



class Home extends Component {

    componentDidMount() {
  
        setInterval(() => {
            this.props.changeTime(this.timeFormater())
        }, 1000);
        
  

    }

    timeFormater = () => {
        const date = new Date();
        let h = date.getHours(); // 0 - 23
        let m = date.getMinutes(); // 0 - 59
        let s = date.getSeconds(); // 0 - 59
        let session = "AM";

        if (h === 0) {
            h = 12;
        }

        if (h > 12) {
            h = h - 12;
            session = "PM";
        }

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        let time = h + ":" + m + ":" + s + " " + session;
        return time;
    }

    render() {
        return (
            <div style={{fontSize:"1.2em"}}>{this.props.clock.ora}</div>
        );
    }

};


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeTime: timeAction
    }, dispatch);


}




export default connect(mapStateToProps, mapDispatchToProps)(Home);