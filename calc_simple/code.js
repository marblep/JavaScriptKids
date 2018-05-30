

function OnEqualBtnClick() 
{
	var add1 = Number(document.getElementById("add1").value);
	var add2 = Number(document.getElementById("add2").value);

	var result = document.getElementById("result")
	result.innerText = String(add1+add2);
}