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