function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  var rank = document.querySelectorAll('.ranked-list');
  for(var i=0;i<ranks.length;i++){
    rank[i].innerHTML = parselnt(rank[i].innerHTML)+n;
  }
  return rank;
}

function deepestChild(){

}
