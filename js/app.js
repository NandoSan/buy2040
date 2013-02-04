Lungo.init({
    name: '2040',
    version: '2.1',
    resources: []
});

Lungo.Events.init({
    'tap article#first li':function(event){
        console.log('tapped li:' + $$(event.target).text());
//        load images from amazon and load carousel
        carousel_img = Lungo.Element.Carousel($$('[data-control=carousel]')[0], function(index, element) {
//            Lungo.dom("section#carousel .title span").html(index + 1);
            console.log('swipe on carousel');
        });
        Lungo.Router.section('carousel');
        
    }
});