<script>
    async function changeTheme(e) {
        let value = e.target.value;
        // e.target.remove()
        let newStyle = '';
        switch (value) {
            case 'minecraft':
                newStyle = await import('../minecraft.css');
                break;
            case 'hazycore':
                newStyle = await import('../hazycore.css');
                break;
            default:
                newStyle = await import('../app.css');
                break;
        }
        document.head.querySelectorAll('style').forEach((e) => e.remove());
        let newStyleElem = document.createElement('style');
        newStyleElem.innerHTML = newStyle.default;
        document.head.appendChild(newStyleElem);
        console.log(e.target.value);
    }
</script>

<select on:input={changeTheme}>
    <option value="original" selected>Original</option>
    <option value="minecraft">Minecraft</option>
    <option value="hazycore">hazycore</option>
</select>
