#pragma strict

function Start () {

}

function Update (){

  transform.Translate( Input.GetAxis("Horizontal") * transform.right * Time.deltaTime * 10 );
  transform.Translate( Input.GetAxis("Vertical") * transform.up * Time.deltaTime *10 );
}