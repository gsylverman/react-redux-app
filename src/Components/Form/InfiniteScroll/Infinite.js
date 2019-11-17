import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import InfiniteScroll from 'react-infinite-scroller';
import {requestAction} from "../../../actions/index";
import Image from "./Image/Image";

class Infinite extends Component {

    loadMoreImages() {
        this.props.changePage(this.props.page);
    }

    images = () => {
        return this.props.images.map(img => {
            return (
                <Image src={img.urls.small} key={Math.random()}/>
            );
        });
    }

    render() {
        return (
            <div
                style={{
                    maxWidth: "90%",
                    margin: "0 auto",
                    height: "500px",
                    overflow: "auto"
                }}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMoreImages.bind(this)}
                    hasMore={true}
                    loader={<div key = {0} >Loading ...</div>}
                    useWindow={false}>
                    <div>
                        {this.images()}
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.infinite;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changePage: requestAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Infinite);
