/* the first quiz  how to show full name */

 let printFullName = (firstname ,lastname) => console.log(`${firstname} ${lastname}`);
 
 printFullName(`jackie`, `gargis`);



 /* the second quiz Age Calculator */

function ageToToday(brithDate)
{
    let milliSecBetweenDateBrithAnd1970=Date.parse(brithDate);
    let milliSecBetwwenCurrentDateAnd1970= Date.now();
    let milliSecOfCurrentAge=milliSecBetwwenCurrentDateAnd1970 - milliSecBetweenDateBrithAnd1970;

    let ageMillisec=milliSecOfCurrentAge;
    let day=24*60*60*1000;
    let year=day*365;

    let ageInyears= Math.round(ageMillisec/year); //25
    let ageInyearsWith= ageMillisec/year; //25.0000

    let ageInMonths= Math.round((ageInyearsWith-ageInyears)*12); //2
    let monthsy=(ageInyearsWith-ageInyears)*12;//2.0000

    let ageInDays=Math.round((monthsy-ageInMonths)*30);//9

   console.log(`${ageInyears} years ${ageInMonths} Month ${ageInDays} Days`)    
   
}
 ageToToday("june 15,1995");
 ageToToday( "june 24 ,1993");
 ageToToday("April 20 , 1966");
 

/* the third quiz how to captilazition first letter*/

// Not done completely

function capitalizeString(texts)
{
   let str= texts.split("");
   for(let i=0 ;i<str.length ;i++){
     if(str[i]=str[0]){
      str[0].toUpperCase( ) + str[i].slice(1)
    }
   }
return str.join(" ")
  //console.log(str)
}
console.log(capitalizeString("hello world. it's a lovely day. i should go out"))
 


  /*.map(string=>{

      return string[0].toUpperCase() + string.slice(1);
  });
  return strings.join(" ");
}*/


 /*Another an anwser for this quiz*/

/*function how(string){
   b=b.split(" ").map((text,i)=>{
    if(text[i]===text[i].includes(".")){text[i+2]=text[i].toUpperCase() +text.slice(1)}
  })
 return b.join(" ")
}

*/


// the 4 quiz oddish vs evenish

//the 5 quiz Boom

function sevenBoom(b){
  if(b.join(" ").includes(7)){
    return "BOOM"
  }
else {
  return "NOT BOOM"
     }
}
console .log (sevenBoom( [1, 2, 3, 4, 5, 6, 7]));
console .log (sevenBoom([8, 6, 33, 100]));
console.log (sevenBoom([2, 55, 60, 97, 86]));
console.log(sevenBoom([76, 55, 44, 32]));




// the 6 quiz Count Number of Identical Arrays

function countIdenticalArrays(A,B,C,D){

let modif=[A.join( ) , B.join() ,C.join() , D.join() ] 
 
let look=[];
 modif.map(i => {look[i] =( look[i] ||0) +1});
console.log (look)
}

countIdenticalArrays([0, 0, 0] , [0, 1, 2] , [0, 0, 0] , [2, 1, 0])
countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0])
countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0])


//the 7 How Many Days Between Two Dates

function happy ( W ,Q ){

  let firstDate= Date.parse( W) 
  let secondDate= Date.parse( Q)
  let knowDiff1 = firstDate - secondDate // differnce between dates in millisec
  let day= 24*60*60*1000 ;
  let dates= Math.round(knowDiff1/ day) ;
  let heys= Math.abs( dates)
  console.log (`${heys} days`);

}


  happy( new Date("June 14, 2019"),new Date("June 20, 2019") ) 
  happy( new Date("December 29, 2018"),new Date("January 1, 2019") )
  happy( new Date("July 20, 2019"),new Date("July 30, 2019") )


  // another idea but in a way not compeletely done 

 /* function fug(A,B){

    A =A.getDate();
    B =B.getDate();
    if(A<B){
      return A-B ;
    }
    else if( A=B){
       return   A=B=0 
    }
    else {} 
    }*/





