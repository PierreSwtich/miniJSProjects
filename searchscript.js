const search = document.querySelector('.search');
const li = document.querySelectorAll('li');
const span = document.querySelector('ul span');

function checkAllLiElements() {
  
    let allHidden = true;
  
    li.forEach(li => {
      if (li.style.display !== 'none') {
        allHidden = false;
      }
    });
  
    if (allHidden) {
      span.style.display = 'block';
    } else {
      span.style.display = 'none';
    }
  }

const searchEngine = e => {
    const text = e.target.value.toLowerCase();
    console.log(`Zmienna text: ${text}`);

    let allLiNone;

    li.forEach(el => {
        if (el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }

    
    checkAllLiElements();
    });
}

search.addEventListener('keyup', searchEngine);