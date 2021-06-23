//////////////////////////*************Stack**************************///////////////////////
var word = "racecar";
var rword = "";
var letters = [];
//Arrays have all functionality of a stack like push pop peek
for(var i =0; i<word.length; i++){
    letters.push(word[i]);
}
for(var i=0; i<word.length;i++){
    rword+=letters.pop();
}
if(rword==word){
    console.log(word+" is pallindrome!");
}
else{
    console.log(word+" is not a pallindrome!");
}
//Stack Functgion
var stack = function(){
    this.count = 0;
    this.storage = {};
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }
    this.pop = function(){
        if(this.count ==0){
            return undefined;
        }
        else{
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }};
    this.size = function(){
        return this.count;
    };
    this.peek = function(){
        return this.storage[this.count-1];
    };
};
var st = new stack();
st.push(1);
st.push(2);
console.log(st.pop());

/////////////******************Sets*******************/////////////
function myset(){
    //ES6 implementation inbuild
    var collection = [];
    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    };
    this.values = function(){
        return collection;
    };
    this.add = function(value){
        if(!this.has(value)){
            collection.push(value);
            return true;
        }
        else return false;
    };
    this.remove = function(value){
        if(this.has(value)){
            index = collection.indexOf(value);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    this.size = function(){
        return collection.length;
    };
    //not in ES6
    this.union = function(otherset){
        var unionset = new myset();
        var firstset = this.values();
        var secondset = otherset.values();
        firstset.forEach(function(e){
                         unionset.add(e);                         
            });
    secondset.forEach(function(e){
                         unionset.add(e);                         
            });
    return unionset;
    }
    this.intersection = function(otherset){
        var intersectionset = new myset();
        var firstset = this.values();
        firstset.forEach(function(e){
                         if(otherset.has(e)){
            intersectionset.add(e);
        }
                         });
        return intersectionset;
    };
    
};
var seta = new myset();
var setb = new myset();
seta.add("a");
setb.add("i");seta.add("b");
seta = seta.union(setb);
console.log(seta.values());

//////////////////////***********Queue***************************//////////////////
function queue(){
    var collection = [];
    this.print = function(){
        console.log(collection);
    };
    this.enqueue = function(element){
        collection.push(element);
    };
    this.dequeue = function(){
        return collection.shift();
    };
    this.front = function(){
        return collection[0];
    };
    this.size = function(){
        return collection.length;
    };
    this.empty = function(){
        return (collection.length==0);
    };
}
var q = new queue();
q.enqueue(2);q.enqueue(3);q.front();console.log(q.dequeue());
//////////////**********************Binary Search tree *//////////////////////
class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}


















