

$(function() {
  let listSize = 8;
  let normalizePercent = list => {
    let sum = list.map(e => e.percent).reduce((a, b) => a + b);
    return list.map(e => {
      e.percent = e.percent / sum * 100;
      return e;
    });
  };

  let languajeHtml = (name, percent) => {
    percent = Math.round(percent);
    return `<div class="col-xs-6 col-sm-4 col-md-3">
      <div class="inner-content text-center">
        <div class="c100 p` + percent + ` grey center">
          <span>` + percent + `%</span>
          <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
          </div>
        </div>
        <h4>` + name + `</h4>
      </div>
      </div>`;
  };

  $.ajax({
    type: 'GET',
    url: 'https://wakatime.com/share/@garciparedes/640d0e3d-94f8-4f2d-a710-aa82ce9f9e4d.json',
    dataType: 'jsonp',
    success: function(response) {
      if (response.data !== undefined && response.data.constructor === Array) {
        normalizePercent(response.data.filter(a => a.name != "Other").slice(0, listSize)).forEach(e => {
          $("#languages-list").append(languajeHtml(e.name, e.percent));
        });
      } else {
        $.ajax(this);
      }
    },
  });
});
