import axios from 'axios';

export const timeAction = (p) => {
    return {
        type: "UPDATE",
        payload: p
    };
};

const updateImages = (images) => {
    return {
        type: "LOAD",
        payload: images
    };
};

export const requestAction = () => {
    const pageNumbergenerator = () => Math.floor(Math.random() * 50);
    const api = "https://api.unsplash.com/search/";
    const key = "d04727baedc1f0d2f2b90c66d70596afd8f2f407ba84a10c3ab6765f4975b7f0";

    return dispatch => {
        axios
            .get(api, {
                params: {
                    query: "photos",
                    page: pageNumbergenerator()
                },
                headers: {
                    Authorization: `Client-ID ${key}`
                }
            })
            .then(data => {
                if (data.status === 200) {
                    const images = [...data.data.photos.results];
                    dispatch(updateImages(images.slice(0, 3)));
                }
            })
            .catch(err => {
                console.log(err);
            });
    };
};
