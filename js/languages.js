

$(function() {

  var list_size = 6
  var v
  $.ajax({
    type: 'GET',
    url: 'https://wakatime.com/share/@garciparedes/77e78cc0-f16a-46a3-9530-8caf442652d3.json',
    dataType: 'jsonp',
    success: function(response) {
      normalizePercent(response.data.slice(0,list_size)).forEach(e => {
        $("#languagest-list").append(languajeHtml(e.name, e.percent))
      })
    },
  });

  var normalizePercent = list => {
    var sum = list.map(e => e.percent).reduce((a,b)=>a+b);
    list = list.map(function(e) {
      e.percent = e.percent/sum*100;
      return e;
    });
    return list;
  };

  var languajeHtml = (name,percent) => {
    percent = Math.ceil(percent);
    return `<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
      <div class="inner-content text-center">
        <div class="c100 p` + percent + ` grey center">
          <span>` +percent + `%</span>
          <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
          </div>
        </div>
        <h4>` + name + `</h4>
      </div>
      </div>`;
  };
});
