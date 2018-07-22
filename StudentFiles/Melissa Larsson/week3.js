var StartPointY: float = 0; 
var StartPointX: float = 0; 
var ControlPointY: float = 20; 
var ControlPointX: float = 50; 
var EndPointY : float = 50; 
var EndPointX : float = 0; 
var CurveY:float; 
var CurveX: float; 
var BezierTime: float = 0; 
var Cube: Transform; 

function Update() 
{ 
	BezierTime = BezierTime + Time.deltaTime; 
	
	if (BezierTime >= 1) 
	{ 
		BezierTime = 0; 
	} 
	
	CurveY = (((1-BezierTime)*(1-BezierTime)) * StartPointX) + (2 * BezierTime * (1 - BezierTime) * ControlPointX) + ((BezierTime * BezierTime) * EndPointX); 
	CurveX = (((1-BezierTime)*(1-BezierTime)) * StartPointY) + (2 * BezierTime * (1 - BezierTime) * ControlPointY) + ((BezierTime * BezierTime) * EndPointY); 
	transform.position = Vector3(CurveX, CurveY, 0); 
	
}