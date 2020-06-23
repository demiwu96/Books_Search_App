const axios = require('axios');

const apiKey = "AIzaSyASkYHo5XAcf-W4riXNR_4f3eyGWzRojCE";

export default {
    searchBooks: function (query) {
       return (axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + query + "&key=" + apiKey));
    },
    getBookList: function(){
        return(axios.get("/api/savedbooks"))
    },
    saveBook: function(data){
        return axios.post("/api/books", data)
    },
    deleteBook: function(id){
        console.log(id)
        return(axios.delete("/api/books/" + id))
    }
};