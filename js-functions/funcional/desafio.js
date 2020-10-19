function range(a,b,s=1){
    const n1 = b === undefined ? 1 : a
    const n2 = ( b === undefined ) ? a : b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)
  
    const nums = []
  
    for(let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step){
  	    nums.push(i)
    }
    return nums
}

console.log(range(5));

