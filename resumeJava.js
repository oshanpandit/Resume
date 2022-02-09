
var AnchorTags=document.getElementsByClassName('nav-menu');

for(var i=0;i<AnchorTags.length;i++){

    AnchorTags[i].addEventListener('click',function(event){

        event.preventDefault();

        var TargetSectionId=this.textContent.trim().toLowerCase();

        console.log(TargetSectionId);

        var TargetSection=document.getElementById(TargetSectionId);

        console.log(TargetSection);

        var interval=setInterval(function(){

          var coordinate=TargetSection.getBoundingClientRect();

          if(coordinate.top<=0){

            clearInterval(interval);

            return;
          }

          window.scrollBy(0,50);


        },20);

    });

}


// Scroll Section Ends Here
// 
// 
// 





function Initialiser(){

  for(let i=0;i<SkillsContainer.length;i++){

    SkillsContainer[i].style.width=0+"%";

  }

}


var SkillsSection=document.getElementById('skills-info');

var SkillsContainer=document.getElementsByClassName('inner');

window.addEventListener('scroll',CheckSkill);

Initialiser();

var seen=0;



function fillContainer(bar){


  let MaxWidth=bar.getAttribute('data-width');


  let CurrentWidth=0;


  let Interval=setInterval(function(){

    if(CurrentWidth > MaxWidth){

      clearInterval(Interval);

      return;
    }

    CurrentWidth++;

    bar.style.width=CurrentWidth+'%';

  },5);
  


  }





function CheckSkill(){

  let Section=document.getElementById('skills-info');

  let SectionCoordinates=Section.getBoundingClientRect();

  if(SectionCoordinates.top < window.innerHeight){

  for(let i=seen;i<SkillsContainer.length;i++){

    let bar=SkillsContainer[i];

    let barCoordinate=bar.getBoundingClientRect();

    if(barCoordinate.top < window.innerHeight){

      fillContainer(bar);

      seen++;
    
    }

  }
}

else if(SectionCoordinates.top > window.innerHeight){

  seen=0;

  Initialiser();
}

}










