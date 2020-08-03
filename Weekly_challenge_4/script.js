
function minCost(cost){
  let max = 100;
  let arr = [];
  if(cost.length > 100 || cost.length < 1)
       return "This neighbourhood can only take a max of 100 houses and a min of two houses.";
    for(let i = 0; i < cost.length; i+=1){
      for(let j =0; j < cost[i].length; j+=1){
        if(cost[i][j] < 1 || cost[i][j] > 99)
              return `Cost for each material can only be within the range of $1 - $100.`;
      if(i == 0){
              if(cost[i][j] < max){
             arr[i] = cost[i][j]
             max = cost[i][j];
           
          }
        }else if(i>0){
          if(cost[i][j] <= max && cost[i-1].lastIndexOf(arr[i-1]) != cost[i].lastIndexOf(cost[i][j])){
             arr[i] = cost[i][j]
             max = cost[i][j];
             console.log(arr)
                   
          }
        }
               
     }
       max = 100;
    };
    const reduced = arr.reduce((total,number) => total + number);
 return `The minimum cost to build all the houses in the neighborhood based on the array passed is equal to $${reduced}.`;
}

minCost([[2, 2, 3], [1, 2, 3], [3, 3, 1]]);
