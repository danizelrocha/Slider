// melhorar a parte de inserção de imagens 

const images = [
    { 'id': '1', 'url':'../image/afro-samurai-1.jpg' },
    { 'id': '2', 'url':'../image/afro-samurai-2.jpg' },
    { 'id': '3', 'url':'../image/afro-samurai-3.jpg' },
    { 'id': '4', 'url':'../image/akira-0.jpeg' },
    { 'id': '5', 'url':'../image/Akira-1.jpg' },
    { 'id': '6', 'url':'../image/Akira-2.jpg' },
    { 'id': '7', 'url':'../image/akira-3.jpg' },
    { 'id': '8', 'url':'../image/akira-3.webp' },
    { 'id': '9', 'url':'../image/akira-4.gif' },
    { 'id': '10', 'url':'../image/akira-5.jpg' },
    { 'id': '11', 'url':'../image/akira-6.webp' },
    { 'id': '12', 'url':'../image/akira-7.png' },
    { 'id': '13', 'url':'../image/akira-8.jpg' },
    { 'id': '14', 'url':'../image/chara-Kaneda.gif' },
    { 'id': '15', 'url':'../image/chara-mina.gif' },
    { 'id': '16', 'url':'../image/chara-veio.gif' },
    { 'id': '17', 'url':'../image/chara_akira.gif' },
    { 'id': '18', 'url':'../image/chara_kiyoko.gif' },
    { 'id': '19', 'url':'../image/chara_masaru.gif' },
    { 'id': '20', 'url':'../image/chara_taisa.gif' },
    { 'id': '21', 'url':'../image/chara_tetsuo.gif' },
    { 'id': '22', 'url':'../image/chara-xxx.png' },
    { 'id': '23', 'url':'../image/evangelion-1.jpg' },
    { 'id': '24', 'url':'../image/evangelio-5.webp' },
    { 'id': '25', 'url':'../image/evangelion-2.jpg' },
    { 'id': '26', 'url':'../image/evangelion-3.webp' },
    { 'id': '27', 'url':'../image/evangelion-4.jpg' },
    { 'id': '28', 'url':'../image/evangelion-6.jpg' },
    { 'id': '29', 'url':'../image/evangelion-7.jpg' },
    { 'id': '30', 'url':'../image/evangelion-8.webp' },
    { 'id': '31', 'url':'../image/inuyasha.jpg' },
    { 'id': '32', 'url':'../image/ippo.png' },
    { 'id': '33', 'url':'../image/junji-ito.jpg' },
    { 'id': '34', 'url':'../image/one-piece-0.jpg' },
    { 'id': '35', 'url':'../image/one-pice-2.gif' },
    { 'id': '36', 'url':'../image/one-pice-3.webp' },
    { 'id': '37', 'url':'../image/one-piece-4.webp' },
    { 'id': '38', 'url':'../image/one-piece-5.webp' },
    { 'id': '39', 'url':'../image/one-piece-6.webp' },
    { 'id': '40', 'url':'../image/syber.jpg' },
    { 'id': '41', 'url':'../image/tenchi.jpg' },
    { 'id': '42', 'url':'../image/tenjhotenge.jpg' },
    { 'id': '43', 'url':'../image/yuyuhakusho.jpg' },
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