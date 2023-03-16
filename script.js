const body = document.querySelector('body');
const list = document.querySelector('.list');
list.innerHTML = '';

const getImg = () => {
  fetch('https://dog.ceo/api/breeds/image/random/12')
    .then((responce) => responce.json())
    .then((data) => renderDogs(data.message))
    .catch((error) => alert(error));
};

const renderDogs = (data) => {
  for (const image of data) {
    const img = document.createElement('img');
    const li = document.createElement('li');
    img.src = image;
    li.appendChild(img);
    list.appendChild(li);
  }
  body.appendChild(list);
};

getImg();
