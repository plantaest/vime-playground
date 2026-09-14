$( function () {
    const inputMethods = [
        'vi-vni',
        'vi-telex',
        'vi-viqr',
        'vi-viqr-star',
        'vi-vni-reformed',
        'vi-telex-reformed',
        'vi-viqr-reformed',
        'vi-viqr-star-reformed'
    ];

    $.ime.languages.vi = {
        autonym: 'Tiếng Việt',
        inputmethods: inputMethods
    };

    const $editor = $( '#editor' );

    $editor.ime( {
        showSelector: false
    } );

    const ime = $editor.data( 'ime' );

    ime.setLanguage( 'vi' );
    ime.setIM( $( '#method' ).val() );
    ime.enable();

    $( '#method' ).on( 'change', function () {
        ime.setIM( this.value );
        $editor.trigger( 'focus' );
    } );

    $editor.trigger( 'focus' );
} );
