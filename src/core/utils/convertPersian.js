 const conversionToPersian =(gender)=>{
   if(gender === "male") return "مرد"
   else if(gender === "female")  return "زن"
   else return "--"
 }

 export {conversionToPersian}