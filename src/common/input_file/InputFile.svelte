<script>
    export let accept;
    export let files;
    export let func;
    export let id;
</script>

<input
    id={id}
    type="file"
    style="display:none"
    accept={accept}
    bind:files={files}
    on:change={func}
    on:click
>