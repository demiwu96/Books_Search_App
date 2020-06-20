const axios = require('axios');

const apiKey = "AIzaSyASkYHo5XAcf-W4riXNR_4f3eyGWzRojCE";

export default {
    getBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "+intitle: " + query + "&key=" + apiKey);
    }
};