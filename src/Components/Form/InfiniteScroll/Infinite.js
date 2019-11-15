import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

class Infinite extends Component {

    state = {
        images: [],
        page: 1,
        load: false
    }

    makeRequest = () => {
        const api = "https://api.unsplash.com/search/";
        const key = "d04727baedc1f0d2f2b90c66d70596afd8f2f407ba84a10c3ab6765f4975b7f0";
        this.setState({ load: true });
        axios
            .get(api, {
                params: {
                    query: "photos",
                    page: this.state.page
                },
                headers: {
                    Authorization: `Client-ID ${key}`
                }
            })
            .then(data => {
                if (data.status === 200) {
                    this.setState({
                        images: [
                            ...this.state.images,
                            ...data.data.photos.results
                        ]
                    });
                }
                this.setState({ load: false });
            })
            .catch(err => {
                console.log(err)
            });
    }

    componentDidMount() {
        this.makeRequest();
        window.addEventListener("scroll", this.changePage, false);
    }

    changePage = () => {

        let scrollTop = window.scrollY;
        let bodyHeight = document.body.scrollHeight;
        let windowHeight = window.innerHeight;
        let scrollPercent = (scrollTop) / (bodyHeight - windowHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        if (scrollPercentRounded >= 100) {
            let oldPage = this.state.page;

            this.setState({
                page: oldPage + 1
            });
            this.makeRequest();
            console.log("next");
        }

    }

    ImagesComp = () => {
        return this
            .state
            .images
            .map(img => {

                return <img src={img.urls.small} key={Math.random()} alt="img" />
            });
    }

    render() {
        return (
            <div style={{ maxWidth: "90%", margin: "0 auto" }}>
                <InfiniteScroll
                    pageStart={this.state.page}
                    loadMore={this.changePage}
                    hasMore={true}
                    loader={
                        <div key={0} >
                            Loading ...
                    </div>}
                    useWindow={false}>

                    <div>
                        {this.ImagesComp()}
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}

export default Infinite;
