<style>
    .userform { padding:.8em 1.2em; }
    .userform h2 { color:#555; margin:0.3em 0 .8em 0; padding-bottom:.5em; border-bottom:1px solid rgba(0,0,0,.1); }
    .userform label { display:block; margin-top:1.2em; }
    .switch .ui-slider-switch { width: 6.5em !important }
    .ui-grid-a { margin-top:1em; padding-top:.8em; margin-top:1.4em; border-top:1px solid rgba(0,0,0,.1); }
</style>

<div data-role="panel" data-position="right" data-position-fixed="false" data-display="overlay" id="add-form" data-theme="b">

    <form class="userform">
        <h2>Sign Up</h2>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" value="" data-clear-btn="true" data-mini="true">

        <label for="email">Email</label>
        <input type="email" name="email" id="status" value="" data-clear-btn="true" data-mini="true">

        <label for="password">Password:</label>
        <input type="password" name="password" id="password" value="" data-clear-btn="true" autocomplete="off" data-mini="true">

        <div class="switch">
        <label for="status">Status</label>
        <select name="status" id="slider" data-role="slider" data-mini="true">
            <option value="off">Inactive</option>
            <option value="on">Active</option>
        </select>
        </div>

        <div class="ui-grid-a">
            <div class="ui-block-a"><a href="#" data-rel="close" data-role="button" data-theme="c" data-mini="true">Cancel</a></div>
            <div class="ui-block-b"><a href="#" data-rel="close" data-role="button" data-theme="b" data-mini="true">Save</a></div>
        </div>
    </form>

    <!-- panel content goes here -->
</div><!-- /panel -->