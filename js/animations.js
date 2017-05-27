$(document).ready(function () {
    //console.log("ready!");
    //jQuery("time.timeago").timeago();

    $(".stats").slideUp("slow");

    var myLength = 0
    var charLeft = 140;

    $("#tweet-compose").on("keyup click", function () {
        //console.log("tweet-compose keypress event");
        $("#tweet-controls").show();
        myLength = $("#tweet-compose").val().length;
        //console.log("myLength: " + myLength);
        charCountDown(myLength);
    });

    function charCountDown(charCountLen) {
        //console.log("charCountLen: " + charCountLen);
        charLeft = 140 - charCountLen
        console.log("charLeft: " + charLeft);
        $("#char-count").text(charLeft);
        if (charLeft <= 10) {
            $("#char-count").css('color', 'red');
        } else {
            $("#char-count").css('color', 'black');
        }
        if (charLeft > 140) {
            $("#tweet-submit").prop("disabled", true);
        } else {
            $("#tweet-submit").prop("disabled", false);
        }
    }
    $("#tweet-submit").click(function () {
        var newTweetString = $("#tweet-compose").val()
        prePendNewTweet(newTweetString);
        $("#tweet-compose").val("");
    });

    function prePendNewTweet(newTweetString) {
        console.log(newTweetString);
        var d = new Date();
        var tweetDivHTML = '<div class="tweet"><div class="content"><img class="avatar" src="img/richbliss.jpg"><strong class="fullname">Rich Bliss</strong>	<span class="username">@richbliss</span><p class="tweet-text">' + newTweetString + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon ßaction-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">0</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">0</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/vklimenko.jpg"><img src="img/funwatercat.jpg"></div></div><div class="time">' + d + '</div></div><div class="reply"><img class="avatar" src="img/richbliss.jpg"><textarea class="tweet-compose" placeholder="Reply to @richbliss"></textarea></div></div></div>'
        $("#stream").prepend(tweetDivHTML);
        $(".stats").slideUp("slow");
        tweetHover();
        ShowHideStats();
        $("#tweet-controls").hide();

    }

    function tweetHover() {
        $(".tweet").hover(
            function () {
                //console.log("I am hovering now...");
                $(this).find(".tweet-actions").addClass("tweetShowActions");
            }, function () {
                $(this).find(".tweet-actions").removeClass("tweetShowActions");
            }
        );
    };
    tweetHover();

    function ShowHideStats() {
        $(".tweet").click(
            function () {
                if ($(this).find(".stats").is(":hidden")) {
                    $(this).find(".stats").slideDown("slow");
                } else {
                    $(this).find(".stats").slideUp("slow");
                }
            }
        );
    };
    ShowHideStats()

});//document ready function 