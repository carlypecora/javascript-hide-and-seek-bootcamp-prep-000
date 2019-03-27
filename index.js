function getFirstSelector(selector){
  return document.querySelector("selector")
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
 var lis = document.querySelectorAll(".ranked-list li")
 for(var i = 0; i < lis.length; i++){
   lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
 }
}

function deepestChild(){
  var nests = document.querySelectorAll("#grand-node div")
  for(var i = 0; i < nests.length; i++){
    if(nests[i].children.length === 0){
      return nests[i]
    }
  }
}