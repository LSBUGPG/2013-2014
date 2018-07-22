#pragma strict



function Start () {

}

function Update () {

  transform.Translate( Input.GetAxis("Horizontal") * transform.right * Time.deltaTime );
  transform.Translate( Input.GetAxis("Vertical") * transform.up * Time.deltaTime );
}
