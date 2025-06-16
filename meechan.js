
let nums1=[1,3];
    let nums2=[2];
    let merged=[];
    let i=0, j=0;

    for(let x=0;x<nums1.length+nums2.length;x++){
        if(i<nums1.length&&(j>=nums2.length||nums1[i]<nums2[j])){
            merged.push(nums1[i]);
            i++;
        }else if(j<nums2.length)
        {
            merged.push(nums2[j]);
            j++;
        }
    }
    let n=merged.length;
    let median=merged[Math.floor(3/2)]; 
    console.log("merged array:",merged);
    console.log("median array:",median);

    



