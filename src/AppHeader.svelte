<script>
    
    import { AUTH, login, logout } from './des_api'
    import PillButton from './common/button/PillButton.svelte'

    let email = ""
    let password = ""
    $: loginButtonColor = ( $AUTH.logged_in ? 'bg-purple' : 'bg-green_a' )
    $: loginButtonText = ( $AUTH.logged_in ? 'out' : 'in' )
    $: loginButtonFunc = ( $AUTH.logged_in ? logout : ( ) => { login( email, password ) } )

</script>


<div class="flx-col container">

    <div class="flx-row content">  

        <div class="flx-col title-block">
            <div class="flx-row icon-block">
                <h1>V<span class="ent">ENT</span><span class="wat">WAT</span><span class="ch">CH</span><sub class="four">4</sub></h1>
            </div>
            <div class="subtitle">
                <p>Part of the <span class="data-desk">Data</span><span class="two">2</span><span class="data-desk">Desk</span> ecosystem</p>
            </div>
            
        </div>

        <div class="flx-row login">
        
            { #if $AUTH.logged_in }
            <h4>{ $AUTH.name }, you are a tolerable person.</h4>
            { :else }
            <div class="flx-col input-container">
                <label class="lbl">
                    email
                    <input name="email"  type="email" bind:value={ email } />
                </label>
            </div>
            
            <div class="flx-col input-container">
                <label class="lbl">
                    password
                    <input name="password" type="password"  bind:value={ password } />
                </label>
            </div>
            { /if }
            <PillButton 
                cls={ loginButtonColor }
                on:click={ loginButtonFunc }
            >{ loginButtonText }</PillButton>
        </div>

    </div>        

</div>


<style>
    .container {
        background-color: var(--light_aa);
        padding-left: 1em;
        padding-right: 2em;
        justify-content: space-between;
        gap: 0;
    }
    .content {
        /* padding-left: 1rem; */
        justify-content: space-between;
    }
    .title-block {
        min-width: 20rem;
        gap: 0;
    }
    .icon-block {
        padding: 0;
    }

	.ent {
        font-size: 1.8rem;
    }
	.wat {
        font-size: 1.8rem;
        color: var(--light);
    }
    .ch {
        font-size: 1.8rem;
        color: var(--green);
    }
	.four {
		font-size: 0.6em;
        font-weight: 300;
        color: var(--green);
	}

    .subtitle {
        margin-top: -0.3em;
        padding-bottom: 0.75em;
    }
    .data-desk {
        font-style: oblique;
        color: var(--light);
    }
    .two {
        color: var(--green);
    }
    

    .login {
        justify-content: flex-end;
        align-items: flex-end;
        padding-bottom: 1em;
        margin-right: 1em;
    }

    .input-container {
        gap: 0.25rem;
        width: 17em;
    }

    .lbl {
        font-size: 0.9rem;
    }

    input {
        color: var(--light);
        background-color: var(--dark);
        padding: 0.25rem 0.5rem;
        border-radius: 0.2rem;
		border: 0.1rem solid var(--light_a);
        width: 100%;
    }

</style>