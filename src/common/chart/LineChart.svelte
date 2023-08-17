<script>

    import { Chart } from "chart.js/auto"
    import 'chartjs-adapter-moment'// npm install moment chartjs-adapter-moment
    import zoomPlugin from 'chartjs-plugin-zoom'; // npm install chartjs-plugin-zoom
    Chart.register(zoomPlugin);

    const makeConfig = ( data ) => { return data }

    export let chartdata
    const makeChart = ( ctx, d ) => {

        let chart = new Chart( ctx, makeConfig( d ) )
        ctx.addEventListener( 'mousedown', ( e ) => { 
            switch(e.button) {
                case 0: // left
                    console.log( "left click" )
                    break
                case 1: // wheel
                    console.log( "wheel click" )
                    break
                case 2: // right
                    chart.resetZoom( )
                    break
            }
        } )
        
        return {
            update( u ) {
                chart.data.datasets = u.data.datasets
                chart.options.scales = u.options.scales
                chart.update( )
            },
            destroy( ) { 
                chart.destroy( ) 
            }
        }
    }

</script>

<div class="flx-row container">
    <canvas 
        class="chart" 
        use:makeChart={ chartdata } 
        oncontextmenu="event.preventDefault( );"
    />
</div>

<style>

    .container {
        padding-top: 2em;
        border-radius: 0.5em;
        position: relative;
        height: 100%;
        width: 100%;
    }

</style>