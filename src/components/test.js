var subTasks = [[{tname:'cat',done:false},{tname:'dog',done:false},{tname:'fish',done:false}],
    [{tname:'fish',done:false},{tname:'kk',done:false} ]];

const index = 0;


// console.log(newTasks);

// console.log(newTasks2);
var newTasks= {...subTasks}
var innerTasks = newTasks[index];
innerTasks  = [...innerTasks, {tname:'fishyy',done:false}];
newTasks = {...newTasks, [index]:innerTasks};

console.log('inner');
console.log(innerTasks);

console.log('new');
console.log(newTasks);


console.log('sub');
console.log(subTasks)

subTasks = {...newTasks};
console.log('sub');
console.log(subTasks)
