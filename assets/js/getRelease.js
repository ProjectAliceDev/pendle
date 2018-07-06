function getLatestReleases()
{
    $.getJSON("release.json", {}, function ( data ){
        // Get the stable and beta versions.
        var stableVersion = data.stable.version;
        var betaVersion = data.insider.version;
        var betaVersionBuild = data.insider.build;

        // Grab the flags.
        var checkStableReleaseFlag = data.stable.flag;
        var checkInsiderReleaseFlag = data.insider.flag;

        // Programatically generate the download links based off of a base URL.
        var baseURL = "https://github.com/TheAngelReturns/aliceos/releases/tag/";
        var stableLink = baseURL + stableVersion;
        var betaLink = baseURL + betaVersion + "beta" + betaVersionBuild;

        // Try to input the release data. Otherwise, spit out an error.
        try {
            // Find the stable button element.
            var sdl = document.getElementById('stable-dl-button');
            
            // Change the text to reflect the version number.
            sdl.innerHTML = "Download " + stableVersion;
            
            // Check to see if the flag is set to "notready"
            if (checkStableReleaseFlag == "notready") {
                // If it is, disable the button and do not add the link to the release.
                $('#stable-dl-button').addClass('is--disabled');
                $('#stable-dl-button').attr('aria-disabled', true);
            }

            // Check to see if the flag is set to "ready"
            else if (checkStableReleaseFlag == "ready") {
                // Programatically set the href to the download link based on release version.
                $('#stable-dl-button').attr('href', stableLink);
            }

            //Otherwise, spit out an error and hide the button, respectively.
            else {
                $('#stable-dl-button').hide()
                console.error("Stable flag not set properly. Should be 'ready' or 'notready'.")
            }
        } catch (error) {
            console.error(error)
        }

        // Try to input the insider release data. Otherwise, spit out an error.
        try {
            // Find the insider button element.
            var idl = document.getElementById('insider-dl-button');
            
            // Change the text to reflect the version number.
            idl.innerHTML = "Download " + betaVersion + ": Beta " + betaVersionBuild;
            
            // Check to see if the flag is set to "notready"
            if (checkInsiderReleaseFlag == "notready") {
                // If it is, disable the button and do not add the link to the release.
                $('#insider-dl-button').addClass('is--disabled');
                $('#insider-dl-button').attr('aria-disabled', true);
            }

            // Check to see if the flag is set to "ready"
            else if (checkInsiderReleaseFlag == "ready") {
                // Programatically set the href to the download link based on release version.
                $('#insider-dl-button').attr('href', stableLink);
            }

            //Otherwise, spit out an error and hide the button, respectively.
            else {
                $('#insider-dl-button').hide()
                console.error("Stable flag not set properly. Should be 'ready' or 'notready'.")
            }
        } catch (error) {
            console.error(error)
        }
    })
}