
 window.addEventListener('load', () => {
      // Wait 2s, then hide loader and show para
      setTimeout(() => {
        document.querySelector('.pyramid-loader').style.display = "none";
        const para = document.querySelector('.para');
        para.style.display = "block";

        // After another 2s, show popup and blur para
        setTimeout(() => {
          document.getElementById('popup').style.display = 'block';
          para.classList.add('blur');
        }, 5000);
      }, 5000);
    });

    // Close popup and remove blur
    document.getElementById('close-btn').addEventListener('click', () => {
      document.getElementById('popup').style.display = 'none';
      document.querySelector('.para').classList.remove('blur');
    });




























//  }) 
