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
                if(word !== ""){
                   filter.push(word);
                   capture.words = filter.length;
                }else {
                    filter = filter;
                }
            });
        }
    }
});
