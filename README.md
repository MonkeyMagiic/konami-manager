konami-manager.js
========

#### JavaScript konami manager ####
![alt tag](http://static.gamesradar.com/images/mb/GamesRadar/us/Features/2011/04/Mortal%20Kombat%20Week/Evolution%20of%20Scorpion%20and%20Sub-Zero/MKII/mk2-8--article_image.jpg)
### Usage ###

```html
<script src="konami-manager.js"></script>
<script>

   /**
     * Attach Konami { ← ← a }
     */
    konamiManager.add(attackFireball, [Keyboard.LEFT, Keyboard.LEFT, Keyboard.A]);

    /**
     * Attach Konami { → → a }
     */
    konamiManager.add(attackIceball, [Keyboard.RIGHT, Keyboard.RIGHT, Keyboard.A]);

    /**
     * Attack Fireball callback handler
     */
    function attackFireball() {
        console.log('Fireball attack');
    }

    /**
     * Attack Iceball callback handler
     */
    function attackIceball() {
        console.log('Iceball attack');
    }

</script>
```
