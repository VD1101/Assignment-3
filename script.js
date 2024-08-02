// Toggle text on button click
const toggleTextBtn = document.getElementById('toggleTextBtn');
const textToToggle = document.getElementById('textToToggle');

toggleTextBtn.addEventListener('click', () => {
    textToToggle.textContent = textToToggle.textContent === 'This text will be toggled when you click the button.'
        ? 'You toggled the text!'
        : 'This text will be toggled when you click the button.';
});

// Change image on hover
const hoverImage = document.getElementById('hoverImage');
const hoverText = document.getElementById('hoverText');

hoverImage.addEventListener('mouseover', () => {
    hoverImage.src = 'image-2.jpg'; // Ensure you have a different image named example2.jpg
    hoverText.textContent = 'You hovered over the image!';
});

hoverImage.addEventListener('mouseout', () => {
    hoverImage.src = 'example.jpg';
    hoverText.textContent = 'Hover over the image to see it change!';
});

// Change color of list items on click
const colorList = document.getElementById('colorList');
const listItems = colorList.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', () => {
        listItems[i].style.color = listItems[i].style.color === 'red' ? 'green' : 'red';
    });
}

// Display user input from form
const userForm = document.getElementById('userForm');
const formResponse = document.getElementById('formResponse');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userColor = document.getElementById('userColor').value;
    formResponse.textContent = `Your favorite color is ${userColor}!`;
});
