// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: 
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const tabSection = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        // console.log('axios req', response)
        response.data.topics.forEach(item => {
            tabSection.appendChild(tabBuilder(item))
        })
    })
    .catch(err => {
        console.log('Yuh done messed up', err)
    })

function tabBuilder(topic) {
    const tab = document.createElement('div')

    tab.classList.add('tab')

    tab.textContent = topic

    return tab;
}