konami-manager.js
========

#### JavaScript konami manager ####

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
	
    function attackFireball() {
        console.log('Fireball attack');
    }

    function attackIceball() {
        console.log('Iceball attack');
    }

</script>
```
