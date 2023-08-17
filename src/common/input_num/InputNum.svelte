<script>

    export let num = 0
    export let lbl = null
    export let cls = "accent"
    export let width = "7em"
    export let right = false
    export let enabled = false
    export let is_integer = false
    $: place = ( is_integer ? 0 : 0.0 )

    $:  {
        if (num === null || num === undefined ) { num = 0 } // console.log( "num: ", num )
        num = Number( is_integer ? num.toFixed(0) : num.toFixed(3) )
    }
</script>

<div class="flx-row container">

    { #if lbl != null && !right }
        <p class="{ cls } lbl-left">{ lbl }</p>
    { /if }
    <input style="width: { width };"
        type="number" 
        bind:value={ num }
        placeholder= { place }
        disabled = { !enabled }
    >
    { #if lbl != null && right }
        <p class="{ cls } lbl-right">{ lbl }</p>
    { /if }
    



</div>

<style>

    .container {
        align-items: center;
        gap: 1rem;
    }

    .lbl-left {
        font-size: 0.9rem;
        width: 100%;
        padding-left: 0.75rem;
        text-align: end;
    }


    .lbl-right {
        font-size: 0.9rem;
        width: 100%;
        padding-right: 0.75rem;
        text-align: start;
    }

    input {
        color: var(--light);
        background-color: var(--aqua_01);
        padding: 0.5rem;
        border-radius: 0.5rem;
        border-top: solid 0.05em var(--grey_aa);
        border-right: solid 0.05em var(--grey_aa);
        border-bottom: solid 0.05em var(--dark);
        border-left: solid 0.05em var(--dark);
    }

    input:disabled {
        color: var(--grey_a);
        padding: 0.25rem 0.5rem;
		border: 0.1rem solid transparent;
    }

</style>