const REQUEST_URL = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple'

export const fetchQuestion = async () => {
    return fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((data) => data['results'])
    .catch(function(){
        console.log("ERROR");
    });
};