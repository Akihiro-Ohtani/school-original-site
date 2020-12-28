 //ページトップボタン
 $(document).ready(function() {
   
 
      var scrollTop = $(".scrollTop");
 
      $(window).scroll(function() {
        var topPos = $(this).scrollTop();
 
        if (topPos > 100) {
          $(scrollTop).css("opacity", "1");
 
        } else {
          $(scrollTop).css("opacity", "0");
        }
 
      }); 
 
      $(scrollTop).click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 800);
        return false;
 
      }); 
 
    }); 
//ページトップボタンend
    
    
  
//IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayer = [];
var ytData = [
	{
		id: 'JImjAlqtHnE', 
		area: 'movie_content01', 
	},
	{
		id: 'JImjAlqtHnE', 
		area: 'movie_content02', 
	},
	{
		id: 'JImjAlqtHnE',  
		area: 'movie_content03', 
	},
	{
		id: 'JImjAlqtHnE', 
		area: 'movie_content04', 
	}
];

//YouTubeの埋め込み
function onYouTubeIframeAPIReady() {
	for (var i = 0; i < ytData.length; i++) {
		ytPlayer[i] = new YT.Player(ytData[i]['area'], {
			width: 800,
			height: 450,
			videoId: ytData[i]['id'],
			playerVars: {
				rel: 0, 
				modestbranding: 1 
			}
		});
	}
}
//YouTubeの埋め込みend

//フェードイン
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});
//フェードイン　end