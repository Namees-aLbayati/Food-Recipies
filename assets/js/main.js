
var searchButton=document.getElementById('sendRequestBtn')
searchButton.addEventListener('click',getValues);
var calories;
var hours ;
var minutes;
var healthType=document.getElementById('healthId')
var recipeQuery1=document.getElementById('recipeQuery');
var RangeEl=document.getElementById('myRange');
var _local = {};

var rangeValue=document.getElementById('rangeValue')
RangeEl.oninput = function() {
    // output.innerHTML = this.value;
    console.log('range',this.value)
rangeValue.innerHTML=this.value
 calories=this.value

  }
  console.log(document.getElementById('timePrep'))
  var timePreper=document.getElementById('timePrep');
  timePreper.oninput=function(){
    var time=this.value;
     hours = Math.floor(time / 60);  
     minutes = time % 60;
  var total=hours + ":" + minutes+"  hh:mm"; 
  
document.getElementById('prepValue').innerHTML=total

  }



 function createCards(data){
    console.log(data.hits,'j')

// var container2EL=document.getElementById('container2');
// for(var i=0;i<data.hits.length;i++){
//     console.log(i,data.hits[i].recipe.images.REGULAR)
//     var div1=document.createElement('div')
//     div1.className='card'//image.classlist.add
    
//     div1.setAttribute('style','width:18rem')
//     var img=document.createElement('img')
//     img.className='card-img-top'//image.classlist.add
    
//     img.src=data.hits[i].recipe.images.REGULAR;
//     div1.appendChild(img)
    // container2.appendChild(div1)
 
{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}




}







function getValues(){
    var keyword=recipeQuery1.value
    var Catog=healthType.value
    var health=document.getElementById('exampleDataList').value;
    var cuisine=document.getElementById('cuisine').value
    var meal=document.getElementById('meal').value
var timeLimit=hours*60+minutes


if(keyword&&Catog&&health&&cuisine&&meal&&timeLimit&&calories)
{
    console.log('all',keyword,Catog,health,cuisine,meal,timeLimit,calories)
fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=0d9f7dae&app_key=d3398ede5f60b649e69bc8d26a3beab6&?diet=${Catog}&health=${health}&cuisineType=${cuisine}&mealType=${meal}&calories=${calories}&time=${timeLimit}`).then((result)=>{
    return result.json()
 }).then((data)=>{
    if(data.status===404){
       
        window.alert('Something went wrong!Try Again!!')
    }
    localStorage.setItem('result',JSON.stringify(data))
    createCards(data)
   document.getElementById('resultContainer').innerHTML="<a href='index2.html'>results here</a>"


   localStorage.setItem('resultNow',JSON.stringify(data))
   
})
}else if (keyword&&Catog&&health&&cuisine&&meal){
    console.log('5',keyword,Catog,health,cuisine,meal)

    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=0d9f7dae&app_key=d3398ede5f60b649e69bc8d26a3beab6&?diet=${Catog}&health=${health}&cuisineType=${cuisine}&mealType=${meal}&calories=2000&time=30`).then((result)=>{
        return result.json()
     }).then((data)=>{
        if(data.status===404){
           
            window.alert('Something went wrong!Try Again!!')
        }
              createCards(data)

              document.getElementById('resultContainer').innerHTML="<a href='index2.html'>results here</a>"
             

              localStorage.setItem('resultNow',JSON.stringify(data))

     })


}



else if (keyword&&Catog&&health&&cuisine){
    console.log('4',keyword,Catog,health,cuisine)

    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=0d9f7dae&app_key=d3398ede5f60b649e69bc8d26a3beab6&?diet=${Catog}&health=${health}&cuisineType=${cuisine}&calories=50-1000&time=60`).then((result)=>{
        return result.json()
     }).then((data)=>{
        if(data.status===404){
           
            window.alert('Something went wrong!Try Again!!')
        }
              createCards(data)

              document.getElementById('resultContainer').innerHTML="<a href='index2.html'>results here</a>"
              localStorage.setItem('resultNow',JSON.stringify(data))

     })


}else if(keyword&&Catog&&health){

    console.log('3',keyword,Catog,health)

    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=0d9f7dae&app_key=d3398ede5f60b649e69bc8d26a3beab6&diet=${Catog}&health=${health}&calories=50-1000&time=60`).then((result)=>{
        return result.json()
     }).then((data)=>{
        if(data.status===404){
           
            window.alert('Something went wrong!Try Again!!')
        }
       console.log('fetch result for  3',data)
              createCards(data)

              document.getElementById('resultContainer').innerHTML="<a href='index2.html'>results here</a>"
              localStorage.setItem('resultNow',JSON.stringify(data))

     })



}else if(keyword&&Catog||(cuisine||meal||calories||timeLimit)){


console.log('here or',keyword,Catog,cuisine,meal,calories,timeLimit)

var newHttp=[`https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=0d9f7dae&app_key=d3398ede5f60b649e69bc8d26a3beab6&diet=${Catog}`];

var newHttp2=[]
if(cuisine){

    newHttp2.push(`&cuisineType=${cuisine}`)
}if(meal){
    newHttp2.push(`&mealType=${meal}`)

}if(calories){
    newHttp2.push(`&calories=${calories}`)

}if(timeLimit){
    newHttp2.push(`&time=${timeLimit}`)

}

var stringData=newHttp2.toString();


var lastHttp=stringData.replaceAll(',','')

console.log('check api url',newHttp+lastHttp)
fetch(newHttp+lastHttp).then((result)=>{
        return result.json()
     }).then((data)=>{
      if(data.status===404){
           
            window.alert('Something went wrong!Try Again!!')
     }
     createCards(data)

     document.getElementById('resultContainer').innerHTML="<a href='index2.html'>results here</a>"
     localStorage.setItem('resultNow',JSON.stringify(data))


    })
    




}else if(keyword){
console.log('1',keyword)


    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=0d9f7dae&app_key=d3398ede5f60b649e69bc8d26a3beab6
    `).then((result)=>{
        return result.json()
     }).then((data)=>{
        if(data.status===404){
           
            window.alert('Something went wrong!Try Again!!')
        }
       console.log('fetch result for  1',data)    
          createCards(data)
          document.getElementById('resultContainer').innerHTML="<a href='index2.html'>results here</a>"
          localStorage.setItem('resultNow',JSON.stringify(data))


     })

}
else{
    window.alert('you have to choose one item at least')
}

}

