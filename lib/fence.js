function Point(x, y){
    this.x = x;
    this.y = y;
    this.valid = true;
}

Point.prototype = {

    is_outside: function(fence){
        return false;
	},
	
	distance_from: function(point){
	
	    deltax = this.x - point.x;
	    deltay = this.y - point.y;
	
	    var result = Math.sqrt(deltax*deltax + deltay*deltay);
	
	    return result;
	
	},
	
	belongs_to_segment: function(point_limit1, point_limit2){
	    
	    line = new Line(point_limit1, point_limit2);

        //does the line contain this point?
	    if(!line.has(this)){
	        return false;
	    }
	    
	    mean_point = new Point((point_limit1.x + point_limit2.x)/2, (point_limit1.y + point_limit2.y)/2);
	    limit_to_mean = point_limit1.distance_from(mean_point);
	    point_to_mean = this.distance_from(mean_point);
	    if(point_to_mean > limit_to_mean){
	        return false;
	    }
	    
	    
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

	compute_point_that_belong_to_both_lines: function(line1, line2){
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
	},
	
	compute_point_outside_fence: function(){
	    
	    greaterx_index = 0;
	    for(var i=1; i<this.points.length; i++){
	        if (this.points[greaterx_index].x < this.points[i].x){
	            greaterx_index = i;
	        }
	    }
	    
	    var point = new Point();
	    
	    
	    
	    point.x = this.points[greaterx_index].x+1;
	    point.y = this.points[greaterx_index].y+1;
	    
	    return point;
	}
	
}
