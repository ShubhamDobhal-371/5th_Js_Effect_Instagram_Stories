var arr =[{
    dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" ,
    story:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
},{
    dp:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" ,
    story:"https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
},{
    dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" ,
    story:"https://media.istockphoto.com/id/1482877935/photo/beautiful-woman.jpg?s=1024x1024&w=is&k=20&c=zRp4l3vbspQy9K_gQ6T-g9pyys4Iato669nRzCdUcEg="
},{
    dp:"https://media.istockphoto.com/id/665842822/photo/just-as-gorgeous-as-always.jpg?s=612x612&w=0&k=20&c=uquYr2FqKcXzjoBHxjIwt6qx7APMfkzkt59dibHu6fw=" ,
    story:""
},{
    dp:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" ,
    story:"https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
},];

var str=document.querySelector(".storiyan")
var clutter ="";
arr.forEach(function(item,idx){
    clutter+=`<div class="story">
    <img id="${idx}"src="${item.dp}">
</div>`;

})

str.innerHTML=clutter

str.addEventListener("click",function(dets){
    
    document.querySelector(".full-screen").style.display= "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function () {
        document.querySelector(".full-screen").style.display= "none"
        
    },3000)

})