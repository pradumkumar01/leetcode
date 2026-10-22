/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let seen = new Set();
    let arr=[];
    for(let num of nums){
        if(seen.has(num)){
            arr.push(num);
        } else seen.add(num);
    }

    return arr
    
    
};