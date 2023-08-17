<script>
    export let cls = 'bg-accent'
    export let type = 'button'
    export let enabled = true
</script>

<button 
    class="sqr-btn { cls }"
    type={ type }
    disabled = { !enabled }
    on:click
>
    <slot></slot>
</button>

<style>
	button {
		cursor: pointer;
        padding: 0.25em;
        border-radius: 0.25rem;
        border: 0.1rem solid transparent;
        width: 100%;
        height: 100%;
	}

</style>