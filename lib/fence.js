
/*
 * Fence Constructor
 */

function Fence(points){
    this.points = points;
    this.valid = true;
   
    if (points.length < 3){
	    this.valid = false;
    }
}

Fence.prototype = {

	is_outside: function(inside_point, point){
	
	    if(inside_point == point) {
	        return false;
	    }
	    else {
	        return true;
	    }
	}
	
}
