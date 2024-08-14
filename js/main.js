var quotes = [`<h2>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</h2>
<p> ~ Bernard M. Baruch ~ </p>`, `<h2>“A room without books is like a body without a soul.”</h2><p> ~ Marcus Tullius Cicero ~</p>`,
`<h2>“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”</h2>
<p> ~ Ralph Waldo Emerson ~ </p>`, `<h2>“ You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one ”</h2>
<p>~ John Lennon ~</p> `, `<h2>“If you tell the truth, you don't have to remember anything.”</h2>
<p>~ Mark Twain ~</p>`];
var oldRandom;
function generate() {
    var random = Math.floor(Math.random() * quotes.length);
   while(random == oldRandom) {
        random = Math.floor(Math.random() * quotes.length);
    }
    oldRandom = random;
    console.log(quotes[random]);
    document.getElementById("display").innerHTML = `${quotes[random]}`;
}

