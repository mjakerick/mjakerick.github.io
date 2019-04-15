$(() => {

  let currentPokeIndex = 0;
  let pokeNum = $('.pokemon-display-box').children().length - 1;

  $.ajax({
    url:'https://pokeapi.co/api/v2/pokemon/1/'
  }).then(
    (data)=>{
        $('.poke1').text(data.name);
        let pokemonSprite1 = $('<img>')
        .attr('src', data.sprites.front_default)
        .addClass('sprite')
        $('.poke1').append(pokemonSprite1);
    },
    ()=>{
        console.log('bad request');
    }
  );

  $.ajax({
    url:'https://pokeapi.co/api/v2/pokemon/4/'
  }).then(
    (data)=>{
        $('.poke2').html(data.name);
        let pokemonSprite2 = $('<img>')
        .attr('src', data.sprites.front_default)
        .addClass('sprite')
        $('.poke2').append(pokemonSprite2);
    },
    ()=>{
        console.log('bad request');
    }
  );

  $.ajax({
    url:'https://pokeapi.co/api/v2/pokemon/7/'
  }).then(
    (data)=>{
        $('.poke3').html(data.name);
        let pokemonSprite3 = $('<img>')
        .attr('src', data.sprites.front_default)
        .addClass('sprite')
        $('.poke3').append(pokemonSprite3);
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
    }
    // show next image
    $('.pokemon-display-box').children().eq(currentPokeIndex).show();

  })
  // previous button
  $('.previous').on('click', () => {
    // hide current image
    $('.pokemon-display-box').children().eq(currentPokeIndex).hide();
    // decrement currentImgIndex
    if(currentPokeIndex > 0){
      currentPokeIndex--;
    } else {
      currentPokeIndex = pokeNum
    }
    // show previous images
    $('.pokemon-display-box').children().eq(currentPokeIndex).show();
  })

})
