function Point(x, y){
    this.x = x;
    this.y = y;
    this.valid = true;
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
        m = 0;
        this.b = 1;
        this.c = -1;
    }
    else if(p1.x-p2.x == 0){ //when the line is y-independent
        m = 1;
        this.b = 0;
        this.c = 1;
    }
    else {
        m = (p1.x - p2.x)/(p1.y - p2.y); //when the line is xy-dependent
        this.b = -1;
        this.c = 1;
    }
    
    //linear coefficient
    var h = p1.y - (m * p1.x);
    
    this.a = m;
    this.c = this.c * h;
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
        
	},
	
	is_between: function(point_limit1, point_limit2, point){
	    return true;
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
	    var point = new Point();
	    
	    if(line1.a == line2.a){
	        point.valid = false;
	        return point;
	    }
	    
	    a1 = line1.a;
	    b1 = line1.b;
	    c1 = line1.c;
	    
	    a2 = line2.a;
	    b2 = line2.b;
	    c2 = line2.c;
	    
	    //solving by substitution
	    if(a1==0){
	        if(a2==0){
	            point.valid = false;
	            return point;
	        }
	        
	        point.y = -c1;
	        point.x = (-c2 - b2 * point.y)/a2;
	    }
	    else {
	        denominator = b2 - (a2*b1/a1);
	    
	        if(denominator==0){
	            point.valid = false;
	            return point;
	        }
	    
	        point.y = ((a2*c1/a1)-c2) / (denominator);
	        point.x = -(b1*point.y + c1)/a1;
	    }

	    return point;
	}
	
}
