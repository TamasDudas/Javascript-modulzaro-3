// Highlight.js inicializálása
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});

//-----Length-----
const gyümölcsök = ['alma', 'körte', 'szilva', 'barack', 'narancs'];

//Megkapjuk a tömb hosszát
console.log(gyümölcsök.length);

//feltétellel
if (gyümölcsök.length > 0) {
  console.log(`A tömb nem üres. A tömbnek ${gyümölcsök.length} eleme van.`);
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
