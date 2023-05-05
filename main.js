// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeButton = document.getElementsByClassName("like")
for (let i = 0; i < likeButton.length; i++){
  likeButton[i].addEventListener("click", event => {
    mimicServerCall() 
     .then(data =>{

      if (likeButton[i].querySelector('span').className === "like-glyph"){
        //console.log(likeButton[i].querySelector('span').innerHTML)
        likeButton[i].querySelector('span').textContent = FULL_HEART
        likeButton[i].querySelector('span').className = "activated-heart"
      }
      else {
        likeButton[i].querySelector('span').textContent = EMPTY_HEART
        likeButton[i].querySelector('span').className = "like-glyph"
      }
     //.catch(error => console.log(error)))
     
    
     })
})}
    


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
