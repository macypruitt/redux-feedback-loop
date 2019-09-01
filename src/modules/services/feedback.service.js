import axios from 'axios';

const getFeedback = () => {
    return axios ({
        method: 'GET',
        url: '/feedback'
    })
}

const postFeedback = () => {
    return axios ({
        method: 'POST',
        url: 'feedback'
    })
}

export {
    getFeedback
}