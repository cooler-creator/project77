var namearray=[];
function getparagraph1(){
    for (var j=1; j<=4; j++)
    {var names=document.getElementById("name_of_the_student_"+j).value;
    namearray.push(names);
    }document.getElementById("display_name_with_commas").innerHTML=namearray.join(" ");
}
var namearray1=[];
function getparagraph2(){
    for (var k=1; k<=4; k++)
    {var names1=document.getElementById("name_"+k).value;
    namearray1.push(names1);
    }document.getElementById("display_name_with_commas_1").innerHTML=namearray1.join(" ");
}