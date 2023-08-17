<script>

    import { onMount } from "svelte"
    import { User } from "../../des_api"

    export let uid
    export let user = new User( )
    onMount( ( ) => { 
        if ( uid ) { user = JSON.parse( sessionStorage.users ).filter( u => u.id == uid )[0] }
    } )

</script>

<div class="flx-row bet">
    <br>
    <div class="content">
        <p style="color: var(--grey_a)">{ user.name }</p>
        <p style="color: var(--aqua_aa)">{ user.email }</p>
    </div>
</div>

<style>
    .content {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: -0.5em;
        margin-right: 0.5em;
        padding: 0.25em 1.5em;
        border-radius: 2em;
        gap: 3em;
        background-color: var(--dark);
        border-bottom: solid 0.05em var(--grey_aa);
        border-left: solid 0.05em var(--grey_aa);
    }
</style>