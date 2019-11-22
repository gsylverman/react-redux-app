import React, { Component } from "react";
import { connect } from "react-redux";
import { timeAction } from "../../actions/index.js";
import { bindActionCreators } from "redux";

class Home extends Component {

    componentDidMount() {
        this.props.changeTime(this.timeFormater());
        this.time = setInterval(() => {
            this.props.changeTime(this.timeFormater());
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.time);
        this.props.changeTime(null);
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
            <div>
                <div style={{ fontSize: "1.4em", background: "lightgrey" }}>
                    {this.props.clock.ora}
                </div>
            </div>
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