/* global Router */
Router.myRoute('/test_isotope', 'testIsotope', 'Isotopeテスト', 100, {
    onRerun: function() {
        console.log("begin isotope onRendered");
        // var iso = new Isotope( '.grid', {
        //     itemSelector: '.grid-item',
        //     percentPosition: true,
        //     layoutMode: 'packery',  
        // });
        // $('.grid-item').resizable({
        //     autoHide: true,
        //     animate: true,
        //     animateDuration: "fast",
        //     cancel: true,
        //     ghost: true,
        //     minWidth: "80px",
        //     minHeight: "80px",
        //     stop: function(event, ui) {
        //         iso.layout();
        //     },
        // })
        console.log("end   isotope onRendered");
    },
});
