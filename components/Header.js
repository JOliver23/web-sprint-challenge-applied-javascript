// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headDiv = document.createElement('div')
    const dateSpan = document.createElement('span')
    const pageTitle = document.createElement('h1')
    const temp = document.createElement('span')

    headDiv.classList.add('header')
    dateSpan.classList.add('date')
    temp.classList.add('temp')

    headDiv.appendChild(dateSpan)
    headDiv.appendChild(pageTitle)
    headDiv.appendChild(temp)

    dateSpan.textContent = 'July 17, 2020'
    pageTitle.textContent = 'Lambda Times'
    temp.textContent = `98\u00B0`

    return headDiv;
}

const header_container = document.querySelector('.header-container')
header_container.appendChild(Header())
