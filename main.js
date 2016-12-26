function calcular()
{
	var n1 = document.getElementById("numa").value;
	var n2 = document.getElementById("numb").value;
	var salida = document.getElementById("salida");
	
	var suma=parseInt(n1)+parseInt(n2);

	 if (n1 == 10 || n2 == 10 ) 
    {
		salida.innerHTML = "1";
	
	}
	else if	(suma == 10)
	{
		salida.innerHTML = "1";
		
	
	}
	else 
	{
		salida.innerHTML = "0";
		
	
	}

}