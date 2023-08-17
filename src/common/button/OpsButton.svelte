<script>
    export let cls = 'fg-accent'
    export let type = 'button'
    export let selected = false
</script>

<div class="tab { ( selected ? `selected ${ cls }` : 'fg-grey_a' ) }"
    type={ type }
    
    on:click
    on:keydown
>
    <slot></slot>
</div>

<style>
	.tab {
        cursor: pointer;
        border-top-left-radius: 1em;
        border-bottom-left-radius: 1em;
        min-width: 2em;
        height: 2em;
        display: flex;
        align-items: center;
	}

    .selected {
        margin-right: -1.08em;
        border-top: 0.1rem solid var( --accent_a );
        border-left: 0.1rem solid var( --accent_a );
        border-bottom: 0.1rem solid var( --accent_a );
        background-color: var(--dark);
        padding-left: 1em;
    }

</style>