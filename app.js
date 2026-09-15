$( function () {
    const inputMethods = [
        'vi-telex',
        'vi-telex-simple',
        'vi-vni',
        'vi-viqr',
        'vi-viqr-star',
        'vi-telex-reformed',
        'vi-telex-simple-reformed',
        'vi-vni-reformed',
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
