describe 'Point'

    describe '.is_outside(fence)'
        it 'should be tested'
        
        
        end
        
        before_each
            points = new Array()
            points[0] = new Point(0,0);
	        points[1] = new Point(0,1);
	        points[2] = new Point(1,1);
	        points[3] = new Point(1,0);
            square = new Fence(points)
        end
    
        it 'should answer false for the point 0.5,0.5 with a square fence (0,0);(0,1);(1,1);(1,0)'
            point = new Point(0.5,0.5)
            point.is_outside(square).should.be false
        end
        
        it 'should answer false for the point 1.5,0.5 with a square fence (0,0);(0,1);(1,1);(1,0)'
            point = new Point(1.5,0.5)
            point.is_outside(square).should.be true
        end
        
    end
    
    describe '.distance_from(point)'
    
        it 'should answer 1 if this point is (0,0) and that point is (1,0)'
            point1 = new Point(0,0)
            point2 = new Point(1,0)
            
            point1.distance_from(point2).should.be 1
        end
        
        it 'should answer 2 if this point is (0,0) and that point is (0,2)'
            point1 = new Point(0,0)
            point2 = new Point(0,2)
            
            point1.distance_from(point2).should.be 2
        end
    
    end
    
    describe '.belongs_to_segment(point_limit1, point_limit2)'
        
       it 'should answer true if point is (0.5,0.5) and the segment is formed by (0,0) and (1,1)'
           point_limit1 = new Point(0,0)
           point_limit2 = new Point(1,1)
           point = new Point(0.5,0.5)
           
           point.belongs_to_segment(point_limit1, point_limit2).should.be true
       end 
       
       it 'should answer false if point does not belong to the straight line formed by limit points'
           point_limit1 = new Point(0,0)
           point_limit2 = new Point(1,1)
           point = new Point(1.5,2)
           
           point.belongs_to_segment(point_limit1, point_limit2).should.be false
       end 
       
       it 'should answer false if point belongs to the line but it does not belong to the segment'
           point_limit1 = new Point(0,0)
           point_limit2 = new Point(1,1)
           point = new Point(1.5,1.5)
           
           point.belongs_to_segment(point_limit1, point_limit2).should.be false
       end
       
       it 'should answer true if point is the same limit_point of the segment'
           point_limit1 = new Point(0,0)
           point_limit2 = new Point(1,1)
           point = new Point(0,0)
           
           point.belongs_to_segment(point_limit1, point_limit2).should.be true
       end 
        
    end

end


describe 'Line'
    
    describe '= new Line(point1, point2)'
    
        it 'should create a straight line with equation \"x - y = 0\" if points are (0,0) and (1,1)'
            point1 = new Point(0,0);
	        point2 = new Point(1,1);
	        line = new Line(point1, point2);

            line.a.should.be 1
            line.b.should.be -1     
            line.c.should.be 0
        end
        
        it 'should create a straight line with equation \"y = 0\" if points are (0,0) and (1,0)'
            point1 = new Point(0,0);
	        point2 = new Point(1,0);
	        line = new Line(point1, point2);
            
            line.a.should.be 0
            line.b.should.be 1     
            line.c.should.be 0    
        end

        it 'should create a straight line with equation \"x = 0\" if points are (0,0) and (0,1)'
            point1 = new Point(0,0);
	        point2 = new Point(0,1);
	        line = new Line(point1, point2);
            
            line.a.should.be 1
            line.b.should.be 0     
            line.c.should.be 0    
        end
        
        it 'should create a straight line with equation \"y = 0.5\" if points are (0,0.5) and (1,0.5)'
            point1 = new Point(0,0.5);
	        point2 = new Point(1,0.5);
	        line = new Line(point1, point2);
            
            line.a.should.be 0
            line.b.should.be 1     
            line.c.should.be -0.5    
        end
        
    end
    
    describe '.has(point)'
    
        before_each
            point1 = new Point(0,0);
	        point2 = new Point(1,1);
	        line = new Line(point1, point2);
        end
    
        it 'should answer true if the line is \"x - y = 0\" and the point is (1,1)'
            point = new Point(1,1)
            line.has(point).should.be true
        end
        
        it 'should answer false if the line is \"x - y = 0\" and the point is (0,1)'
            point = new Point(0,1)
            line.has(point).should.be false
        end
        
        it 'should answer false if the line is \"x - y = 0\" and the point is (0.5,0.6)'
            point = new Point(0.5,0.6)
            line.has(point).should.be false
        end
    
    end
    
end


describe 'Fence'
  
    describe '= new Fence(points);'

        it 'should receive at least three points. If it receives one point, its propertie valid should be false'
	    var points = new Array()
	    points[0] = new Point(0,0)

	    var fence = new Fence(points)
	    fence.valid.should.be false
        end

        it 'should receive at least three points. If it receives two points, its propertie valid should be false'
	    var points = new Array()
	    points[0] = new Point(0,0)
	    points[1] = new Point(0,1)

	    var fence = new Fence(points)
	    fence.valid.should.be false
        end

        it 'should receive at least three points. If it receives three points, its propertie valid should be true'
	    var points = new Array()
	    points[0] = new Point(0,0)
	    points[1] = new Point(0,1)
	    points[2] = new Point(1,1)

	    var fence = new Fence(points)
	    fence.valid.should.be true
        end
      
    end
    
    describe '.compute_point_that_belong_to_both_lines(line1, line2)'
        before_each
            points = new Array()
            points[0] = new Point(0,0);
	        points[1] = new Point(0,1);
	        points[2] = new Point(1,1);
	        points[3] = new Point(1,0);
            square = new Fence(points)
        end
       
        it 'should answer an invalid point when lines are paralels'
            p1 = new Point(0,0);
	        p2 = new Point(1,1);
	        p3 = new Point(0,1);
	        p4 = new Point(1,2);
            line1 = new Line(p1, p2)
            line2 = new Line(p3, p4)
            point = square.compute_point_that_belong_to_both_lines(line1, line2)
            point.valid.should.be false
        end
        
        it 'should answer an invalid point when lines are the same'
            p1 = new Point(0,0);
	        p2 = new Point(1,1);
            line = new Line(p1, p2)
            point = square.compute_point_that_belong_to_both_lines(line, line)
            point.valid.should.be false
        end
        
        it 'should answer a valid point when lines are concurrent'
            p1 = new Point(0,0);
	        p2 = new Point(1,1);
	        p3 = new Point(10,1);
	        p4 = new Point(12,2);
            line1 = new Line(p1, p2)
            line2 = new Line(p3, p4)
            point = square.compute_point_that_belong_to_both_lines(line1, line2)
            point.valid.should.be true
        end
        
        it 'should answer (0.5,0.5) if line1 is formed by (0,0);(1,1) and line2 is formed by (0,1);(1,0)'
            p1 = new Point(0,0);
	        p2 = new Point(1,1);
	        p3 = new Point(0,1);
	        p4 = new Point(1,0);
            line1 = new Line(p1, p2)
            line2 = new Line(p3, p4)
            point = square.compute_point_that_belong_to_both_lines(line1, line2)
            point.x.should.be 0.5
            point.y.should.be 0.5
        end
        
        it 'should answer (0.5,0.5) if line1 is formed by (0,0.5);(1,0.5) and line2 is formed by (0.5,0);(0.5,1)'
            p1 = new Point(0,0.5);
	        p2 = new Point(1,0.5);
	        p3 = new Point(0.5,0);
	        p4 = new Point(0.5,1);
            line1 = new Line(p1, p2)
            line2 = new Line(p3, p4)
            point = square.compute_point_that_belong_to_both_lines(line1, line2)
            point.x.should.be 0.5
            point.y.should.be 0.5
        end
    end
    
    describe '.compute_point_outside_fence()'
   
        it 'should answer (2,2) for a square fence (0,0);(0,1);(1,1);(1,0)'
            points = new Array()
            points[0] = new Point(0,0);
	        points[1] = new Point(0,1);
	        points[2] = new Point(1,1);
	        points[3] = new Point(1,0);
            square = new Fence(points);

            point = square.compute_point_outside_fence();
            
            point.x.should.be 2
            point.y.should.be 2
        end
        
        it 'should answer (3,3) for a square fence (1,1);(1,2);(2,2);(2,1)'
            points = new Array()
            points[0] = new Point(1,1);
	        points[1] = new Point(1,2);
	        points[2] = new Point(2,2);
	        points[3] = new Point(2,1);
            square = new Fence(points);
            
            point = square.compute_point_outside_fence()
            
            point.x.should.be 3
            point.y.should.be 3
        end
    
    end

end
