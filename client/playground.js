//playground.js
drums1 = new Maxim().loadFile("drums1.wav");
drums1.setLooping(true);
playbassline = new Maxim().loadFile("bassline.wav");
playbassline.setLooping(true);
arp = new Maxim().loadFile("arp.wav");
arp.setLooping(true);

bassdrum1 = new Maxim().loadFile("bassdrum1.wav");
bassdrum1.setLooping(true);

cymbal1 = new Maxim().loadFile("cymbal1.wav");
cymbal1.setLooping(true);

hihat2 = new Maxim().loadFile("hihat2.wav");
hihat2.setLooping(true);

snaredrum1 = new Maxim().loadFile("snaredrum1.wav");
snaredrum1.setLooping(true);

vibes = new Maxim().loadFile("aladdin_cant_take_it.wav");
vibes.setLooping(true);


playAll = function() {
  playbassline.play();
  drums1.play();
  arp.play();
  bassdrum1.play();
  cymbal1.play();
  hihat2.play();
  snaredrum1.play();
  vibes.play();
};



$(document).ready(function() {
  setTimeout(function() {
    playAll();
  }, 1000);

});
