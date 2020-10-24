//onメソッドでアコーディオン作成
$(function(){
    $('.hoby-name1').on('click', function() {
      $('.answer1').slideToggle(500);                     　//スライドを開け閉めする
    });
});

$(function(){
    $('.hoby-name2').on('click', function() {
      $('.answer2').slideToggle(500);　　　　　　　　　　　　　　//スライドを開け閉めする
    });
});


//何かの処理を実行する
$(document).ready(function(){
    $('.next').click(function() {                             //nextボタンを押したとき
        var $displaySlide = $('.active');                     //現在表示中のスライドを取得
        $displaySlide.removeClass('active');                  //そのスライドからactiveクラスを除いて表示されないようにする
        $displaySlide.next().addClass('active');              //次のスライドにactiveクラスをつけ、表示させる。
        toggleChangeBtn();                                    //nextボタンを隠すか判断
    });

    $('.prev').click(function() {                             //prevボタンを押したとき
       var $displaySlide = $('.active');                      //現在表示中のスライドを取得
       $displaySlide.removeClass('active');                   //そのスライドからactiveクラスを除いて表示されないようにする。
       $displaySlide.prev().addClass('active');               //前のスライドにactiveクラスをつけ、表示させる。
       toggleChangeBtn();                                     //prevボタンを隠すか判断
    });


    function toggleChangeBtn() {
        var slideIndex = $('.slide').index($('.active'));    //activeクラスがついている要素(現在表示中のスライド)のindexを取得
        $('.button').show();                                 //両方のボタンを表示
        if(slideIndex == 0){                                 //一番最初の要素が表示されているとき
            $('.prev').hide();                               //prevボタンを隠す。
        }else if(slideIndex == $('.slide').length - 1){      //一番最後の要素が表示されているとき
            $('.next').hide();                               //nextボタンを隠す。
        };
    };

    toggleChangeBtn();

    
});

