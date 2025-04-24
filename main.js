// Highlight.js inicializálása
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});
// Menü toggle funkció
const menuToggle = document.querySelector('#menu-toggle');
const sidebar = document.querySelector('#sidebar');

menuToggle.addEventListener('click', function () {
  sidebar.classList.toggle('hidden');
});

// Menü linkek eseménykezelője minden eszközön
const menuLinks = document.querySelectorAll('#sidebar a');
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Mobilon a menü bezárása
    if (window.innerWidth < 768) {
      sidebar.classList.add('hidden');
    }

    // Minden esetben sima görgetés a célhoz
    e.preventDefault();
    const targetId = link.getAttribute('data-target');

    const targetElement = document.querySelector(`#${targetId}`);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60, // Korrigálás a fejléc miatt
        behavior: 'smooth',
      });
    }
  });
});

//-----Length-----
const fruits = ['alma', 'körte', 'szilva', 'barack', 'narancs'];

//Megkapjuk a tömb hosszát
console.log(fruits.length);

//feltétellel
if (fruits.length > 0) {
  console.log(`A tömb nem üres. A tömbnek ${fruits.length} eleme van.`);
} else {
  console.log('A tömb üres.');
}

//----Map----
//posts
const posts = [
  {
    id: 1,
    title: 'Javascript alapjai',
    body: 'Pellentesque scelerisque, est id vehicula bibendum, est tellus rutrum justo, et dignissim libero sapien et erat.',
  },
  {
    id: 2,
    title: 'PHP keretrendszerek',
    body: 'Vestibulum interdum venenatis nunc et sodales. Nunc et urna non ipsum tempor faucibus. Pellentesque nec neque luctus, vulputate lorem eget, aliquam nisl. Phasellus aliquet pharetra finibus.',
  },
];

posts.map((post) =>
  console.log('id:', post.id, 'title:', post.title, 'body:', post.body)
);

const selectedPost = posts.filter((post) => post.id !== 1);
console.log(selectedPost);

//---Push----
const names = ['Attila', 'Gábor', 'Éva'];
names.push('Sándor', 'Méátyás');
console.log(names);

const allName = names.push('Albert');
console.log('allName:', allName);

//---Join----
const urlData = ['api', 'post', 5];
const url = urlData.join('/');
console.log('url:', url);
