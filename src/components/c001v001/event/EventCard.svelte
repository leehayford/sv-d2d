
<script>

    import { onMount } from "svelte"
    import DateTimeDisplay from "../../../common/date_time/DateTimeDisplay.svelte"
    import UserBadge from "../../user/UserBadge.svelte"

    import { Event, EventType } from "../../../des_api"
    
    export let event = new Event( )
    export let title = event.evt_title
    let charLimit = 230
    $: message = ( 
        event.evt_msg.length > charLimit 
        ? event.evt_msg.slice( 0, charLimit ) + "..." 
        : event.evt_msg 
    )

    let evt_type = new EventType( )
    onMount( async( ) => { 
        evt_type = JSON.parse( sessionStorage.event_types ).filter( 
            t => t.evt_typ_code == event.evt_code )[0]
    } )

</script>

<div class="flx-col card">
       
    <div class="flx-row card-title">
        <h4>{ title }</h4> 
        <div><DateTimeDisplay date={ event.evt_time } /></div>
    </div>

    <div class="flx-col card-content">
        <div class="flx-row bet">
            <div class="fg-green_a">{ evt_type.evt_typ_name }</div>
        </div>
        <div class="flx-row mid">
            <div class="sml">{ message }</div>
        </div>
        
    </div>
    
    <UserBadge uid={ event.evt_user_id } />

</div>

<style></style>