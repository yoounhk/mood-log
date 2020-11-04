function getTime() {
    let date = new Date();
    let time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    document.querySelector( '#clock').innerHTML=time;
}
setInterval(getTime, 1000);
function newElement(id) {
    let date = new Date();
    let output = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `
    let ul = document.querySelector('#mood-list');
    let li = document.createElement('li');
    switch (id) {
        case 'lt-he':
            output += '차분-활력';
            break;
        case 'ht-he':
            output += '긴장-활력';
            break;
        case 'lt-le':
            output += '차분-피로';
            break;
        case 'ht-le':
            output += '긴장-피로';
            break;
    }
    li.appendChild(document.createTextNode(output));
    ul.appendChild(li);

}
