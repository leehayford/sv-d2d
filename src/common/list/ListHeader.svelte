<script>

    import ColumnHeader from './ColumnHeader.svelte'; 
    
    export let gridTemplate;
    export let arr;
    export let columns = [];
    // export let css_class;
    export let activeColumn;
    
    export let a2z;

    let loaded = false;
    $: callSort( columns );
    const callSort = ( ) => {
        if ( loaded ) {
            a2z = !a2z;
            Sort( columns.filter( c => { return c.Title === activeColumn} )[0] );
        } // else { console.log("Does this ever happen?"); }
    }

    const SetActive = (column) => {
            activeColumn = column.Title; // console.log("Sort By: ", activeColumn);
    }
    
    const GetChain = ( element, chain) => {
        chain.forEach( x => { element = element[x]; })
        return element;
    }
        
    const Sort = ( column ) => {
        SetActive(column);
        arr = arr.sort( ( arra, arrb ) => {
            var a = GetChain( arra, column.Chain );
            var b = GetChain( arrb, column.Chain );
            if ( a2z ) {
                if ( a < b ) { return -1; }
                if ( a > b ) { return 1; }
                return 0;
            }
            else {
                if ( a > b ) { return -1; }
                if ( a < b ) { return 1; }
                return 0;
            }
        })
        a2z = !a2z;
        loaded = true;
    };
 
    </script>
    
    <div class="header {gridTemplate}">
    {#each columns as column (column.Id)}
        {#if column.Title != null}
            <ColumnHeader 
                bind:activeColumn={activeColumn}
                bind:a2z={a2z}
                column={column} 
                on:sort={() => {Sort(column)}} 
                />
        {:else}
            <div></div>
        {/if}
    {/each}
    </div>

    
    <style>

    .header {
        display: grid;
        text-align: left;
        grid-gap: 1rem;
        width: 100%;
    }

    </style>