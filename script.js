    document.onmousedown = disableclick;
    status = "Bouton droit est désactiver";
    function disableclick(e) {
        if (event.button == 2) {
            alert(status);
            return false;
        }
    }

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
