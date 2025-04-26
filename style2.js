window.addEventListener('popstate', function (event) {
    if (event.state && event.state.page === "lyrics") {
        loadLyrics();
    } else {
        if (condition == "lyrics") {
            closeLyrics();
            if (backtheme == "explore") {
                condition = "explore";
                history.pushState({page:"explore"}, "explore", "#explore.html");

            } else if (backtheme == "likes") {
                condition = "likes";
                history.pushState({page:"likes"}, "likes", "#likes.html");
            }
            else if(backtheme == "premium") {
                condition = "pre";
                history.pushState({page:"premium"}, "premium", "#premium.html");

            };

        };
    };

    if (event.state && event.state.page === "explore") {
        ExploreLoader();
    } else {
        if (condition == "explore") {
            ExploreCloser();
            HomeLoader();
        };
    };

    if (event.state && event.state.page === "likes") {
        likesLoader();
    } else {
        if (condition == "likes") {
            likesCloser();
            HomeLoader();
        };
    };

    if (event.state && event.state.page === "premium") {
        PreLoader();
    } else {
        if (condition == "pre") {
            PreCloser();
            HomeLoader();
        };
    };

});


