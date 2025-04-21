document.addEventListener('DOMContentLoaded', function () {
  // Inicializáljuk a highlight.js-t
  hljs.configure({
    languages: ['javascript'],
    ignoreUnescapedHTML: true,
  });

  // Alkalmazzuk a kiemelést
  document.querySelectorAll('pre code').forEach(function (block) {
    hljs.highlightElement(block);
  });
});

const gyümölcsök = ['alma', 'körte', 'szilva', 'barack', 'narancs'];

//Megkapjuk a tömb hosszát
console.log(gyümölcsök.length);

//feltétellel
if (gyümölcsök.length > 0) {
  console.log(`A tömb nem üres. A tömbnek ${gyümölcsök.length} eleme van.`);
} else {
  console.log('A tömb üres.');
}
