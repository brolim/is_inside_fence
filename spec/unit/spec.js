describe 'Point'

    describe '.is_outside(fence)'
        it 'should be tested'
        
        
        end
        
        /*before_each
            points = new Array()
            points[0] = new Point(0,0);
	        points[1] = new Point(0,1);
	        points[2] = new Point(1,1);
	        points[3] = new Point(1,0);
            square = new Fence(points)
        end
    
        it 'should answer false for the point 0.5,0.5'
            var point = "0.5,0.5"
            square.is_outside(inside_point, point).should.be false
        end
        
        it 'should answer true for the point 1.5,1.5'
            var point = "1.5,1.5"
            square.is_outside(inside_point, point).should.be true
        end
        
        it 'should answer false for the point 0.6,0.6'
            var point = "0.6,0.6"
            square.is_outside(inside_point, point).should.be false
        end*/
        
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
    
    describe '.compute_points_belong_to_both_lines(line1, line2)'
        before_each
            points = new Array()
            points[0] = new Point(0,0);
	        points[1] = new Point(0,1);
	        points[2] = new Point(1,1);
	        points[3] = new Point(1,0);
            square = new Fence(points)
        end
       
        it 'should answer an array with 0 elements when lines are paralels'
            line1 = new Line("0,0", "1,1")
            line2 = new Line("0,1", "1,2")
            points = square.compute_points_belong_to_both_lines(line1, line2)
            points.length.should.be 0
        end
        
        it 'should answer an array with 0 elements when lines are the same'
            line1 = new Line("0,0", "1,1")
            points = square.compute_points_belong_to_both_lines(line1, line1)
            points.length.should.be 0
        end
        
        it 'should answer an array with 1 element when lines are concurrent'
            line1 = new Line("0,0", "1,1")
            line2 = new Line("10,1", "12,2")
            points = square.compute_points_belong_to_both_lines(line1, line2)
            points.length.should.be 1
        end
    end

end
