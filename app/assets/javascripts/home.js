!function(){
  
  function ConnectFour() {

    this.initialize = function(){
      $('.grid').on('click','.column', this.dropToken)
    }

    this.dropToken = function(){
      $(this).find('.unfilled').last().addClass('red')
      $(this).find('.unfilled').last().removeClass('unfilled')
    }

    this.initialize();
  }

  $(document).ready(function(){
    game = new ConnectFour();
  });

}();