export function createButton(name, fn) {
    const btn= document.createElement('button');
    btn.innerHTML = name;
    btn.onclick = fn;
    btn.style.margin = '5px';
    btn.style.color= 'blue'
    document.body.appendChild(btn);
}