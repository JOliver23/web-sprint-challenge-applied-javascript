// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: 
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardSection = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    // .then(response => {
    //     //console.log('axios get request Card.js: ', response)
    //     response.data.articles.forEach(topic => {
    //         topic.forEach(article => {
    //             cardSection.appendChild(articleBuilder(article))
    //         })
    //     })
    // })
    .catch(err => {
        console.log('Yuh done messed up', err)
    })

function articleBuilder(data) {
    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const authorDiv = document.createElement('div')
    const picCont = document.createElement('div')
    const authorPic = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    headLine.classList.add('headline')
    authorDiv.classList.add('author')
    picCont.classList.add('img-container')

    card.appendChild(headLine)
    card.appendChild(authorDiv)
    authorDiv.appendChild(picCont)
    authorDiv.appendChild(authorName)
    picCont.appendChild(authorPic)

    headLine.textContent = data.headline
    authorPic.src = data.authorPhoto
    authorName.textContent = `By: ${data.authorName}`

    return card;
}