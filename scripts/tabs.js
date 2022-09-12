function tabsCreator(tabsClassName,tabsCaptionClassName,tabsContentClassName) {
    $('.' + tabsCaptionClassName).on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.' + tabsClassName).find('.' + tabsContentClassName)
            // .css('opacity' , 0).animate({opacity: 1} , 200)
            .removeClass('active').eq($(this).index()).addClass('active')
            .find('div > div').css('opacity' , 0).animate({opacity: 1} , 200)
        ;

    });

}


export default tabsCreator