

window.onload = function () {
  document.getElementById('user').innerHTML = 'Jahnavesh';
};

document.getElementById('btn-click').onclick = function () {
  this.style.backgroundColor = 'red'; 
};

function makeSentence() {
  const noun = document.getElementById('noun').value;
  const verb = document.getElementById('verb').value;
  const adverb = document.getElementById('adverb').value;
  const statementDiv = document.getElementById('statement');
  statementDiv.textContent = `${noun} ${verb} ${adverb}`;
}

document.getElementById('build-button').addEventListener('click', makeSentence);


document.getElementById('grandparent').addEventListener('click', function () {
  console.log('Grandparent clicked');
});

document.getElementById('parent').addEventListener('click', function () {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', function () {
  console.log('Child clicked');
});


document.getElementById('grandparent').addEventListener(
  'click',
  function () {
    console.log('Grandparent clicked');
  },
  true 
);

document.getElementById('parent').addEventListener(
  'click',
  function () {
    console.log('Parent clicked');
  },
  true 
);

document.getElementById('child').addEventListener(
  'click',
  function () {
    console.log('Child clicked');
  },
  true 
);

document.getElementById('category').addEventListener('click', function (event) {
  if (event.target.id === 'blazers') {
    console.log('blazers');
  }
});

