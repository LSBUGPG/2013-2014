#pragma strict

while (true)

{
     light.enabled = true;
     light.intensity = 10;
     yield WaitForSeconds (3.0);
     light.enabled = false;
     yield WaitForSeconds (0.1);
     light.enabled = true;
     light.intensity = 10;
     yield WaitForSeconds (0.1);
     light.enabled = false;
     yield WaitForSeconds (0.1);
}