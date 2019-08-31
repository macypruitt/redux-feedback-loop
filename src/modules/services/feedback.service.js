import axios from 'axios';

cont getFeedback = () => {
    return axios ({
        method: 'GET',
        url: '/feedback'
    })
}

export {
    getFeedback
}