$(document).ready(function(){

    // var button = $('<button>');
    // $(button).on("click", function(event){
    //     var userSearch = 
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=dogs&headline=5&api-key=iRMjUibYPthhJ0QOVE3cwIjIzblhjGYL";

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        var results = response.response.docs

        console.log(results);

    })
});