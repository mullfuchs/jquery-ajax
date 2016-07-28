var dFlavors = [];
var index = 0;
var isRunning = true;

$.get('http://api.doughnuts.ga/doughnuts', {
}).done(function(data){
  console.log(data);
  insertDonughts(data);
});

function insertDonughts(data){
  for(var i = 0; i < data.length; i++){
    dFlavors.push(data[i]);
  }
}

setInterval(function() {
  if(isRunning){
    printFlavors(dFlavors[index]);
    index++;
  }
}, 1500);

function printFlavors(data){
  $("#container").html("<h3>"+data.flavor+"</h3>");
}

$('#pause').on('click', function(){
  isRunning = !isRunning;
});