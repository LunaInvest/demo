$( document ).ready(function() {

    function chat(ele, array) {   
        if (array.length >= 1){
            bubble = array.shift();
            if (bubble.bot == true) {
                var html = `<div class="bubble-left loading"></div>`;
            } else {
                var html = `<div class="bubble-right loading"></div>`;
            }
            $(ele).append(html);
            setTimeout(function(){
                $(".bubble-left, .bubble-right").removeClass("loading")
                $(".bubble-left, .bubble-right").last().text(bubble.text)
                chat(ele, array)
            }, 1500+1000*Math.random());
        } else {
            return;
        }
    }

    testarray = [{bot: true, text: "test this crap bot"}, {bot: true, text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et acc"}, {bot: false, text: "test this crap bot"}]
    
    chat("#chatbox", testarray);

});