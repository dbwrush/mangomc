<script>
    import sanitizeHtml from 'sanitize-html';
    import { onMount } from 'svelte';

    let serverStatus = null
    let statusString = ''

    onMount(async () => {
        let lastServerStatus = localStorage.getItem('serverStatusJson');
        let lastServerStatusTime = parseInt(
            localStorage.getItem('serverStatusTime') ?? '0'
        );
        if (
            !lastServerStatus ||
            Date.now() - lastServerStatusTime > 60 * 1000
        ) {
            let req = await fetch(
                'https://api.mcstatus.io/v1/status/java/play.mangomc.net'
            );
            serverStatus = await req.json();
            localStorage.setItem(
                'serverStatusJson',
                JSON.stringify(serverStatus)
            );
            localStorage.setItem('serverStatusTime', Date.now().toString())
            console.log('Saved serverStatus')
        } else {
            console.log('ServerStatus cached')
            serverStatus = JSON.parse(lastServerStatus)
        }
    })

    // https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
    // The API for copying text is new, Firefox doesn't entirely support it.
    // This fallback solves that on most browsers

    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement('textarea')
        textArea.value = text
        // Avoid scrolling to bottom
        textArea.style.top = '0'
        textArea.style.left = '0'
        textArea.style.position = 'fixed'

        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        
        let success = false
        try {
            success = document.execCommand('copy')
            console.log('Fallback: Copying text command was ' + success)
        } catch (err) {
            console.log(err)
            success = false
        }
        document.body.removeChild(textArea)
        return success
    }
    async function copyServerIp() {
        const text = 'play.mangomc.net'
        let success = false
        if (!navigator.clipboard) {
            success = fallbackCopyTextToClipboard(text)
        } else {
            try {
                await navigator.clipboard.writeText(text)
                success = true
            } catch (error) {
                success = false
            }
        }
        if (success) {
            statusString = '(Copied IP)'
            setTimeout(() => statusString = '', 5000)
        } else {
            statusString = '(Failed to copy IP)'
            setTimeout(() => statusString = '', 5000)
        }
        console.log(success)
    }
</script>

<!-- Whitespace messy because don'tcha love css white-space: pre -->

{#if serverStatus}
    <div class="server-info" on:click={copyServerIp}>
        <img
            class="server-info-icon"
            src={serverStatus.response.favicon}
            alt="MangoMC Logo"
        />
        <div class="server-info-content">
            <span class="server-info_top-bar"
                ><span class="server-info_name">MangoMC</span><span class="server-info_status">{statusString}</span><span
                    class="server-info_playercount"
                    >{serverStatus.response.players.online}/{serverStatus
                        .response.players.max}</span
                ></span
            >{@html sanitizeHtml(serverStatus.response.motd.html, {
                allowedTags: ['span'],
                allowedAttributes: {
                    span: ['style'],
                },
            })}
        </div>
    </div>
{/if}
{#if !serverStatus}
    <h2 style="width: fit-content; font-size: 2rem; margin: 0 auto;">
        Java and Bedrock
    </h2>
    <h3 style="width: fit-content; font-size: 1.5rem; margin: 0 auto;">
        play.mangomc.net
    </h3>
{/if}
