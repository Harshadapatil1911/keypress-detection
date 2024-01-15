window.addEventListener("keydown",(e)=>{
    document.getElementById('keyname').innerHTML=`the key pressed is <span>${e.key}</span>`;
    document.getElementById('keycode').innerHTML=`keycode : <span>${e.keyCode}</span>`;
    
});



