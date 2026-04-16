function signupEvent(btn){
  btn.style.display='none';
  btn.nextElementSibling.innerText="You're signed up";
  btn.nextElementSibling.classList.add('success');
}

function swipe(direction){
  const card = document.getElementById('matchCard');

  card.style.transform = direction==='right'
    ? 'translateX(300px)'
    : 'translateX(-300px)';
  card.style.opacity = '0';

  setTimeout(()=>{
    const names=['Alex','Jamie','Taylor','Jordan','Morgan'];
    const n=names[Math.floor(Math.random()*names.length)];

    card.style.transform='none';
    card.style.opacity='1';

    card.innerHTML = `
      <img src='https://picsum.photos/300?random=${Math.random()}'>
      <h3>${n}, ${20+Math.floor(Math.random()*10)}</h3>
    `;
  },400);
}