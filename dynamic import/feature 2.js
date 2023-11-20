let isGreen= true;
let handle= null;
export function changeBg() {
    if (!handle) {
        handle= setInterval(()=>{
            document.body.style.background= isGreen? 'blue' : 'red';
            isGreen=!isGreen;

        },200);
    }
}

export function stopChangingBG() {
    if (handle) {
    
        clearInterval(handle);
        isGreen=!isGreen;
        document.body.style.background='none';
    }
}