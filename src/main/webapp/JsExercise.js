
//1.Write a Javascript function to insert a string within a string at a particular position (default is1).
function insert(actualString,subString,index=1){
	return actualString.substring(0,index)+subString+actualString.substring(index);
} 

let actualStr="Im good";
let subStr="looking ";
let index=3;
console.log(insert(actualStr,subStr,index));


//2.Write a Javascript function to humanized number (Formats a number to a human readable string) with the correct suffix such as 1st, 2nd, 3rd, 4th.
  function humanize(number)
  { 
	const suffixes=["st","nd","rd","th"];
	number=number.toString();
	num=number[number.length-1];
	console.log(number); 
	switch(num){
		case "1":
			return number+suffixes[0];
		case "2":
		     return number+suffixes[1];
		case "3":	 	
		     return number+suffixes[2];
        default:
			return number+suffixes[3];		
	}
  }
  
  console.log(humanize(201));
  console.log(humanize(202));
  console.log(humanize(203));
  console.log(humanize(204));
  console.log(humanize(200));
  
  
//3.Write a Javascript function to repeat a string a specified times.
 function repeatString(string,count){
	let out="";
	for(let i=0;i<count;i++){
		out+=string;
	}
	return out;
 }
 
 console.log(repeatString("he",3));


//4.Write a Javascript function to check whether an `input` is an array or not.
 function isArray(input){
	return Array.isArray(input);
 }
 
 let inp=[1,2]; 
 console.log(isArray(inp));


//5.Find if the element has present in the array.
 function checkIfPresent(element, array){
	return element in array;
 }

 let arr=[1,2,3];
 console.log(checkIfPresent(5,arr));


//6.Find the word in the array by given the input and return the matches value as list
function findMatching(word,array){
	let matchOp=[];
	for(let a in array){
		if(array[a]==word){
			matchOp.push(array[a]);
		}
	}
	return matchOp;
}

let fruits=["apple","orange","apple","pappaya","banana"];
console.log(findMatching("apple",fruits));


//7.Write a Javascript program to list the properties of a Javascript object.
 function listProperties(obj){
	return(Object.keys(obj));
 }
 
 let P={
	name:"AmalG",
	age:21,
	Gender:"M"
 }
 console.log(listProperties(P));


//8.Write a Javascript program to check whether the key is present or not in the object.
 function hasKey(obj,key){
	return key in obj;
 }
 
 console.log(hasKey(P,"name"));


//9.Write a Javascript program counter (increment, decrement, reset option) with an object.
 const counter={
		value:0,
		increment(){
			this.value++;
		},
		decrement(){
			this.value--;
		},
		reset(){
			this.value=0;
		}
 };
 
	console.log(counter.value);

	counter.increment();
	counter.increment();
	console.log(counter.value);

	counter.decrement();
	console.log(counter.value);

	counter.reset();
	console.log(counter.value);


//10.Write a Javascript program to add and update the array data in the object.
//a. ExampleObject:{list:[{name:"kumaresan"},{name:"arun"}]
    const object={
		list:[{name:"kumaresan"},{name:"arun"}],
		add(name){
			this.list.push({name})
		},
		update(index,name){
		    this.list[index]=name;
		}
	}
	
	object.add("agj");
	console.log(object);
	object.update(1,"Abhi");
	console.log(object);


//11.Write a JavaScript program to construct the following pattern, using a nested for loop. Sample Output:
//*
//**
//***
//**** 
//*****
 for(let i=0;i<5;i++){
   let opStr="";
     for(let j=0;j<=i;j++){
	    opStr+="* ";
     }
   console.log(opStr);
 }


//12. Write a JavaScript program to construct the following pattern, using a nested for loop.
//Sample Output:
//*****
//**** 
//*** 
//**
//*
 for(let i=5;i>0;i--){
	let opStr="";
	  for(let j=0;j<i;j++){
		  opStr+="* ";
	  }
	console.log(opStr);
 } 