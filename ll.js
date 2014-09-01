function equalInAllFields(p1, p2) {
	for(var p in p1) { 
		if(p1.hasOwnProperty(p)) { 
			if(p2.hasOwnProperty(p)) { 
				if(p1[p] !== p2[p]) {
					return false;
				}
			} else {
				return false;
			}
		}
	}
	return true;
}
// see http://stackoverflow.com/questions/1068834/object-comparison-in-javascript/6713782#6713782

// options for dealing with equality in framework
// 1. use equalInAllFields
// 2. call equals on object itself
// 3. provide an equals function to the list to use internally
// 4. JSON.stringify(obj1) === JSON.stringify(obj2) 

function LinkedList() { 
this.first = this.last = null; 
this.length = 0; 
this.currentNode = null; 
var equals = function(obj1, obj2) { 
	return ( obj1 === obj2 );
}
}

LinkedList.prototype = {

add:  function(data) {
   var node = {
       prev:  null,
               next:  null,
               data:  data
   };
   if( this.length == 0 )  {
     this.first = this.last = node;
      this.length++;
   } else {
      this.last.next   = node;
          node.prev        = this.last;
          //this.last        = this.last.next;
          this.last        = node;
     this.length++;
       }
},

size : function() {
    return this.length;
},

/* * 
	 This function will remove the element from linked list. If the element 
	 to be deleted is first in the list,then head node will be assigned to next node. 
	 This function returns void as opposed to remove method in LinkedList of java. 
*/ 
	remove : function(data) { 
	var temp = this.first; 
	var p = this.first; 
	while( temp != null ) 
	{ 
	if( temp.data === data) { 
	if(temp === this.first) { 
	this.first = temp.next; 
	this.length--; return; 
	} if(temp === this.last) 
		this.last = p; 
		p.next = temp.next; 
		this.length--; return;
    }
    p    = temp;
    temp = temp.next;
   }
},

/*
	remove node at specified index from linked list
*/
removeIndex : function(index) {
  var temp = this.first;
  var p    = this.first;
  for(var i = 0; i<=index; i++) {
       if( i === index ) {
       if(temp === this.first) {
        this.first = temp.next;
		this.length--;
        return;
     }
               if(temp === this.last) this.last = p;
                p.next = temp.next;
                this.length--;
        return;
       }
       p    = temp;
       temp = temp.next;
  }
},

removeFirst: function() {
  this.removeIndex( 0 );
},


removeLast: function() {
  this.removeIndex( this.length - 1 );
},

get: function( index ) {
      var size = this.length;
      var n    = this.first;
      for(var i = 0; i <=index; i++) {
		n = n.next;
      }
      return n;
},

getFirst: function() {
   return this.get( 0 );
},

getLast: function() {
   return this.get( this.length - 1 );
},

peek: function() {
   return this.getFirst();
},

print: function() {
   var temp = this.first;
       var stream = new BrowserOutputStream();
   while( temp != null) {
       stream.print(" "+temp.data+" , ");
       temp = temp.next;
       }
},

set: function(index, obj) {
     var temp = this.first;
     for( var i = 0; i<=index; i++) {
     temp   = temp.next;
     }
     temp.data = obj;
},

addBefore: function(obj,data) {
 var node = {
      prev:  null,
      next:  null,
      data:  data
};
var temp = this.first;
var n;
var ctr = 0;
var c;
while( temp != null ) {
  if( temp.data === obj ) {
           n = temp;
       break;
       }
  temp = temp.next;
      ctr++;
}
if( temp != null ) {
      if( ctr != 0 ) {
  c  = temp.prev;
      if( c != null ) {
        c.next  = node;
        node.prev= c;
        node.next = n;
        this.last = node;
    this.length++;
  }
} else if( ctr === 0) {
  n.prev = node;
      node.next = n;
      this.list = node;
      this.first = node;
      this.length++;
    }
}
},

addLast: function(data) {
this.add(data);
},

addFirst: function(data) {
  var node = {
        prev:null,
        next:null,
        data:data
     };
 node.next  = this.first;
 this.first = node;
 if(this.length === 0) this.last = node;
 this.length++;
},

poll: function() {
   if( this.length === 0 ) return null;
   this.removeFirst();
   return this.currentNode;
},

push: function(data) {
      this.addFirst(data);
},

pop: function( ) {
     return this.poll();
},

clear: function() {
       for(var i = 0; i < this.length; i++) {
               delete ( this.first.next );
               delete ( this.first.prev );
       }
   delete ( this.first );
   delete ( this.last );
       this.length = 0;
},

iterate: function(f) {
   f.call(this, this.first, this.length);
},

isString: function( obj ) {
   var toString = Object.prototype.toString;
   return toString.call( obj ) == '[Object String]';

}
};

////////// Print Util //////////////
function BrowserOutputStream() {
  this.div = document.createElement("div");
  document.body.appendChild(this.div);
}
BrowserOutputStream.prototype = {
print: function(msg) {
   this.div.innerHTML+=msg;
},
println: function(msg) {
   this.div.innerHTML+=" <p> " + msg;
},
close: function() {
    document.body.removeChild(this.div);
}
};
