// クリック
jQuery( function() {
	jQuery( document ).on( 'click', '.trigger', function() {
		jQuery( this ).toggleClass('active');
        jQuery('#main_menu').addClass('active');

	} );
    jQuery( document ).on( 'click', '.trigger.active', function() {
		jQuery( this ).removeClass( 'active' );
        jQuery('#main_menu').removeClass('active');
	} );
} );