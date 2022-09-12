let windowScreenWidth = window.document.body.clientWidth

document.body.onresize = function ({target}) {
    console.log(target)
    windowScreenWidth = target.innerWidth
}

$(window).resize(function ({target}) {
    windowScreenWidth = target.innerWidth
    $('#textCont').css('right' , windowScreenWidth < 1450 ? '25%' : '5%')
})



// $('#textCont').delay(500).animate({
//     right: windowScreenWidth < 1450 ? '25%' : '5%',
//     opacity: 1
// } , 800)

function show () {
    var divpos = $("#cont").offset().top;
    var interval = setInterval(function () {
        if ($(window).scrollTop() >= divpos - 650) {
            var animDelay = 0;
            $('.contChild').each(function () {
                $(this).delay(animDelay).animate({
                    opacity: 1
                }, 500);
                animDelay += 500;
            });
            $('#textCont').delay(500).animate({
                right: windowScreenWidth < 1450 ? '25%' : '5%',
                opacity: 1
            } , 800)
            console.log(windowScreenWidth)
            clearInterval(interval);
        }
    }, 250);

}



export default show;