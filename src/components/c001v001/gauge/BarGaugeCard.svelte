<script>

    import BarGaugeH from '../../common/bar_gauge/BarGaugeH.svelte'
    import { BASE } from '../../common/colors'
    import { Sample } from '../../des_api'

    export let smp = new Sample( )

</script>


<div class="flx-col container">

    <!-- { JSON.stringify( smp, null, 4 ) } -->
    <BarGaugeH title="CH4"
        base_color={ BASE.PINK }
        bind:num={ smp.smp_ch4 }
        max={ 100 }
        unit={ "%" }
    />
    
    <BarGaugeH title="H-Flow"
        base_color={ BASE.BLUE }
        bind:num={ smp.smp_hi_flow }
        max={ 250 }
        unit={ "L/min" }
    />
    
    <BarGaugeH title="L-Flow"
        base_color={ BASE.AQUA }
        bind:num={ smp.smp_lo_flow }
        max={ 2 }
        unit={ "L/min" }
    />
    
    <BarGaugeH title="Pressure"
        base_color={ BASE.YELLOW }
        bind:num={ smp.smp_press }
        max={ 1500 }
        unit={ "psi" }
    />
    
</div>

<style>
    .container {
        background-color: var(--dark);
        justify-content: center;
        padding: 2em 1em;
        border-radius: 0.5em;
        gap: 0;
        height: 100%;
        border-bottom: solid 0.05em var(--grey_aa);
        border-left: solid 0.05em var(--grey_aa);
    }
</style>