(()=>{
    let lock=void 0;
    function bodySizeSet(){
      if(!lock){
       lock=window.setTimeout(()=>{
          const baseWidth=1920
          const baseSize=100
          const screenWidth=window.innerWidth
          const devicePixelRatio=window.devicePixelRatio||1
          document.documentElement.style.fontSize= screenWidth/baseWidth*baseSize*devicePixelRatio+'px'
        },300)
      }else{
        window.clearTimeout(lock)
        lock=void 0;
        bodySizeSet() 
      }
    }
    bodySizeSet()
    window.addEventListener('resize',bodySizeSet)
})()