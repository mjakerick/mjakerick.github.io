$(() => {

  $.ajax({
    url:'https://pokeapi.co/api/v2/pokemon/1/'
}).then(
    (data)=>{
        $('#name').html(data.name);
        let pokemonSprite = $('<img>')
        .attr('src', data.sprites.front_default)
        .addClass('sprite')
        $('#sprite').append(pokemonSprite);
    },
    ()=>{
        console.log('bad request');
    }
);

})
