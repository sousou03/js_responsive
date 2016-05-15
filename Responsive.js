var gb = {};

//--------------------------------------------------
//
//  Responsive
//
//--------------------------------------------------
(function(){

  /**
   * description:<br>
   * ウィンドウ幅によって、要素の位置・サイズを調整
   * <br>
   * event：セット jquery_ready
   *
   * @memberof common
   */
  var Responsive = function($obj,list,win,notObj){

    var $target = $obj.not(notObj);

    var len = list.length;

    var W = $(window).width(),
        defW = win.def,
        maxW = win.max,
        minW = win.min,

        rate;

        rate = W / defW;

    function getDef() {

      $target.each(function(index) {

        for (var i = 0; i < len; i++) {

          var val = parseInt($(this).css(list[i]));
          $(this).data(list[i],val);

        };

      });

    }

    function setVal() {

      $target.each(function(index) {

        for (var i = 0; i < len; i++) {

          var str = list[i];

          $(this).css(list[i],$(this).data(list[i]) * rate);

        };

      });

    }

    function update() {

      W = $(window).width();
      if (W > maxW) W = maxW;
      if (W < minW) W = minW;
      rate = W / defW;

    }

    function setEvents() {

      $(window).on('resize orientationchange', function(event) {

        update();
        setVal();

      });

    }

    function main() {

      setEvents();
      getDef();
      update();
      setVal();

    }

    main();

  }

  // 公開api
  gb.Responsive = Responsive;

}());