//eachTextAnimeにappeartextというクラスをつける
function EachTextAnimeControl(){
    $('.eachTextAnime').each(function(){
        var elemPos = $(this).offset().top -50;
        var scroll = $(window).scrollTop();
        var windowHeight =$(window).height();
        if(scroll>=elemPos - windowHeight){
            $(this).addClass("appeartext");
        }else{
            $(this).removeClass("appeartext");
        }
    });
}
//画面がスクロールしたら動く
$(window).scroll(function(){
EachTextAnimeControl();
})

//画面が読み込まれたらすぐ動く
$(window).on('load',function(){
    //spanタグ追加
    var element = $(".eachTextAnime");
    element.each(function(){
        var text = $(this).text();
        var textbox ="";
        text.split('').forEach(function(t,i){
            if(t!==""){

                    textbox += '<p style="animation-delay:.' + i + 's;">'+ t + '</p>';
            
            }else{
                textbox+=t;
            }
        });
        $(this).html(textbox);
    });
    EachTextAnimeControl();
});