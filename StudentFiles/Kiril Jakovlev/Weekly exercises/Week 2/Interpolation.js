var easeType : EaseType; 
var ease : Function;
 
function Awake() {
  ease = Interpolate.Ease(easeType); 
   
   transform.position.y = ease(start, distance, elapsedTime, duration);
}