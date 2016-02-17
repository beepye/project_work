
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Adopt a Tree</title>
        <link rel="stylesheet"  href="http://jquerymobile.com/demos/1.3.0-beta.1/css/themes/default/jquery.mobile-1.3.0-beta.1.css">
        <link rel="stylesheet" href="http://jquerymobile.com/demos/1.3.0-beta.1/docs/demos/_assets/css/jqm-demos.css">
        <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
        <script src="http://jquerymobile.com/demos/1.3.0-beta.1/js/jquery.mobile-1.3.0-beta.1.js"></script>

    </head>
    <body>
        <div data-role="page" class="ui-responsive-panel">

            <div data-role="header" data-theme="f">
                <h1>Adopt a Tree</h1>
                <a href="#nav-panel" data-icon="bars" data-iconpos="notext">Menu</a>
                <a href="#add-form" data-icon="plus" data-iconpos="notext">Add</a>
            </div><!-- /header -->
            <div data-role="content">
                <h2>Panel: Menu + form</h2>

                <p>This is a typical page that has two buttons in the header bar that open panels. The left button opens a left menu with the reveal display mode. The right button opens a form in a right overlay panel.</p>

                <p>Since the panel links are in the top bar, there really isn't a need for the fixed positioning feature on the panel since you will always be scrolled to the top of the page. The fixed positioning impacts animation smoothness so it's off in this demo (<code>data-position-fixed="false"</code>) and the panel will scroll with the page.</p>

                <p>To make this responsive, the left panel stays open and causes the page to re-flow at wider widths. This allows both the menu and page to be used together when more space is available. This behavior is controlled by CSS media queries. You can create a custom one for a specific breakpoint or use the breakpoint preset by adding the <code> class="ui-responsive-panel"</code> to the page container.</p>

            </div><!-- /content -->

            <div class="jqm-footer">
                <p class="jqm-version"></p>
                <p>&copy; 2010, 2013 jQuery Foundation and other contributors</p>
            </div><!-- /jqm-footer -->

            <!-- Global Nav Include Here -->
            <?php include( 'global-nav.php' ); ?>

            <!-- Generic Form Here -->
            <?php include( 'form.php' ); ?>

        </div><!-- /page -->
    </body>
</html>
