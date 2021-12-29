var btn = document.getElementById('btn-menu');
var container = document.querySelector('.container');
btn.addEventListener('click', function() {
    
  if(container.style.display === 'inline-block') {
      container.style.display = 'none';
  } else {
      container.style.display = 'inline-block';
  }
});