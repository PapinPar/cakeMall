/**
 * Created by Grass on 17.11.2015.
 */
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 200) {
        $('.navbar-default').css('display', 'block');
        $('.navbar-default').addClass('fixed-to-top');
    } else if (scrollTop == 0) {
        $('.navbar-default').removeClass('fixed-to-top');
    }
});
var buttons = document.getElementsByClassName("info-button");
var click = function click(v){
    var child =this.offsetParent.firstElementChild.lastElementChild;

    if(child.style.display === "none"|| child.style.display === "")
        child.style.display = "inline-block";
    else
        child.style.display ="none";
}

for(var i = 0 ; i < buttons.length;i++ )
    buttons[i].onclick  = click;


