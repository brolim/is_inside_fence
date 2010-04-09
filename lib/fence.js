function Point(x, y){
    this.x = x;
    this.y = y;
    this.valid = true;
}

Point.prototype = {

    is_outside: function(fence){

        outside_point = fence.compute_point_outside_fence();
        util = new Util();
        n_solutions = 0;
        
        for(var i=0; i<fence.points.length; i++){
            if(this.x == fence.points[i].x && this.y == fence.points[i].y){
                return false;
            }
            
            p1 = i % fence.points.length;
            p2 = (i+1) % fence.points.length;
            
            if(this.belongs_to_segment(fence.points[p1], fence.points[p2])){
                return false;
            }
            
            if(fence.points[p1].belongs_to_segment(this, outside_point)){
                n_solutions--;
            }
        
            n_solutions += util.compute_how_many_points_belong_to_two_segments(this, outside_point, fence.points[p1], fence.points[p2]);
        }
        
        if(n_solutions % 2 == 0){
            return true;
        }

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
    
    if((p1.y-p2.y) == 0){ //when the line is x-independent
        this.a = 0;
        this.b = 1;
        this.c = -p1.y;
    }
    else if(p1.x-p2.x == 0){ //when the line is y-independent
        this.a = 1;
        this.b = 0;
        this.c = -p1.x;
    }
    else {                   //when the line is xy-dependent
        this.a = (p1.y - p2.y)/(p1.x - p2.x);
        this.b = -1;
        this.c = p1.y - (this.a * p1.x);
    }
}

Line.prototype = {

	has: function(point){
	
        result = (this.a * point.x) + (this.b * point.y) + this.c
        
        //alert("a: "+this.a+"\nb: "+this.b+"\nc: "+this.c);
        
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


function Util(){
    this.precision = 100000000000000;
}

Util.prototype = {
    compute_point_that_belong_to_both_lines: function(line1, line2){
	    var point = new Point();
	    
	    if(line1.a == line2.a && line1.b == line2.b){
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

        util = new Util();
        point.x = (Math.round(point.x*this.precision))/util.precision;
        point.y = (Math.round(point.y*this.precision))/util.precision;

	    return point;
	},
	
	compute_how_many_points_belong_to_two_segments: function(segment1_p1, segment1_p2, segment2_p1, segment2_p2){
	    
	    line1 = new Line(segment1_p1, segment1_p2);
	    line2 = new Line(segment2_p1, segment2_p2);
	    point = this.compute_point_that_belong_to_both_lines(line1, line2);
	    
	    //does it have a solution?
	    if(!point.valid){
	        return 0;
	    }
	    
	    if( point.belongs_to_segment(segment1_p1, segment1_p2) && point.belongs_to_segment(segment2_p1, segment2_p2) ){
	        return 1;
	    }
	    else {
	        return 0;
	    }
	}
}
