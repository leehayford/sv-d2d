<script>
    export let list = [];
    export let lblVal = "";
    export let selection;
    export let enabled;
    export let clr;
    export let displayField;
    
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

  </script>
  
  <div class="select-container">
    {#if lblVal != ""}
      <label for="select" class="lbl">{lblVal}</label>
    {/if}
    <select id="select" class={clr} bind:value={selection} disabled={!enabled} on:change={ () => { dispatch("new_selection") } }>
    {#each list as item (item.id)}
      <option class={clr} value={item.id} selected="{item.id == selection}">{item[displayField]}</option>
    {/each}
    </select>
  </div>
  
  <style>
  
    .select-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .lbl {
        font-size: 0.9rem;
        background-color: transparent;
        color: var(--light_a);
        padding-bottom: 0.5rem;
        width: 100%;
    }
    select {
      background-color: var(--dark);
      /* color: var(--light); */
      width: 100%;
      border-radius: 5px;
      border: none;
      outline: none;
      padding:0.75rem;
      width: 100%;
      text-align-last: left;
    }
  
  </style>