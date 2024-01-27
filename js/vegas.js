
// スライド設定
setTimeout(function () {
  $("#mainimg").vegas({
    slides: [
      { src: "./images/citys/city01.jpeg" }, //1枚目の写真指定   /Users/mactuve/dev/git/asterweb/images/citys/city01.jpeg
      { src: "./images/citys/city02.jpeg" }, //2枚目の写真指定
      { src: "./images/citys/city03.jpeg" }, //3枚目の写真指定
      { src: "./images/citys/city04.jpeg" }, //3枚目の写真指定
    ],
    overlay: true, //写真上にドットを重ねる。不要ならこの１行を削除して下さい。
    transition: "blur", //https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
    animation: "kenburns", //https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
    delay: 900, //次の画像を表示するまでの時間
    animationDuration: 20000, //アニメーション間の引き継ぎタイミング。
  });
}, 300); //0.3秒遅れてスライドショーがスタート
