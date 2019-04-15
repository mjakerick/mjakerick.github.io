$(() => {



  $.ajax({
    url:'https://pokeapi.co/api/v2/pokemon/1/'
  }).then(
    (data)=>{
        $('.poke1').html(data.name);
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

})
