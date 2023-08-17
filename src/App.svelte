<script>

    import { onMount } from "svelte";
    import AppHeader from "./AppHeader.svelte"
    import Devices from "./components/c001v001/device/Devices.svelte";

    import { AUTH, get_user, get_users, get_event_types, get_devices, DEVICES, DEMO_DEVICES } from './des_api'
    import PillButton from './common/button/PillButton.svelte'
    
    onMount( async( ) => {
        
        current_page = sessionStorage.getItem( 'current_page' )

        if ( sessionStorage.getItem( 'des_token') != 'none' ) { // console.log( "Current des_token: ", token )
            await get_user( ) 
            // console.log( "Current user: ", $AUTH )
        } else {
            await get_users( ) 
            // console.log( 'App.svelte -> onMount( ):  get_users( ): $USERS\n', $USERS )
            await get_event_types( ) 
            // console.log( 'App.svelte -> onMount( ):  get_event_types( ): $EVENT_TYPES\n', $EVENT_TYPES )
        }

        /* INCASE WEBSOCKETS WERE OPEN, CLOSE THEM; 
        CAUSES THE SERVER TO UNSUBSCRIBE THIS DEVICE USER'S MQTT CLIENT FROM ALL TOPICS */
        window.onbeforeunload = ( ) => { 
            $DEVICES.forEach( dev => { dev.disconnectWS( ) } )
            $DEMO_DEVICES.forEach( dev => { dev.disconnectSIM( ) } ) 
        } 
    } )

    $: current_page = 'home_page'
    const setPage = ( page ) => {
        current_page = page
        sessionStorage.setItem( 'current_page', page, { path: '/' } )
    }

</script>

<div class="flx-col main">

    <AppHeader />

    <div class="flx-row layout">

        <div class="flx-col nav">

            <div class="flx-col">
                <PillButton on:click={ ( ) => { setPage( 'home_page' ) } } cls='bg-green_a'>H</PillButton>
                <PillButton on:click={ ( ) => { setPage( 'devices_page' ) } } cls='bg-green_a'>D</PillButton>
                <PillButton on:click={ ( ) => { setPage( 'jobs_page' ) } } cls='bg-green_a'>J</PillButton>
            </div>

            { #if $AUTH.role == "admin" }
            <div class="flx-col">
                <PillButton on:click={ ( ) => { setPage( 'admin_page' ) } } cls='bg-purple_a'>A</PillButton>
            </div>
            { /if }
        </div>

        <div class="flx-col page">
            { #if current_page === 'devices_page' }
                <!-- <Devices devices={ $DEVICES } markers={ markers }/> -->
                <Devices />
            { :else if current_page === 'jobs_page' }
                JOBS
            { :else if current_page === 'admin_page' }
                ADMIN
            { :else if current_page === 'home_page' }
                HOME
            {/if }

        </div>

    </div>

</div>
<style>
    .main {
        background-color: var(--dark);
        color: var(--accent);
        height: 100vh;
    }
    .layout {
        overflow: hidden;
        height: 100%;
        padding-bottom: 1em;
    }

    .nav {
        width: 2.5em;
        gap:2em;
        justify-content: space-between;
        padding-left: 1em;
        padding-bottom: 1em;
    }
    .page {
        padding: 0 1rem;
        height: 100%;
        overflow: hidden;
    }

</style>