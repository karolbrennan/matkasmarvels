/* Scroll to point */
$('#download-button, a:not(".buynow")').on('click touchstart', scrollToPoint);

function scrollToPoint(){
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('*[data-anchor="' + scrollAnchor + '"]').offset().top;
    $('body, html').animate({
        scrollTop: scrollPoint
    }, 500);
    return false;
}


$('.buynow').on('click touchstart', openModal);

function openModal(e) {
    console.log(this);
}
