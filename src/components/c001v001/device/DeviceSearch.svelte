<script>

    import { onMount } from "svelte"

    import PillButton from "../../../common/button/PillButton.svelte"
    import InputText from "../../../common/input_text/InputText.svelte"
    import { DEVICES, DEVICE_MAP_MARKERS, DEVICES_LOADED, get_devices } from "../../../des_api";

    import mapboxgl from 'mapbox-gl' // npm install mapbox-gl  // npm install @types/mapbox-gl
    import 'mapbox-gl/dist/mapbox-gl.css'
    mapboxgl.accessToken = 'pk.eyJ1IjoibGVlaGF5Zm9yZCIsImEiOiJjbGtsb3YwNmsxNm11M2VrZWN5bnYwd2FkIn0.q1_Wv8oCDo0Pa6P2W3P7Iw'

    let map
    const makeMap = ( ctx ) => {
        map = new mapboxgl.Map(  {
            container: ctx,
            style: 'mapbox://styles/leehayford/clklqsnmp006t01q22cb3h18x',
            center: [ -113.811, 52.269 ],
            zoom : 5
        } )
        console.log( "DeviceSearch -> makeMap( ) -> DEVIECS: ", $DEVICES )
        console.log( "DeviceSearch -> makeMap( ) -> $DEVICE_MAP_MARKERS: ", $DEVICE_MAP_MARKERS )
        $DEVICE_MAP_MARKERS.forEach( m => m.addTo( map )) 
    }

</script>

<div class="flx-col search-panel">

    <div class="flx-row search">

        <PillButton
            cls={ 'bg-purple_a' }
        >?</PillButton>

        <InputText 
            enabled={ true }
        />
        <PillButton
            cls={ 'bg-aqua_a' }
        >?</PillButton>

    </div>

    <div class="flx-row filters">
        FILTERS
    </div>

    { #if $DEVICES_LOADED }
    <div class="map-container" use:makeMap></div>
    { /if }


</div>

<style>

    .search-panel {
        border-top: solid 0.05em var(--grey_aa);
        border-right: solid 0.05em var(--grey_aa);
        background-color: var(--light_aa);
        border-radius: 0.5em;
        padding: 1em;
        max-width: 38em;
        min-width: 38em;
        height:100%;
        overflow: hidden;
    }

    .search {
        padding: 0.25em;
        align-items: center;
    }

    .filters {
        height: 35em;
        background-color: var(--dark);
        padding: 0.5rem;
        border-radius: 0.5em;
        border-bottom: solid 0.05em var(--grey_aa);
        border-left: solid 0.05em var(--grey_aa);
    }
</style>