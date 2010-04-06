function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype = {

    is_outside: function(fence){
        return true;
	}
    
}


function Line(p1, p2){
    
    //angular coefficient
    var m;
    if((p1.y-p2.y) == 0){ //when the line is x-independent
        this.b = 1;
        m = 0;
    }
    else if(p1.x-p2.x == 0){ //when the line is y-independent
        m = 1;
        this.b = 0;
    }
    else {
        m = (p1.x - p2.x)/(p1.y - p2.y); //when the line is xy-dependent
        this.b = -1;
    }
    
    //linear coefficient
    var h = p1.y - (m * p1.x);
    
    this.a = m;
    this.c = h;
}

Line.prototype = {

	has: function(point){
	
        result = (this.a * point.x) + (this.b * point.y) + this.c
        
        if(result == 0){
            return true;
        }
        else {
            return false;        
        }
        
	}
	
}

function Fence(points){
    this.points = points;
    this.valid = true;
   
    if (points.length < 3){
	    this.valid = false;
    }
}

Fence.prototype = {

	compute_points_belong_to_both_lines: function(line1, line2){
	    var points = new Array();
	    return points;
	}
	
}
