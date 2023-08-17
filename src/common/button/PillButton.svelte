<script>
    export let cls = 'bg-accent'
    export let type = 'button'
    export let enabled = true
    export let width = "2.5em"
    export let height = "2.5em"
</script>

<button style="width: { width }; height: { height };"
    class="pill-btn { cls }"
    type={ type }
    disabled = { !enabled }
    on:click
>
    <slot></slot>
</button>
