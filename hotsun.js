// response nav
let bar=document.querySelector('.bar i')
let resnav=document.querySelector('.response_nav ul')
bar.addEventListener('click',()=>{
    // resnav.style.display='block';
    resnav.classList.toggle('show')
})
// bar.addEventListener('dblclick',()=>{
//     resnav.classList.toggle('.show')
//     resnav.style.display='none'
// })







// players
let mohan=document.getElementById('mohan')
let rajesh=document.getElementById('rajesh')
let mohanraj=document.getElementById('mohanraj')
let tamil=document.getElementById('tamil')
let vignesh=document.getElementById('vignesh')
let vijay=document.getElementById('vijay')
let loganathan=document.getElementById('loganathan')
let dhinakaran=document.getElementById('dhinakaran')
let kumar=document.getElementById('kumar')
let murugan=document.getElementById('murugan')
let surya=document.getElementById('surya')


let player_img=document.getElementById('player_img')
let player_name=document.getElementById('player_name')
let player_role=document.getElementById('player_role')
let player_batstyle=document.getElementById('player_batstyle')
let player_bowlstyle=document.getElementById('player_bowlstyle')


mohan.addEventListener("click",()=>{
    player_name.innerHTML='Mohan';
    player_batstyle.innerHTML='rightarm batsman';
    player_role.innerHTML='batsman'
    player_bowlstyle.innerHTML=''
    player_img.style.background='url(./project_images/mohan.jpg) top/cover';
})
rajesh.addEventListener("click",()=>{
    player_name.innerHTML='Rajesh';
    player_batstyle.innerHTML='rightarm batsman';
    player_role.innerHTML='batsman'
    player_bowlstyle.innerHTML=''
    player_img.style.background='url(./project_images/rajesh.png) center/cover' ;
})
mohanraj.addEventListener("click",()=>{
    player_name.innerHTML='Mohan raj';
    player_batstyle.innerHTML='rightarm batsman';
    player_role.innerHTML='batsman';
    player_bowlstyle.innerHTML='';
    player_img.style.background='url(./project_images/mohanraj.jpg) top/cover' ;
    })
tamil.addEventListener("click",()=>{
    player_name.innerHTML='tamil';
    player_role.innerHTML='all rounder'
    player_batstyle.innerHTML='rightarm batsman';
    player_bowlstyle.innerHTML='rightarm medium fast bowler'
    player_img.style.background='url(./project_images/tamil.jpg) top/cover' ;
})
vignesh.addEventListener("click",()=>{
    player_name.innerHTML='vignesh';
    player_role.innerHTML='all rounder'
    player_batstyle.innerHTML='rightarm batsman';
    player_bowlstyle.innerHTML='rightarm medium fast bowler'
    player_img.style.background='url(./project_images/vignesh.png) top/cover' ;
})
vijay.addEventListener("click",()=>{
    player_name.innerHTML='vijay';
    player_role.innerHTML='all rounder'
    player_batstyle.innerHTML='rightarm batsman';
    player_bowlstyle.innerHTML='rightarm fast bowler'
    player_img.style.background='url(./project_images/vijay.jpg) top/cover' ;
})
dhinakaran.addEventListener("click",()=>{
    player_name.innerHTML='dhinakaran';
    player_role.innerHTML='all rounder'
    player_batstyle.innerHTML='rightarm wicketkeeping batsman';
    player_bowlstyle.innerHTML='rightarm off break bowler'
    player_img.style.background='url(./project_images/dhinakaran.jpg) top/cover' ;
})
loganathan.addEventListener("click",()=>{
    player_name.innerHTML='loganathan';
    player_role.innerHTML='all rounder'
    player_batstyle.innerHTML='rightarm batsman';
    player_bowlstyle.innerHTML='rightarm medium fast bowler'
    player_img.style.background='url(./project_images/logu.png) top/cover' ;
})
kumar.addEventListener("click",()=>{
    player_name.innerHTML='kumar';
    player_role.innerHTML='all rounder'
    player_batstyle.innerHTML='rightarm batsman';
    player_bowlstyle.innerHTML='rightarm medium fast bowler'
    player_img.style.background='url(./project_images/kumar.jpg) top/cover';
})
murugan.addEventListener("click",()=>{
    player_name.innerHTML='murugan';
    player_role.innerHTML='all rounder'
    player_batstyle.innerHTML='rightarm batsman';
    player_bowlstyle.innerHTML='rightarm fast bowler'
    player_img.style.background='url(./project_images/murugan.png) top/cover' ;
})
surya.addEventListener("click",()=>{
    player_name.innerHTML='surya';
    player_role.innerHTML='bowler';
    player_batstyle.innerHTML='';
    player_bowlstyle.innerHTML='rightarm medium fast bowler'
    player_img.style.background='url(./project_images/surya.jpg) top/cover' ;
})

firsthalf=document.querySelector('.firsthalf')
secondhalf=document.querySelector('.secondhalf')
summary=document.querySelector('.summary')
recentscreen=document.querySelector('.recentimg')

firsthalf.addEventListener('click',()=>{
    recentscreen.src='./project_images/firsthalf.png'
})
secondhalf.addEventListener('click',()=>{
    recentscreen.src='./project_images/secondhalf.png'
})
summary.addEventListener('click',()=>{
    recentscreen.src='./project_images/matchsummary.jpg'
})