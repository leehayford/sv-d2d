<script>

    import DateTimeDisplay from "../../common/date_time/DateTimeDisplay.svelte"
    import UserBadge from "../user/UserBadge.svelte"

    import { Config } from "../../des_api"
    
    export let config = new Config( )
    $: active = ( config.cfg_job_end == 0 )
    let run_time = 0
    $: {
        if ( active ) { 
            run_time = Math.abs( Date.now() - config.cfg_job_start ) / 36e5 
        } else { 
            run_time = Math.abs( config.cfg_job_end - config.cfg_job_start ) / 36e5 
        } // console.log( JSON.stringify( config, null, 4 ) )
    }

</script>

<div class="flx-col card">

    <div class="flx-row card-title">
        <h4>Current configuration</h4> 
        <div><DateTimeDisplay date={ config.cfg_time } /></div>
    </div>

    <div class="flx-col card-content">

        <div class="flx-row bet">
            { #if active }
            <div class="fg-pink">ACTIVE</div>
            { :else }
            <div class="fg-green_a">COMPLETE</div>
            { /if }
            <div>{ run_time.toFixed( 1 ) } hours</div>
        </div>
    
        <div class="flx-row bet">
            Mode:
            <div>{ config.cfg_vlv_pos }</div>
        </div>
    
        <div class="flx-row bet"> 
            <div class="sml">Job Database ID:</div>
            <div class="sml">{ config.cfg_job_name }</div>
        </div>
    
    </div>
    
    <UserBadge uid={ config.cfg_user_id } />

</div>

<style></style>