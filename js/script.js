const images = [
    { 'id': '1', 'url':'../image/afro samurai1.jpg' },
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
    { 'id': '13', 'url':'../image/chara-Kaneda.gif' },
    { 'id': '14', 'url':'../image/chara-mina.gif' },
    { 'id': '15', 'url':'../image/chara-veio.gif' },
    { 'id': '16', 'url':'../image/chara_akira.gif' },
    { 'id': '17', 'url':'../image/chara_kiyoko.gif' },
    { 'id': '18', 'url':'../image/chara_masaru.gif' },
    { 'id': '19', 'url':'../image/chara_taisa.gif' },
    { 'id': '20', 'url':'../image/chara_tetsuo.gif' },
    { 'id': '21', 'url':'../image/chara-xxx.png' },
    { 'id': '22', 'url':'../image/evangelion-1.jpg' },
    { 'id': '23', 'url':'../image/evangelio-5.webp' },
    { 'id': '24', 'url':'../image/evangelion-2.jpg' },
    { 'id': '25', 'url':'../image/evangelion-3.webp' },
    { 'id': '26', 'url':'../image/evangelion-4.jpg' },
    { 'id': '27', 'url':'../image/evangelio.anjo.webp' },
    { 'id': '28', 'url':'../image/Evangelion_001_MRG.jpg' },
    { 'id': '29', 'url':'../image/Gang Clown.png' },
    { 'id': '30', 'url':'../image/images.gif' },
    { 'id': '31', 'url':'../image/images.png' },
    { 'id': '32', 'url':'../image/into.jpeg' },
    { 'id': '33', 'url':'../image/inuyasha.jpg' },
    { 'id': '34', 'url':'../image/ippo.png' },
    { 'id': '35', 'url':'../image/Neon-Genesis-Evangelion-Logo.jpg' },
    { 'id': '36', 'url':'../image/neon-genesis-evangelion.webp' },
    { 'id': '37', 'url':'../image/NeonGenesisEvangelion.jpg' },
    { 'id': '38', 'url':'../image/one-pice-time.webp' },
    { 'id': '39', 'url':'../image/one-piece-anime-vector-graphic-260nw-2154809903.webp' },
    { 'id': '40', 'url':'../image/one-piece-logo.jpg' },
    { 'id': '41', 'url':'../image/one-piece-odyssey-tripulacao-gameplay-alabasta.webp' },
    { 'id': '42', 'url':'../image/tenchi.jpg' },
    { 'id': '43', 'url':'../image/syber.jpg' },
    { 'id': '44', 'url':'../image/tenchi.jpg' },
    { 'id': '45', 'url':'../image/tenjhotenge.jpg' },
    { 'id': '46', 'url':'../image/tetisu.jpg' },
    { 'id': '47', 'url':'../image/time-evangelio.jpg' },
    { 'id': '48', 'url':'../image/yuyuhakusho.jpg' },
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