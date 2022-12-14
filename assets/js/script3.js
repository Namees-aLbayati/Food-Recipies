var a=localStorage.getItem('second')
var aArray=a.split(',')
function delLocal(){
    var dataEL=this.getAttribute("data-id")

    console.log(dataEL)

    var data=localStorage.getItem('second');
    var dataStr=data.split(",");
    for( var i = 0; i < dataStr.length; i++){ 
    
        if ( dataStr[i] == dataEL ) { 
    
            dataStr.splice(i, 1); 
        }
    
    }
    localStorage.setItem('second',dataStr)
window.alert('this recipe has been deleted successfully✂️✂️✂️🥴')
window.location.reload()

}


function favList(){

for(var i=0;i<aArray.length;i++){
var recId=aArray[i]
fetch(`https://api.edamam.com/api/recipes/v2/${recId}?type=public&app_id=0d9f7dae&app_key=d3398ede5f60b649e69bc8d26a3beab6`).then((res)=> res.json()).then((data)=>{
    console.log('data finalllyyy',data._links.self.href.split("/")[6].split("?")[0])
    var id=data._links.self.href.split("/")[6].split("?")[0]
    createCards(data.recipe,id)
})



}


}

favList()
function createCards(data,id){
console.log('id',id)
var container=document.getElementById('container3')




 var div1=document.createElement('div');
 div1.className="card m-3",
div1.style='width:18rem';

var image=document.createElement('img');
image.className="card-img-top";
image.src=data.image
var div2=document.createElement('div');
div2.className="card-body";

var h5=document.createElement('h5');
h5.className="card-title";
h5.textContent=data.label

var caution=data.cautions.map((data)=>{return data})

var datalab=data.dietLabels.map((data)=>{return data})
 var p=document.createElement('p');
 p.className="card-text"
p.textContent='ingredientLines'+data.ingredientLines

var p1=document.createElement('p');
 p1.className="card-text"
p1.textContent='calories'+data.calories+" ,"+"cuisineType:"+" ,"+data.cuisineType[0]+
" ,"+"cautions:"+caution.toString()+'Diet label:'+", "+datalab+", "+'dish Type:'+data.dishType[0]

var healthlab=data.healthLabels.map((data)=>{return data})
var p2=document.createElement('b');
p2.textContent='healthLabels:'+healthlab;


var p3=document.createElement('p');
p3.textContent='Extra Information for you:'+"mealType:"+data.mealType[0]+" ,"+"yield:"+data.yield+' .'



var btn=document.createElement('button');
btn.className=('btn btn-primary')
 btn.textContent='Delete from list'
 btn.setAttribute('data-id',id)
 btn.addEventListener('click',delLocal)

div2.appendChild(h5)
div2.appendChild(p)
div2.appendChild(p1)
div2.appendChild(p2)
div2.appendChild(p3)

div2.appendChild(btn)

div1.appendChild(image)
 div1.appendChild(div2)

container.appendChild(div1)



}