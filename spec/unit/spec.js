
describe 'Fence'
  
    describe '= new Fence(points);'

        it 'should receive at least three points. If it receives one point, its propertie valid should be false'
	    var points = new Array()
	    points[0] = "0,0"

	    var fence = new Fence(points)
	    fence.valid.should.be false
        end

        it 'should receive at least three points. If it receives two points, its propertie valid should be false'
	    var points = new Array()
	    points[0] = "0,0"
	    points[1] = "0,1"

	    var fence = new Fence(points)
	    fence.valid.should.be false
        end

        it 'should receive at least three points. If it receives three points, its propertie valid should be true'
	    var points = new Array()
	    points[0] = "0,0"
	    points[1] = "0,1"
	    points[2] = "1,1"

	    var fence = new Fence(points)
	    fence.valid.should.be true
        end
      
    end
  
  
    describe '.is_outside()'
        before_each
            points = new Array()
            points[0] = "0,0"
	        points[1] = "0,1"
	        points[2] = "1,1"
	        points[3] = "1,0"
	        inside_point = "0.5,0.5"
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
        end
        
    end
    
  
end
