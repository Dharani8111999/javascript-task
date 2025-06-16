//find inside value:
let z=[12,54,76,11,5];
let target = 12;
for(let i=0;i<z.length;i++){
    if(z[i]===target){
         console.log("found");
         break;
    }

    if(z[i]===z.length-1){
        console.log("not found");
    }
}

//Ascendimg

let a=[12,54,76,11,5];
for(let i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            let temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
console.log("Ascendimg:",a);


//descendimg

let b=[12,54,76,11,5];
for(let i=0;i<b.length;i++){
    for(j=i+1;j<b.length;j++){
        if(b[i]<b[j]){
            let temp=b[i];
            b[i]=b[j];
            b[j]=temp;
        }
    }
}
console.log("descendimg:",b);
             
//first and lost value:

let c=[12,54,76,11,5];
for(let i=0;i<c.length;i++){
    if(i===0){
        console.log("first value:",c[i]);      
    }
    if(i===c.length-1){
        console.log("last value:",c[i]);     
    }
}

//remove duplicates
let d=[12,54,12,76,11,5];
let l=[];
for(let i=0;i<d.length;i++){
    if(!
        l.includes(d[i])){
            l.push(d[i]);
        }
}
console.log(l);


//palandrome
let e=[1,2,3,2,1];
palindrome=true;
for(let i=0;i<e.length/2;i++){
    if(e[i]!==e[e.length-1-i]){
        palindrome=false;
        break;
    }
}
if(palindrome){
    console.log("palindrome");
}else{
    console.log("not a palindrome");
}

//even number
let f=[22,33,44,55,66];
for(let i=0;i<f.length;i++)
{
    if(f[i]%2===0){
        console.log(f[i],"even");   
    }
}

//odd number
let g=[22,33,44,55,66];
for(let i=0;i<g.length;i++)
{
    if(f[i]%2!==0){
        console.log(g[i],"odd");   
    }
}
//duplicates next to each other
let h=[1,1,2,2,3,4,3];
let result=[];
for(let i=0;i<h.length;i++){
    if(h[i]!==h[i+1])
    {
        result.push(h[i]);
    }    
}
console.log(result);


