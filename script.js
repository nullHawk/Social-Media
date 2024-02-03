postButon = document.getElementByClass('post')
textArea_post = document.getElementByClass('tweetbox')
my_tweets = []
postButon.addEventListner('click',()=>{
    my_tweets +={
        'likes': 0,
        'text': textArea_post.text,
        'username': 'Suryansh Shakya',
        'userid' : '@nullhawk',
        'comments' : [],
    }
})

function render_tweets(){
    let divs = Array.from(document.getElementsByTagName("div"));
    for (let div of divs) {
        div.className = "";
    }
}