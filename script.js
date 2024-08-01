//your JS code here. If required.
document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("myModal");
    var openBtn = document.getElementById("openModal");
    var closeBtn = document.getElementsByClassName("close-modal")[0];

    openBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
