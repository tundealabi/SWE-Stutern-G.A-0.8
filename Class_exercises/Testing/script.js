//1
function replaceWith(str,replace,replacewith) {
	let result = "";
    for(let i = 0; i < str.length; i+=1){
    	if(str[i] === replace){
			result += replacewith;
		}else{
			result += str[i]; 
		}
    }
	return result;
}

//2

function acceptNumbersOnly(){
	return [].slice.call(arguments).every(numb =>{
		return typeof(numb) === "number" && !!numb === true;
	});
}

//3

function expand(arr,number){
    let result = [];
    for(let i = 0; i < number; i+=1){
    	result.push(arr);
    }
    return result.flat();
}

//4

function mergeArrays(arr1,arr2){
   return arr1.concat(arr2).sort((a, b) => a - b);
}

//5

function mergeObjects(target,source){
 for(const prop in source){
    target[prop] = source[prop];
}    
 return target;
}
