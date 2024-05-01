const form = document.getElementById('songRequests')

const printList = (event) => {
  let name = document.getElementById('name').value;
  let song = document.getElementById('song').value;
  let artist = document.getElementById('artist').value;
  let list = document.querySelector('.list');
  let p = document.createElement('p');
  let passphrase = document.getElementById('passphrase').value
  p.innerText = `${name} - ${song} by ${artist}`;
  list.appendChild(p);
  console.log(name, song , artist);
  event.preventDefault(); 
  
  if (passphrase === "narwhals777") {
   for (let count = 1; count < 3; count++) {
     let p = document.createElement('p');
     p.innerText = `${name} - ${song} by ${artist}`;
     list.appendChild(p);
     console.log(name, song , artist);
  }
}
}
  


form.addEventListener('submit', printList);
