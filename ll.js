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
	this.length = 0; // cache for performance reasons
	this.currentNode = null;
	// this.equality = function(p1, p2) { return p1.equals(p2); }
	this.equality = function(p1, p2) { return p1 === p2; }
}

LinkedList.prototype = {

add : function(data) {
	var node = {
		prev: null,
		next: null,
        data: data
    };

    if( this.length == 0 )  {
        this.first = this.last = node;
    } else {
       this.last.next = node;
       node.prev      = this.last;
       this.last      = node;
    }
   
    this.length++;
},

size : function() {
    return this.length;
},

remove : function(data) {
    var temp = this.first;
    while( temp != null ) {
        if( this.equality(temp.data, data) ) {
			var c = temp.prev;
            c.next = temp.next;
            // TODO bug? when removing in middle then first/last does not change
			this.last = c;
            this.first = c;
			
			this.length--;
			break;
       }
       temp = temp.next;
   }
},

removeIndex : function(index) {
   var temp = this.first;
       var i    = 0;
       while ( temp != null ) {
              if( index == 0 ) {
                  this.currentNode = temp;
          var c      = temp.next;
                  this.last  = c;
                  this.first = c;
                  this.length--;
                  break;
          }
              if( i == index ) {
                this.currentNode = temp;
        var c     = temp.prev;
        c.next    = temp.next;
                this.last = c;
                this.length--;
                break;
              }
        i++;
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
      for(var i = 0; i <index; i++) {
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
   while( temp != null) {
       alert(temp.data);
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
  if( this.length == 0 ) return;
     var node = {
        prev:null,
        next:null,
        data:data
     };

     this.last.next = node;
     this.length++;
},

addFirst: function(data) {
  var obj = this.getFirst();
  this.addBefore(obj.data,data);
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
       this.length;
},

iterate: function(f) {
   f.call(this, this.first, this.length);
},

isString: function( obj ) {
   var toString = Object.prototype.toString;
   return toString.call( obj ) == '[Object String]';

}

};

///////////// ArrayList /////////// ///////////// //////////

function ArrayList() {

  this.length          = 0;
  this.elementData     = [];
  this.initialCapacity = 10;
  this.size            = 0;
}

(function(){

var collection          = collection || {};

ArrayList.prototype.add = function(data) {

this.elementData.push(data);

};

ArrayList.prototype.size = function() {
     return this.size();
};

ArrayList.prototype.isEmpty = function() {
   return size === 0;
};

collection.con = function() {
 alert(" ..inside add method... ");
}

})();

//////////// Arrays //////////// /////////// ///////////

var Arrays = {};

(function(){

Arrays.sort = function(object) {

}

})();
