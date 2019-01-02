new Vue({
    el: '.container',
    data: {
        words: '0'
    },
    methods: {
        userInput: function(){
            
            let collection = (event.target.value).split(" ");

            let filter = [];

            let capture = this;

            collection.forEach(function(word){

                if(word !== "" && word.length >= 2 && Number.isNaN(Number(word)) == true){
                   filter.push(word);
                   capture.words = filter.length;
                } else if(filter.length == 0){
                    capture.words = 0;
                }
                else {
                    filter = filter;
                }
            });
        }
    }
});
