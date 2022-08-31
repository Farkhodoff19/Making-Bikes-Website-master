const redBtn = document.querySelector('#red'),
      blueBtn = document.querySelector('#blue'),
      blackBtn = document.querySelector('#black'),
      bike = document.querySelector('#bike');

      redBtn.addEventListener('click', () => {
        bike.style.backgroundImage = 'url(../images/BMW1.png)'
      })
      
      blueBtn.addEventListener('click', () => {
        bike.style.backgroundImage = 'url(../images/BMW2.png)'
      })

      blackBtn.addEventListener('click', () => {
        bike.style.backgroundImage = 'url(../images/BMW3.png)'
      })