var fetchedData=JSON.parse(localStorage.getItem('resultNow'))
var container=document.getElementById('container2');
var button1;
var calArray=[]
var saveArr=[]
var localArray = [];


// document.getElementById('addLisrBtn').addEventListener('click',()=>{
//     alert('hh')
// })
function addFun(){
    window.alert('j')
}

function reload(){
    window.location.reload()

}

function myFun(e){
   
    var recipeMain=this.getAttribute('data-recipeID')

    var calArray=this.getAttribute('data-id')
    var cusVal=this.getAttribute('data-cu')
    var dataIngr=this.getAttribute('data-tt')
    var dataHea=this.getAttribute('data-hea')
    var p2=document.createElement('b');
    p2.textContent="health label:"
    var p3=document.createElement('h9');
    p3.textContent=dataHea
    var ingrr=document.createElement('b');
        ingrr.textContent="Ingredient :"
        var ingrPar=document.createElement('p');
        ingrPar.textContent=dataIngr;

    var dataLabel=this.getAttribute('data-label')
    var cautionVal=[this.getAttribute('data-caution')]
    var nameTit=[this.getAttribute('data-name')]
    var gris=this.getAttribute('data-Try')

var image=document.createElement('img')
image.src=gris
    document.getElementById('exampleModalLabel').textContent=nameTit
    var healthLabe=this.getAttribute('data-health');

    var modalContai=document.getElementById('modalContainer');
    var calModal=document.createElement('p');

var dataLabel1=document.createElement("h6")
dataLabel1.textContent="Diet label:"+dataLabel

var healthLab1=document.createElement("p")
dataLabel1.textContent="Health label:"+healthLabe



    calModal.textContent='Full calories:'+Math.floor(calArray)+' KCAL';
    var UL=document.createElement('ul');

    if(cautionVal[0]!==''){

   for(let j=0;j<cautionVal.length;j++){
    const li=document.createElement('li');
    li.textContent=cautionVal[j]+".";
    UL.textContent='Caution: '
    UL.style='font-weight:bolder;color:red'
    UL.appendChild(li)
   }
}else{

    const li=document.createElement('li');
    
    UL.textContent='Caution: '
    li.textContent='no item found'
    UL.appendChild(li)


}
var button2=document.createElement('button');

button2.textContent='Add to your list';
button2.setAttribute('data-use',recipeMain)
button2.className='btn'




button2.addEventListener('click',()=>{
    console.log(this.dataset.recipeid)
    var b=this.dataset.recipeid
    var existing = localStorage.getItem('second');
    var data = existing ? existing +","+ b : b;
    localStorage.setItem('second', data);

window.alert('added to your list')

   



})


var space=document.createElement('p')
space.className='m-5'


document.getElementById('foot').appendChild(button2)
modalContai.appendChild(ingrr)
modalContai.appendChild(ingrPar)

   modalContai.appendChild(dataLabel1)
   
    modalContai.appendChild(calModal)
    modalContai.appendChild(UL)
    modalContai.appendChild(healthLab1)
   modalContai.appendChild(p2)
   modalContai.appendChild(p3)
modalContai.appendChild(space)
   modalContai.appendChild( image)
   return

   }






for(let i=0;i<fetchedData.hits.length;i++){
    console.log(fetchedData.hits[i]._links.self.href.split("/")[6].split("?")[0])
var imageUrl=fetchedData.hits[i].recipe.image
var dishNames=fetchedData.hits[i].recipe.label
var content=fetchedData.hits[i].recipe.ingredients.map(data=>{return data.text})
var yieldEl=fetchedData.hits[i].recipe.yield
var cusine=fetchedData.hits[i].recipe.cuisineType
var healthLabel=fetchedData.hits[i].recipe.healthLabels
var dietLabel=fetchedData.hits[i].recipe.dietLabels
var calory=fetchedData.hits[i].recipe.calories
var caution=fetchedData.hits[i].recipe.cautions
    
    var div1=document.createElement('div');
    div1.classList.add('card','m-4','w-25')

    var image=document.createElement('img');
    image.setAttribute('style','width:100%')
   image.setAttribute('src',fetchedData.hits[i].recipe.image)
var header=document.createElement('h5');
header.textContent=dishNames


var header2=document.createElement('h7');
header2.setAttribute("style",'background-color:skyblue')
header2.textContent="Yield: "+yieldEl

var header3=document.createElement('h7');
header3.setAttribute("style",'background-color:skyblue;padding:5px;font-weight:bolder')
header3.textContent="Cuisine Type: "+cusine

var paragraphIngredint=document.createElement('h6');

paragraphIngredint.textContent="Ingrident:"
var paragraph=document.createElement('p');
paragraph.textContent=fetchedData.hits[i].recipe.ingredientLines.map(data=>{return data})

var p2=document.createElement('b');
p2.textContent="health label:"
var p3=document.createElement('h9');
p3.textContent=healthLabel


 button1=document.createElement('button');
button1.textContent='Read More Info';
button1.setAttribute('class','btn btn-primary')
button1.setAttribute('data-bs-toggle','modal');
button1.setAttribute('data-bs-target','#exampleModal')
button1.setAttribute('data-recipeID',fetchedData.hits[i]._links.self.href.split("/")[6].split("?")[0])

button1.setAttribute('data-id',fetchedData.hits[i].recipe.calories)
button1.setAttribute('data-caution',fetchedData.hits[i].recipe.cautions)
button1.setAttribute('data-label',fetchedData.hits[i].recipe.dietLabels)
button1.setAttribute('data-name',fetchedData.hits[i].recipe.label)
button1.setAttribute('data-health',fetchedData.hits[i].recipe.healthLabels)
button1.setAttribute('data-Try',fetchedData.hits[i].recipe.images.REGULAR.url);
button1.setAttribute('data-tt',fetchedData.hits[i].recipe.ingredientLines);
button1.setAttribute('data-cu',fetchedData.hits[i].recipe.cuisineType);
button1.setAttribute('data-hea',fetchedData.hits[i].recipe.healthLabels);
button1.addEventListener('click',myFun)

div1.appendChild(image)
div1.appendChild(header)
div1.appendChild(header2)
div1.appendChild(header3)

div1.appendChild(paragraphIngredint)

div1.appendChild(paragraph)
// div1.appendChild(p3)
div1.appendChild(button1)


container.appendChild(div1)




}




