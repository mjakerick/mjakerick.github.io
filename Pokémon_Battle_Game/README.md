# Pokémon Battle Game

Pokémon Battle Game for GA Unit 1 Project

Link to my project: https://mjakerick.github.io/Pok%C3%A9mon_Battle_Game/index.html

# Description

In this project I utilized my knowledge of HTML, CSS, Javascript, and Jquery to create a functioning Pokémon Battle Game. The game starts by choosing one of three Pokémon from a carousel. Once the player chooses a Pokémon, the game shifts from the main screen to a battle screen by use of show() and hide(). I didn't add animations for these functions so the default animations are what are shown. The battle function includes a fight and a run button. The run button refreshes the page with a location.reload(), effectively resetting the game. The fight button makes the player Pokémon attack as well as take an attack from the opponent. Their HP, Attack, and Accuracy are randomly generated between set values. I decided to use alerts because appending to a text box seemed to break the code I had already written (sprites would increase in size and I couldn't seem to control it). Once a Pokémon drops to 0 HP or lower, there will be an alert and the page will refresh.
