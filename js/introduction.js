$(document).ready(function () {
		
	isOnPlaylist = false;
    if (trackedFaceComplete) {
        function tapestryPickContent() {
            $('#mainContent').load('tapiserijaPick.html');
        }

        setTimeout(tapestryPickContent, 20000);
    }

    $('#videoRow').css("display", "none");
});
