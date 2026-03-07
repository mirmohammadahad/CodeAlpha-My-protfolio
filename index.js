// Typing Animation
const text = ["Frontend Developer","Web Designer","JavaScript Developer"];
let i=0,j=0,current="",isDeleting=false;

function type(){
  current=text[i];
  if(!isDeleting){
    document.querySelector(".typing").textContent=current.substring(0,j++);
  } else {
    document.querySelector(".typing").textContent=current.substring(0,j--);
  }
  if(j==current.length){isDeleting=true;setTimeout(type,1000);return;}
  if(j==0){isDeleting=false;i++;if(i==text.length)i=0;}
  setTimeout(type,100);
}
type();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});