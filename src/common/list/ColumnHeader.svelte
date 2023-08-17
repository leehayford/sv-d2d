<script>

    import { createEventDispatcher } from 'svelte';
        const dispatch = createEventDispatcher();
    
    export let css_class = "bg-aqua";
    export let column;
    export let activeColumn;
    export let a2z = false;
    $: active = column.Title === activeColumn;
    
    </script>
    
    <div class="column-header"  on:click={() =>dispatch("sort")} on:keyup>
        <div class="icon {active ? css_class: null }" >
            <img src="img/Sort.svg" alt="sort icon" rotate={a2z}>
        </div>
        {column.Title}
    </div>
    
    <style>
    
        .column-header {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            color: var(--light_a);
            font-size: 1.1rem;
            width: 100%;
        }
        .column-header:hover {
            color: var(--light);
        }
        .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 1.28rem;
            width: 1.28rem;
            border-radius: 0.17rem;
        }
        img[rotate="true"] {
            transform: rotate(180deg);
        }
       
    
    </style>