<script>
    import sanitizeHtml from 'sanitize-html';
    import { onMount } from 'svelte';

    let serverStatus = null;

    onMount(async () => {
        let lastServerStatus = localStorage.getItem('serverStatusJson')
        let lastServerStatusTime = parseInt(localStorage.getItem('serverStatusTime')??'0')
        if (!lastServerStatus||(Date.now()-lastServerStatusTime)>(60*1000)) {
            let req = await fetch(
                'https://api.mcstatus.io/v1/status/java/play.mangomc.net'
            );
            serverStatus = await req.json();
            localStorage.setItem('serverStatusJson', JSON.stringify(serverStatus))
            localStorage.setItem('serverStatusTime', Date.now().toString())
            console.log('Saved serverStatus')
        } else {
            console.log('ServerStatus cached')
            serverStatus = JSON.parse(lastServerStatus)
        }
    });
</script>

<!-- Whitespace messy because don'tcha love css white-space: pre -->

{#if serverStatus}
    <div class="server-info">
        <img
            class="server-info-icon"
            src={serverStatus.response.favicon}
            alt="MangoMC Logo"
        />
        <div class="server-info-content">
            <span class="server-info_top-bar"
                ><span class="server-info_name">MangoMC</span><span
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
