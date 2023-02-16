const images = [
    { 'id': '1', 'url':'../image/akira.jpg' },
    { 'id': '2', 'url':'../image/chrono.jpg' },
    { 'id': '3', 'url':'../image/inuyasha.jpg' },
    { 'id': '4', 'url':'../image/ippo.png' },
    { 'id': '5', 'url':'../image/junji-ito.jpg' },
    { 'id': '6', 'url':'../image/syber.jpg' },
    { 'id': '7', 'url':'../image/tenchi.jpg' },
    { 'id': '8', 'url':'../image/afro samurai.jpg' },
    { 'id': '9', 'url':'../image/afro-samurai-2.jpg' },
    { 'id': '10', 'url':'../image/afro-samurai-capa-vigilia-nerd.jpg' },
    { 'id': '11', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '12', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '13', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '14', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '15', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '16', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '17', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '18', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '19', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '20', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '21', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '22', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '23', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '24', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '25', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '26', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '27', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '28', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '29', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '30', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '31', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '32', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '33', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '34', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '35', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '36', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '37', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '38', 'url':'../image/yuyuhakusho.jpg' },
    { 'id': '39', 'url':'../image/yuyuhakusho.jpg' },
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