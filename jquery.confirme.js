$.extend({
  confirme: function (opcoes){
    var defaults  = {
      width:300,
      titulo:'Confirme',
      botoes:{},
      html:''
    }
    var configs   = $.extend(defaults,opcoes);

    var div = $('<div>').appendTo('body');
    div.dialog({
      modal: true,
      width: configs.width,
      draggable: true,
      resizable: false,
      title: configs.titulo,
      buttons: configs.botoes,
      close:function(){
        div.dialog('destroy');
        div.remove();
      }
    });
    div.html(configs.html);
  }
});