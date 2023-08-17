<script>

    export let txt = null
    export let place = ""
    export let lbl = null
    export let enabled = false


    
</script>

<div class="flx-col" id="container">

    { #if lbl != null }
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="accent" id="lbl">
            { lbl }
        </label>
    { /if }

    <input 
        type="text" 
        bind:value={ txt }
        spellcheck=value
        placeholder= { place }
        disabled = { !enabled }
    >

</div>

<style>

    #container {
        gap: 0.25rem;
    }

    #lbl {
        font-size: 0.9rem;
    }

    input {
        color: var(--light);
        background-color: var(--dark);
        padding: 0.5rem;
        border-radius: 0.5rem;
        border-top: solid 0.05em var(--dark);
        border-right: solid 0.05em var(--dark);
        border-bottom: solid 0.05em var(--grey_aa);
        border-left: solid 0.05em var(--grey_aa);
        width: 100%;
    }

    input:disabled {
        color: var(--grey);
		border: 0.1rem solid transparent;
    }

</style>