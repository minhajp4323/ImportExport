import { createButton } from "./widjet.js";

createButton('Feature 1', ()=>{
    alert("Clicked feture 1")
});
createButton('Feature 2', async()=>{
    const obj = await import('./feature 2.js')
    createButton('Start Disco', obj.changeBg);
    createButton('Stop Disco', obj.stopChangingBG);

    
    
   

});
