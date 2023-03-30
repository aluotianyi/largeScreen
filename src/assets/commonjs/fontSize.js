(()=>{
    function bodySizeSet(){
      const baseWidth=1920
      const baseSize=100
      const screenWidth=window.innerWidth
      const devicePixelRatio=window.devicePixelRatio||1
      document.documentElement.style.fontSize= screenWidth/baseWidth*baseSize*devicePixelRatio+'px'
    }
    bodySizeSet()
    window.addEventListener('resize',bodySizeSet)
})()