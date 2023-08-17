<script>
    import { RGBA, BASE } from "../colors";
    export let title = "Title"
    export let unit = "Unit"
    export let base_color = BASE.AQUA
    export let max = 100
    export let min = 0
    export let num
    $: width = num / ( max - min ) * 100

    const bar_color = RGBA(base_color, 0.5)
    const title_color = RGBA(base_color, 0.7)

</script>

<div class="flx-row container">

    <div class="flx-col header">
        <div class="title" style="color: { title_color }">{ title }</div>
    </div>

    <dvi class="flx-row gauge-contatiner">

        <div class="flx-row bar"  style="width:{ width }%; background-color: { bar_color };"></div>

        <div style="width:{ 100 - width }%"></div>

        <div class="flx-row value">
            <div class="num" style="color: { title_color };">
                { num.toFixed( 2 ) }
            </div>
            
            <div class="unit">{ unit }</div>
        </div>
        

    </dvi>

</div>

<style>
    .container {
        width: 100%;
        gap: 0;
    }

    .header {
        justify-content: center;
        align-items: flex-end;
        padding-right: 1em;
        width: 6em;
    }
    .value {   
        align-items: center;
        width: 9.5em;
        gap: 0.5em;
        padding-left: 1em;
    }
    .title {
        text-align: center;
    }

    .gauge-contatiner {
        justify-content: left;
        align-items: center;
        width: 100%;
        gap: 0;
    }

    .bar {
        height: 0.152em;
        border-radius: 0.1em;
    }

    .num {
        font-size: 1.125em;
        width: 6em;
        height: 1.6em;
        text-align: right;
    }
    .unit {
        text-align: left;
        color: var(--grey_a);
        font-size: 0.9em;
        width: 3.5em;
    }

</style>