var fetchedData=JSON.parse(localStorage.getItem('resultNow'))
var container=document.getElementById('container2');

for(let i=0;i<fetchedData.hits.length;i++){
var imageUrl=fetchedData.hits[i].recipe.image
var dishNames=fetchedData.hits[i].recipe.label
var content=fetchedData.hits[i].recipe.ingredients.map(data=>{return data.text})
var yieldEl=fetchedData.hits[i].recipe.yield
var cusine=fetchedData.hits[i].recipe.cuisineType
    console.log(fetchedData.hits[i].recipe.cuisineType
        )
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




{/* <div class="card m-4 ">
<img src="./assets/js/background-cooking-tagliatelle-pasta-ingredients-260nw-1724611486.webp" alt="Denim Jeans" style="width:100%">
<h1>Tailored Jeans</h1>
<p class="price">$19.99</p>
<p>Some text about the jeans..</p>
<p><button>Add to Cart</button></p>
</div> */}




div1.appendChild(image)
div1.appendChild(header)
div1.appendChild(header2)
div1.appendChild(header3)

div1.appendChild(paragraphIngredint)

div1.appendChild(paragraph)

container.appendChild(div1)


}