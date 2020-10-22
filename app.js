let p1 = document.querySelector('.json1');
let p2 = document.querySelector('.json2');
let p3 = document.querySelector('.json3');
let p4 = document.querySelector('.json4');
let name = document.querySelector('#name');
let input = document.querySelector('#search');
let button = document.querySelector('#gen');
let image = document.querySelector('.img');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let body = document.querySelector('.json');
let i = 0;
let n;

plus.addEventListener('click',function(){
    if(!name.innerHTML){
        name.innerHTML++;
        fetch('https://pokeapi.co/api/v2/pokemon/' + name.innerHTML 

        ).then(response => {
            return response.json();
        }).then(json => {
             console.log(json);
             name.innerHTML =  json.id;
             image.src = json.sprites.front_default;
             image.width = 200;
       
            p1.innerHTML = "Name:" + json.name;
             p2.innerHTML = 'Type:' + json.types[0].type.name
           
             p3.innerHTML = "Move 1:" + json.moves[0].move.name;
             p4.innerHTML = "Move 2:" + json.moves[5].move.name;
         });  
    }else{
           i = parseInt(name.innerHTML);
           if(isNaN(i) == true){
               i = 0;
               i++;
           }else{    
           i++;
           }
           fetch('https://pokeapi.co/api/v2/pokemon/' + i 

          ).then(response => {
          return response.json();
          }).then(json => {
         console.log(json);
         name.innerHTML =  json.id;
         image.src = json.sprites.front_default;
         image.width = 200;
   
         p1.innerHTML = "Name:" + json.name;
         p2.innerHTML = 'Type:' + json.types[0].type.name
       
         p3.innerHTML = "Move 1:" + json.moves[0].move.name;
         p4.innerHTML = "Move 2:" + json.moves[5].move.name;
         });  
    }
});


minus.addEventListener('click',function(){
    if(!name.innerHTML){
        name.innerHTML--;
        fetch('https://pokeapi.co/api/v2/pokemon/' + name.innerHTML 

        ).then(response => {
            return response.json();
       }).then(json => {
           console.log(json);
           name.innerHTML =  json.id;
           image.src = json.sprites.front_default;
           image.width = 200;
       
           p1.innerHTML = "Name:" + json.name;
           p2.innerHTML = 'Type:' + json.types[0].type.name
           
           p3.innerHTML = "Move 1:" + json.moves[0].move.name;
           p4.innerHTML = "Move 2:" + json.moves[5].move.name;
         });  
        }else{
             i = parseInt(name.innerHTML);    
             i--;
             fetch('https://pokeapi.co/api/v2/pokemon/' + i 

             ).then(response => {
                return response.json();
             }).then(json => {
                 console.log(json);
                 name.innerHTML =  json.id;
                 image.src = json.sprites.front_default;
                 image.width = 200;
                 
   
                p1.innerHTML = "Name:" + json.name;
                 p2.innerHTML = 'Type:' + json.types[0].type.name
       
                 p3.innerHTML = "Move 1:" + json.moves[0].move.name;
                   p4.innerHTML = "Move 2:" + json.moves[5].move.name;
                 });  
             }
});

button.addEventListener('click', function(){
    n = input.value;
    input.value ='';  
    fetch('https://pokeapi.co/api/v2/pokemon/' + n 

 ).then(response => {
     return response.json();
}).then(json => {
    console.log(json);
    name.innerHTML =  json.id;
    image.src = json.sprites.front_default;
    image.width = 200;

    p1.innerHTML = "Name:" + json.name;
    p2.innerHTML = 'Type:' + json.types[0].type.name
    
    p3.innerHTML = "Move 1:" + json.moves[0].move.name;
    p4.innerHTML = "Move 2:" + json.moves[5].move.name;



  }).catch((err) => {
   name.innerHTML = 'Not found';   
  console.log('error');
  }); 
});




  