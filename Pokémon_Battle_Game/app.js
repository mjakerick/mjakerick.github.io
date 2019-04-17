$(() => {

  let currentPokeIndex = 0;
  let pokeNum = $('.pokemon-display-box').children().length - 1;

  $.ajax({
    url:'https://pokeapi.co/api/v2/pokemon/1/'
  }).then(
    (data)=>{
        $('.poke1').text(data.name).addClass('text');
        let pokemonSprite = $('<img>')
        .attr('src', data.sprites.front_default)
        .addClass('sprite');
        $('.poke1').append(pokemonSprite);
    },
    ()=>{
        console.log('bad request');
    }
  );

  $.ajax({
    url:'https://pokeapi.co/api/v2/pokemon/4/'
  }).then(
    (data)=>{
        $('.poke2').html(data.name).addClass('text');
        let pokemonSprite = $('<img>')
        .attr('src', data.sprites.front_default)
        .addClass('sprite');
        $('.poke2').append(pokemonSprite);
    },
    ()=>{
        console.log('bad request');
    }
  );

  $.ajax({
    url:'https://pokeapi.co/api/v2/pokemon/7/'
  }).then(
    (data)=>{
        $('.poke3').html(data.name).addClass('text');
        let pokemonSprite = $('<img>')
        .attr('src', data.sprites.front_default)
        .addClass('sprite');
        $('.poke3').append(pokemonSprite);
    },
    ()=>{
        console.log('bad request');
    }
  );

  // ============
  // Event Listeners
  // ============
  // next button
  $('.next').on('click', () => {
    // hide current image
    $('.pokemon-display-box').children().eq(currentPokeIndex).hide();
    // increment the currentImgIndex
    if(currentPokeIndex < pokeNum) {
      currentPokeIndex++;
    } else {
      currentPokeIndex = 0;
    };
    // show next image
    $('.pokemon-display-box').children().eq(currentPokeIndex).show();

  });
  // previous button
  $('.previous').on('click', () => {
    // hide current image
    $('.pokemon-display-box').children().eq(currentPokeIndex).hide();
    // decrement currentImgIndex
    if(currentPokeIndex > 0){
      currentPokeIndex--;
    } else {
      currentPokeIndex = pokeNum
    };
    // show previous images
    $('.pokemon-display-box').children().eq(currentPokeIndex).show();
  });

  class Pokemon {
    constructor(name,type) {
      this.name = name;
      this.type = type;
      this.hp = Math.floor(Math.random() * (10 - 7 + 1) ) + 7;
      this.attack = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
      this.accuracy = (Math.random() * (0.8 - 0.6) + 0.6).toFixed(1);
    };
    run () {
      alert(`${this.name} has fled the battle!`)
      location.reload();
    }
    fight (enemy) {
      let randNum = (Math.round(Math.random(1) * 10) / 10);
      $(`.${this.type}`).text(`HP: ${this.hp}`);
      if(randNum <= this.accuracy){
        enemy.hp -= this.attack;
        $(`.${this.type}`).text(`HP: ${this.hp}`);
        alert(`The ${enemy.name} was hit by the ${this.name} and now has ${enemy.hp} health! `);
        $(`.${enemy.type}`).text(`HP: ${enemy.hp}`);
      }else{
        alert(`${this.name}'s attack missed`);
      };
      if(enemy.hp <= 0){
        alert(`${this.name} knocked out the ${enemy.name}! ${this.name} wins!`);
        location.reload();
      };
    };
  };

  const pokeHp = new Pokemon('Player\'s Pokémon', 'pokeHp');
  const enemyHp = new Pokemon('Enemy Pokémon', 'enemyHp');

  $('.switch').on('click', () => {
    $('.page1').hide();
    $('.page2').show();
    const choice = $('.pokemon-display-box').children().eq(currentPokeIndex);

    $('.poke').append(choice);

    $.ajax({
      url:'https://pokeapi.co/api/v2/pokemon/24/'
    }).then(
      (data)=>{
          $('.enemy').html(data.name).addClass('text');
          let pokemonSprite = $('<img>')
          .attr('src', data.sprites.front_default)
          .addClass('sprite');
          $('.enemy').append(pokemonSprite);
      },
      ()=>{
          console.log('bad request');
      }
    );
  });

  $('.fight').on('click', () => {
    pokeHp.fight(enemyHp);
    if(enemyHp.hp <= 0){

    }else{
      enemyHp.fight(pokeHp);
    }
  });

  $('.run').on('click', () => {
    pokeHp.run();
  });

});
