import tabsCreator from "./tabs.js";
import show from "./show.js";

$(document).ready(function () {
    tabsCreator('travelTabs' , 'travelTabCaption', 'travelTabContent')
    tabsCreator('offersTabs' , 'offersTabCaption', 'offersTabContent')
    tabsCreator('recommended' , 'recommendedCaption', 'recommendedTabContent')
    show()

    let windowScreenWidth = window.document.body.clientWidth

    $('.carousel').jCarouselLite({
        btnNext:'.next',
        btnPrev:'.prev',
        mouseWheel:true,
        animate: true,
        visible: windowScreenWidth < 1450 ? 1 : 2,
        speed: 700,
        autoCSS:true,
        resolve: true,
        width:800
    });

    document.body.onresize = function ({target}) {
        windowScreenWidth = target.innerWidth
        $('.carousel').jCarouselLite({
            visible: windowScreenWidth < 1450 ? 1 : 2,
        });
    }
})






// $('.carousel').jCarouselLite({
//     btnGo: $('div.nav').find('button'),
// });