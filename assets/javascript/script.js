var topics = ["Texas","California","Florida","New York","Colorado"];
    function makeButtons(){ 
        $('#viewButtons').empty();

        for (var i = 0; i < topics.length; i++){

            var b = $('<button>');
            b.addClass('state');
            b.attr('data-name', topics[i]);
            b.text(topics[i]);
            $('#viewButtons').append(b);    
        }
    }

    function getGifts(){
        var state = $(this).data('name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + state + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({ url: queryURL, method: 'GET'})
            .done(function(response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var stateDiv = $("#giphy").append('<div>');
                var ratingData = results[i].rating;
                var rating = $(stateDiv).append('<div>');
                rating.append('<h5>Rating: ' + ratingData + '</h5>');
                var stateData = results[i].slug;
                var image = $('<img>')
                rating.append(image);

                image.addClass('stateImage').attr('src', results[i].images.fixed_height_still.url).attr('data-state', 'still').attr('data-animate', results[i].images.fixed_height.url).attr('data-still', results[i].images.fixed_height_still.url);
            }
        });
    }


    $('#addState').on('click', function(){  
        var stateInput = $('#searchInput').val().trim();
        topics.push(stateInput);
        makeButtons();
        return false;

    })

    $(document).on('click', '.stateImage', function(){
        var state = $(this).attr('data-state')

            if (state === 'animate') {
                $(this).attr('src', $(this).attr('data-still'));
                $(this).attr('data-state', 'still');
            } else if (state !== 'animate') {
                $(this).attr('src', $(this).attr('data-animate'));
                $(this).attr('data-state', 'animate');
            }
    });

    makeButtons();
    $(document).on('click', '.state', getGifts);