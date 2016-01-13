function go (DATA) {

  var translateReddit = function(linkJSON){

    var a = [];

    var translateRedditRecursive = function(replies){
      if(! replies)
        return;

      var children = replies.data.children;
      for(var i = 0; i < children.length; ++i){
        if(!children[i].data.body)
          continue;
        translateRedditRecursive(children[i].data.replies)
        delete children[i].replies;
        children[i].data.parent_id = children[i].data.parent_id.substr(3);
        a.push(children[i].data);
      }

    }

    var first = linkJSON[0].data.children[0].data;

    if(!!first.selftext)
      first.body = first.selftext;
    else
      first.body = first.url

    delete first.score;
    a.push(first);

    translateRedditRecursive(linkJSON[1]);

    return a;
  }

  var onmouseover = function(data){
    console.log(data);
    d3.select("#body-text").text(data.body);
    $("#body-text").linkify();
    d3.select("#author-text").text(data.author);
    d3.select("#author-score").text(data.score + " points ");
    if(data.replies.data !== undefined){
      d3.select("#author-vigor").text(data.replies.data.children.length + " vigor");
    } else {
      d3.select("#author-vigor").text(" No vigor");
    }
  }

  var redditmap = {
    target_id:"parent_id",
    _id:"id",
    value:"score"
  }

  var wWidth = window.innerWidth;
  var wHeight = window.innerHeight;

  var body = d3.select("body");

  body
    .append("svg")
      .attr("id", "graph")
      .attr("width", wWidth * .6)
      .attr("height", wHeight * .98)
      .attr("style", "float:right;")

  var infoContainer = body
    .append("div")
      .attr("width", wWidth * .4);

  var viewer = infoContainer.append("div")
    .attr("id", "viewer")

  viewer
    .append("span")
      .attr("id", "author-text")
  viewer
    .append("span")
      .attr("id", "author-score")

  viewer
    .append("span")
      .attr("id", "author-vigor")

  viewer
    .append("p")
      .attr("id", "body-text");

  // var nebula = new Nebula("#graph", 800, 600, onmouseover, testdata);
  nebula = new Nebula("#graph", 800, 600, onmouseover, translateReddit(DATA), redditmap);
}

function stop() {
  d3.selectAll("svg > *").remove();
  $('#graph + div').remove();
  $('#graph').remove();
}
