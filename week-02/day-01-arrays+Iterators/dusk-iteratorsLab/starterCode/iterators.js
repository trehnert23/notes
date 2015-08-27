//where our iterators live
var o_o = {
  each: function(list, callback) {
    for (var i=0; i<list.length; i++) {
    	callback(list[i]);
    }
  },
  
  filter: function(list, callback) {
    //code here...
  }
};

//expose our iterators to other files
//such as our assertions
module.exports = o_o;
