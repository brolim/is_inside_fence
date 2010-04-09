describe 'Point'

    describe '.is_outside(fence) - when the fence is a square'
        
        before_each
            points = new Array()
            points[0] = new Point(0,0);
	        points[1] = new Point(0,1);
	        points[2] = new Point(1,1);
	        points[3] = new Point(1,0);
            square = new Fence(points)
        end
    
        it 'should answer false for the point (0.5,0.5) with a square fence (0,0);(0,1);(1,1);(1,0)'
            point = new Point(0.5,0.5)
            point.is_outside(square).should.be false
        end

        it 'should answer false for the point (0.1,0.9) with a square fence (0,0);(0,1);(1,1);(1,0)'
            point = new Point(0.1,0.9)
            point.is_outside(square).should.be false
        end
        
        it 'should answer true for the point (1.5,0.5) with a square fence (0,0);(0,1);(1,1);(1,0)'
            point = new Point(1.5,0.5)
            point.is_outside(square).should.be true
        end
        
        it 'should answer true for the point (0.5,1.005) with a square fence (0,0);(0,1);(1,1);(1,0)'
            point = new Point(0.5,1.005)
            point.is_outside(square).should.be true
        end
        
        it 'should answer false for the point (0,0), which is a fence\'s vertex (  square fence is (0,0);(0,1);(1,1);(1,0)  )'
            point = new Point(0,0)
            point.is_outside(square).should.be false
        end
        
        it 'should answer false for the point (0,1), which is a fence\'s vertex (  square fence is (0,0);(0,1);(1,1);(1,0)  )'
            point = new Point(0,1)
            point.is_outside(square).should.be false
        end
        
        it 'should answer false for the point (1,1), which is a fence\'s vertex (  square fence is (0,0);(0,1);(1,1);(1,0)  )'
            point = new Point(1,1)
            point.is_outside(square).should.be false
        end
        
        it 'should answer false for the point (1,0), which is a fence\'s vertex (  square fence is (0,0);(0,1);(1,1);(1,0)  )'
            point = new Point(1,0)
            point.is_outside(square).should.be false
        end

        it 'should answer false for the point (1,0.5), which belongs to the fence\'s border (  square fence is (0,0);(0,1);(1,1);(1,0)  )'
            point = new Point(1,0.5)
            point.is_outside(square).should.be false
        end
        
    end
    
    describe '.is_outside(fence) - when the fence is a concavous polygon'
    
         
         // polygon:
         //
         //    |------------/
         //    |          /
         //    |        /
         //    |      /
         //    |     |
         //    |     |
         //    |       \
         //    |          \
         //    |             \
         //    |----------------\
         //   
        
        before_each
            points = new Array()
            points[0] = new Point(0,0);
	        points[1] = new Point(3,0);
	        points[2] = new Point(1,1);
	        points[3] = new Point(1,2);
	        points[4] = new Point(2,3);
	        points[5] = new Point(0,3);	        
            concavous = new Fence(points)
        end
    
        it 'should answer false for the point (0.5,1) with a concavous fence (0,0);(3,0);(1,1);(1,2);(2,3);(0,3)'
            point = new Point(0.5,1)
            point.is_outside(concavous).should.be false
        end
        
        it 'should answer false for the point (0.3,1.25) with a concavous fence (0,0);(3,0);(1,1);(1,2);(2,3);(0,3)'
            point = new Point(0.3,1.25)
            point.is_outside(concavous).should.be false
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
       
        it 'should answer true if point is (-3,-3) and the segment is formed by (-5,-5) and (1,1)'
            point_limit1 = new Point(-5,-5)
            point_limit2 = new Point(1,1)
            point = new Point(-3,-3)
            
            point.belongs_to_segment(point_limit1, point_limit2).should.be true
        end
        
        it 'should answer true if point is (-3,-3) and the segment is formed by (-1,1) and (-3,-3)'
            point_limit1 = new Point(-1,1)
            point_limit2 = new Point(-3,-3)
            point = new Point(-3,-3)
            
            point.belongs_to_segment(point_limit1, point_limit2).should.be true
        end
        
        it 'should answer true if point is (1,0.5) and the segment is formed by (1,1) and (1,0)'
            point_limit1 = new Point(1,1)
            point_limit2 = new Point(1,0)
            point = new Point(1,0.5)

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
    
        it 'should create a straight line with equation \"x = 1\" if points are (1,1) and (1,0)'
            point1 = new Point(1,1);
	        point2 = new Point(1,0);
	        line = new Line(point1, point2);
            
            line.a.should.be 1
            line.b.should.be 0     
            line.c.should.be -1    
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

        it 'should answer true if the point is (-3,-3) and the line is formed by the following points: (-1,1) and (-3,-3)'
            p1 = new Point(-1,1)
            p2 = new Point(-3,-3)
            point = new Point(-3,-3)
            line2 = new Line(p1, p2);
            
            line2.has(point).should.be true
        end
        
    
        it 'should answer true if point is (1,0.5) and the line is formed by the following points (1,1) and (1,0)'
            p1 = new Point(1,1)
            p2 = new Point(1,0)
            point = new Point(1,0.5)
            line2 = new Line(p1, p2);
            
            line2.has(point).should.be true
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

describe 'Util'
    describe '.compute_point_that_belong_to_both_lines(line1, line2)'
       
        before_each
            util = new Util();
        end
       
        it 'should answer an invalid point when lines are paralels'
            p1 = new Point(0,0);
	        p2 = new Point(1,1);
	        p3 = new Point(0,1);
	        p4 = new Point(1,2);
            line1 = new Line(p1, p2)
            line2 = new Line(p3, p4)
            point = util.compute_point_that_belong_to_both_lines(line1, line2)
            point.valid.should.be false
        end
        
        it 'should answer an invalid point when lines are the same'
            p1 = new Point(0,0);
	        p2 = new Point(1,1);
            line = new Line(p1, p2)
            point = util.compute_point_that_belong_to_both_lines(line, line)
            point.valid.should.be false
        end
        
        it 'should answer a valid point when lines are concurrent'
            p1 = new Point(0,0);
	        p2 = new Point(1,1);
	        p3 = new Point(10,1);
	        p4 = new Point(12,2);
            line1 = new Line(p1, p2)
            line2 = new Line(p3, p4)
            point = util.compute_point_that_belong_to_both_lines(line1, line2)
            point.valid.should.be true
        end
        
        it 'should answer (0.5,0.5) if line1 is formed by (0,0);(1,1) and line2 is formed by (0,1);(1,0)'
            p1 = new Point(0,0);
	        p2 = new Point(1,1);
	        p3 = new Point(0,1);
	        p4 = new Point(1,0);
            line1 = new Line(p1, p2)
            line2 = new Line(p3, p4)
            point = util.compute_point_that_belong_to_both_lines(line1, line2)
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
            point = util.compute_point_that_belong_to_both_lines(line1, line2)
            point.x.should.be 0.5
            point.y.should.be 0.5
        end
        
    end

    describe '.compute_how_many_points_belong_to_two_segments(segment1_p1, segment1_p2, segment2_p1, segment2_p2)'
        it 'should answer 0 if the segment1 is (0,0);(1,0) and segment is (0,1);(1,1)'
            p1 = new Point(0,0);
	        p2 = new Point(1,0);
	        p3 = new Point(0,1);
	        p4 = new Point(1,1);
            result = util.compute_how_many_points_belong_to_two_segments(p1, p2, p3, p4)
            result.should.be 0
        end
    
        it 'should answer 1 if the segment1 is (1,0);(1,1) and segment is (0,0.5);(2,0.5)'
            p1 = new Point(1,0);
            p2 = new Point(1,1);
            p3 = new Point(0,0.5);
            p4 = new Point(2,0.5);
            result = util.compute_how_many_points_belong_to_two_segments(p1, p2, p3, p4)
            result.should.be 1
        end
        
        it 'should answer 1 if the segment1 is (-1,1);(-3,-3) and segment is (-5,-5);(1,1)'
            p1 = new Point(-1,1)
            p2 = new Point(-3,-3)
            p3 = new Point(-5,-5)
            p4 = new Point(1,1)
            result = util.compute_how_many_points_belong_to_two_segments(p1, p2, p3, p4)
            result.should.be 1
        end

        it 'should answer 1 if the segment1 is (1,0);(1,1) and segment is (1,1);(0,1)'
            p1 = new Point(0.5,0.5)
            p2 = new Point(2,2)
            p3 = new Point(1,1)
            p4 = new Point(1,0)
            result = util.compute_how_many_points_belong_to_two_segments(p1, p2, p3, p4)
            result.should.be 1
        end
    
        it 'should answer 1 if the segment1 is (0.3,1.25);(4,1) and segment2 is (1,1);(1,2)'
            p1 = new Point(0.3,1.25)
            p2 = new Point(4,1)
            p3 = new Point(1,1)
            p4 = new Point(1,2)
            util = new Util();
            result = util.compute_how_many_points_belong_to_two_segments(p1, p2, p3, p4)
            result.should.be 1
        end
    
    end
end

