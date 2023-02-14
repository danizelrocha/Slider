const images = [
    { 'id': '1', 'url':'../image/akira.jpg' },
    { 'id': '2', 'url':'../image/chrono.jpg' },
    { 'id': '3', 'url':'../image/inuyasha.jpg' },
    { 'id': '4', 'url':'../image/ippo.png' },
    { 'id': '5', 'url':'../image/junji-ito.jpg' },
    { 'id': '6', 'url':'../image/syber.jpg' },
    { 'id': '7', 'url':'../image/tenchi.jpg' },
    { 'id': '8', 'url':'../image/tenjhotenge.jpg' },
    { 'id': '9', 'url':'../image/yuyuhakusho.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);