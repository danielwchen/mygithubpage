/**
 * Created by Daniel on 10/12/16.
 */
var categories = ["p-cat", "d-cat", "a-cat"];
var scategories = ["p-people-s", "p-places-s", "p-events-s", "p-art-s", "p-myself-s", "p-projects-s"];

function togvis(level, id) {
    var e = document.getElementById(id);
    // if(e.style.display == 'block')
    //     e.style.display = 'none';
    // else
    e.style.display = 'block';
    if (level == "cat") {
        for (var i = 0; i < categories.length; i++) {
            if (id != categories[i]) {
                document.getElementById(categories[i]).style.display = 'none';
            }
        }
    } else if (level == "scat") {
        for (var i = 0; i < scategories.length; i++) {
            if (id != scategories[i]) {
                document.getElementById(scategories[i]).style.display = 'none';
            }
        }
    }


}

function initpage() {
}

initpage();

var $w = $(window);

$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#nav');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});

var scrollTop = $w.scrollTop();
var shouldBeFixed = scrollTop > navHomeY;
if (shouldBeFixed && !isFixed) {
    nav.css({
        position: 'fixed',
        top: 0,
        left: nav.offset().left,
        width: nav.width()
    });
    isFixed = true;
}
else if (!shouldBeFixed && isFixed)
{
    nav.css({
        position: 'static'
    });
    isFixed = false;
}
