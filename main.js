//This code is for everyone. Could go in common.js
MusicMachine = new Mongo.Collection("musicMachine");


if (Meteor.isClient) {

  Meteor.startup(function() {

  });


  Template.playground.helpers({


    "playbassline": function() {
      $('.js-playbassline-speed').slider();
      $('.js-playbassline-volume').slider();
      var starter = MusicMachine.findOne();
      if (starter) {
        var checkbox = $(".js-playbassline");
        if (starter.bassline.on != checkbox.is(':checked')) {
          checkbox.click();
        }

        var speedBar = $('.js-playbassline-speed');
        speedBar.slider('setValue', starter.bassline.speed);
        playbassline.speed(starter.bassline.speed / 50);

        var volumeBar = $('.js-playbassline-volume');
        volumeBar.slider('setValue', starter.bassline.volume);
        playbassline.volume(starter.bassline.volume / 50);

        if (!starter.bassline.on) {
          playbassline.volume(0);
        }
      }
    },

    "drums1": function() {
      $('.js-drums1-speed').slider();
      $('.js-drums1-volume').slider();
      var starter = MusicMachine.findOne();
      if (starter) {
        var checkbox = $(".js-drums1");
        if (starter.drums1.on != checkbox.is(':checked')) {
          checkbox.click();
        }

        var speedBar = $('.js-drums1-speed');
        speedBar.slider('setValue', starter.drums1.speed);
        drums1.speed(starter.drums1.speed / 50);

        var volumeBar = $('.js-drums1-volume');
        volumeBar.slider('setValue', starter.drums1.volume);
        drums1.volume(starter.drums1.volume / 50);

        if (!starter.drums1.on) {
          drums1.volume(0);
        }
      }
    },

    "arp": function() {
      $('.js-arp-speed').slider();
      $('.js-arp-volume').slider();
      var starter = MusicMachine.findOne();
      if (starter) {
        var checkbox = $(".js-arp");
        if (starter.arp.on != checkbox.is(':checked')) {
          checkbox.click();
        }

        var speedBar = $('.js-arp-speed');
        speedBar.slider('setValue', starter.arp.speed);
        arp.speed(starter.arp.speed / 50);

        var volumeBar = $('.js-arp-volume');
        volumeBar.slider('setValue', starter.arp.volume);
        arp.volume(starter.arp.volume / 50);

        if (!starter.arp.on) {
          arp.volume(0);
        }
      }
    },

    "bassdrum1": function() {
      $('.js-bassdrum1-speed').slider();
      $('.js-bassdrum1-volume').slider();
      var starter = MusicMachine.findOne();
      if (starter) {
        var checkbox = $(".js-bassdrum1");
        if (starter.bassdrum1.on != checkbox.is(':checked')) {
          checkbox.click();
        }

        var speedBar = $('.js-bassdrum1-speed');
        speedBar.slider('setValue', starter.bassdrum1.speed);
        bassdrum1.speed(starter.bassdrum1.speed / 50);

        var volumeBar = $('.js-bassdrum1-volume');
        volumeBar.slider('setValue', starter.bassdrum1.volume);
        bassdrum1.volume(starter.bassdrum1.volume / 50);

        if (!starter.bassdrum1.on) {
          bassdrum1.volume(0);
        }
      }
    },

    "cymbal1": function() {
      $('.js-cymbal1-speed').slider();
      $('.js-cymbal1-volume').slider();
      var starter = MusicMachine.findOne();
      if (starter) {
        var checkbox = $(".js-cymbal1");
        if (starter.cymbal1.on != checkbox.is(':checked')) {
          checkbox.click();
        }

        var speedBar = $('.js-cymbal1-speed');
        speedBar.slider('setValue', starter.cymbal1.speed);
        cymbal1.speed(starter.cymbal1.speed / 50);

        var volumeBar = $('.js-cymbal1-volume');
        volumeBar.slider('setValue', starter.cymbal1.volume);
        cymbal1.volume(starter.cymbal1.volume / 50);

        if (!starter.cymbal1.on) {
          cymbal1.volume(0);
        }
      }
    },

    "hihat2": function() {
      $('.js-hihat2-speed').slider();
      $('.js-hihat2-volume').slider();
      var starter = MusicMachine.findOne();
      if (starter) {
        var checkbox = $(".js-hihat2");
        if (starter.hihat2.on != checkbox.is(':checked')) {
          checkbox.click();
        }

        var speedBar = $('.js-hihat2-speed');
        speedBar.slider('setValue', starter.hihat2.speed);
        hihat2.speed(starter.hihat2.speed / 50);

        var volumeBar = $('.js-hihat2-volume');
        volumeBar.slider('setValue', starter.hihat2.volume);
        hihat2.volume(starter.hihat2.volume / 50);

        if (!starter.hihat2.on) {
          hihat2.volume(0);
        }
      }
    },

    "snaredrum1": function() {
      $('.js-snaredrum1-speed').slider();
      $('.js-snaredrum1-volume').slider();
      var starter = MusicMachine.findOne();
      if (starter) {
        var checkbox = $(".js-snaredrum1");
        if (starter.snaredrum1.on != checkbox.is(':checked')) {
          checkbox.click();
        }

        var speedBar = $('.js-snaredrum1-speed');
        speedBar.slider('setValue', starter.snaredrum1.speed);
        snaredrum1.speed(starter.snaredrum1.speed / 50);

        var volumeBar = $('.js-snaredrum1-volume');
        volumeBar.slider('setValue', starter.snaredrum1.volume);
        snaredrum1.volume(starter.snaredrum1.volume / 50);

        if (!starter.snaredrum1.on) {
          snaredrum1.volume(0);
        }
      }
    },

    "vibes": function() {
      $('.js-vibes-speed').slider();
      $('.js-vibes-volume').slider();
      var starter = MusicMachine.findOne();
      if (starter) {
        var checkbox = $(".js-vibes");
        if (starter.vibes.on != checkbox.is(':checked')) {
          checkbox.click();
        }

        var speedBar = $('.js-vibes-speed');
        speedBar.slider('setValue', starter.vibes.speed);
        vibes.speed(starter.vibes.speed / 50);

        var volumeBar = $('.js-vibes-volume');
        volumeBar.slider('setValue', starter.vibes.volume);
        vibes.volume(starter.vibes.volume / 50);

        if (!starter.vibes.on) {
          vibes.volume(0);
        }
      }
    },






  });


  Template.playground.events({
    "change .js-playbassline": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "bassline.on": event.target.checked
        }
      });
    },

    "slideStop .js-playbassline-speed": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "bassline.speed": event.value
        }
      });
    },

    "slideStop .js-playbassline-volume": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "bassline.volume": event.value
        }
      });
    },


    "change .js-drums1": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "drums1.on": event.target.checked
        }
      });
    },

    "slideStop .js-drums1-speed": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "drums1.speed": event.value
        }
      });
    },

    "slideStop .js-drums1-volume": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "drums1.volume": event.value
        }
      });
    },


    "change .js-arp": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "arp.on": event.target.checked
        }
      });
    },

    "slideStop .js-arp-speed": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "arp.speed": event.value
        }
      });
    },

    "slideStop .js-arp-volume": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "arp.volume": event.value
        }
      });
    },


    "change .js-bassdrum1": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "bassdrum1.on": event.target.checked
        }
      });
    },

    "slideStop .js-bassdrum1-speed": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "bassdrum1.speed": event.value
        }
      });
    },

    "slideStop .js-bassdrum1-volume": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "bassdrum1.volume": event.value
        }
      });
    },


    "change .js-cymbal1": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "cymbal1.on": event.target.checked
        }
      });
    },

    "slideStop .js-cymbal1-speed": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "cymbal1.speed": event.value
        }
      });
    },

    "slideStop .js-cymbal1-volume": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "cymbal1.volume": event.value
        }
      });
    },


    "change .js-hihat2": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "hihat2.on": event.target.checked
        }
      });
    },

    "slideStop .js-hihat2-speed": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "hihat2.speed": event.value
        }
      });
    },

    "slideStop .js-hihat2-volume": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "hihat2.volume": event.value
        }
      });
    },


    "change .js-snaredrum1": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "snaredrum1.on": event.target.checked
        }
      });
    },

    "slideStop .js-snaredrum1-speed": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "snaredrum1.speed": event.value
        }
      });
    },

    "slideStop .js-snaredrum1-volume": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "snaredrum1.volume": event.value
        }
      });
    },


    "change .js-vibes": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "vibes.on": event.target.checked
        }
      });
    },

    "slideStop .js-vibes-speed": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "vibes.speed": event.value
        }
      });
    },

    "slideStop .js-vibes-volume": function(event) {
      var val = MusicMachine.findOne({});
      MusicMachine.update({
        _id: val._id
      }, {
        $set: {
          "vibes.volume": event.value
        }
      });
    }


  });

  Template.playground.onRendered(function() {
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

    elems.forEach(function(html) {
      var switchery = new Switchery(html);
    });





  });
}

if (Meteor.isServer) {
  //      MusicMachine.remove({});
  if (MusicMachine.find().count() === 0) {
    MusicMachine.insert({
      bassline: {
        speed: 50,
        volume: 50,
        on: false
      },
      drums1: {
        speed: 50,
        volume: 50,
        on: false
      },
      arp: {
        speed: 50,
        volume: 50,
        on: false
      },
      bassdrum1: {
        speed: 50,
        volume: 50,
        on: false
      },
      cymbal1: {
        speed: 50,
        volume: 50,
        on: false
      },
      hihat2: {
        speed: 50,
        volume: 50,
        on: false
      },
      snaredrum1: {
        speed: 50,
        volume: 50,
        on: false
      },
      vibes: {
        speed: 50,
        volume: 50,
        on: false
      },
    });

  }

}
