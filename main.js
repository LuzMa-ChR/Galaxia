var arregloGalaxias;

function crearGalaxia()
{
	var canvas=document.getElementById("myCanvas");
	var context=canvas.getContext("2d");

	context.fillStyle = "#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	arregloGalaxias= new Array(new Galaxia("Sombrero",40,60,50,"black",28000,50,100),
								new Galaxia("Ojo Negro",10,90,15,"red",17000,230,100),
								new Galaxia("Via Lactea",20,40,60,"purple",25000,450,100),
								new Galaxia("Burro",30,80,30,"blue",3000,600,100),);

	for(var i=arregloGalaxias.length-1;i>=0;i--)
	{
		arregloGalaxias[i].Dibujar(context);
	}
}

function ordenarGalaxiaCantidad()
{
	var n=arregloGalaxias.length;
	var aux;
	var aux_x_j, aux_y_j;
	var	aux_x_j_1, aux_y_j_1;
		
	for(var i = 2; i <= n; i++)
	{
		for(var j = 0; j <= n-i; j++)
		{
			if(arregloGalaxias[j].CantidadE > arregloGalaxias[j+1].CantidadE)
			{
			
				aux = arregloGalaxias[j];
				aux_x_j = arregloGalaxias[j].X;
				aux_y_j = arregloGalaxias[j].Y;
				aux_x_j_1 = arregloGalaxias[j+1].X;
				aux_y_j_1 = arregloGalaxias[j+1].Y;
				
				arregloGalaxias[j] = arregloGalaxias[j+1];
				arregloGalaxias[j+1] = aux;

				arregloGalaxias[j].X = aux_x_j;
				arregloGalaxias[j].Y = aux_y_j;

				arregloGalaxias[j+1].X = aux_x_j_1;
				arregloGalaxias[j+1].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle="#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloGalaxias.length - 1; i >= 0; i--) 
	{
		arregloGalaxias[i].Dibujar(context);
	}
}

function ordenarGalaxiaAncho()
{
	var n=arregloGalaxias.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloGalaxias[j].Ancho > arregloGalaxias[j+1].Ancho){
				//Intercambio
				aux = arregloGalaxias[j];
				aux_x_j = arregloGalaxias[j].X;
				aux_y_j = arregloGalaxias[j].Y;
				aux_x_j_1 = arregloGalaxias[j+1].X;
				aux_y_j_1 = arregloGalaxias[j+1].Y;
				
				arregloGalaxias[j] = arregloGalaxias[j+1];
				arregloGalaxias[j+1] = aux;

				arregloGalaxias[j].X = aux_x_j;
				arregloGalaxias[j].Y = aux_y_j;

				arregloGalaxias[j+1].X = aux_x_j_1;
				arregloGalaxias[j+1].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloGalaxias.length - 1; i >= 0; i--) {
		arregloGalaxias[i].Dibujar(context);
	}
}

function ordenarGalaxiaColor()
{
	var n=arregloGalaxias.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloGalaxias[j].Color > arregloGalaxias[j+1].Color){
				//Intercambio
				aux = arregloGalaxias[j];
				aux_x_j = arregloGalaxias[j].X;
				aux_y_j = arregloGalaxias[j].Y;
				aux_x_j_1 = arregloGalaxias[j+1].X;
				aux_y_j_1 = arregloGalaxias[j+1].Y;
				
				arregloGalaxias[j] = arregloGalaxias[j+1];
				arregloGalaxias[j+1] = aux;

				arregloGalaxias[j].X = aux_x_j;
				arregloGalaxias[j].Y = aux_y_j;

				arregloGalaxias[j+1].X = aux_x_j_1;
				arregloGalaxias[j+1].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloGalaxias.length - 1; i >= 0; i--) {
		arregloGalaxias[i].Dibujar(context);
	}
}

function ordenarGalaxiaNombre()
{
	var n=arregloGalaxias.length;
	var aux;
	var aux_x_j, aux_y_j;
	var	aux_x_j_1, aux_y_j_1;
		
	for(var i = 2; i <= n; i++)
	{
		for(var j = 0; j <= n-i; j++)
		{
			if(arregloGalaxias[j].Nombre > arregloGalaxias[j+1].Nombre)
			{
			
				aux = arregloGalaxias[j];
				aux_x_j = arregloGalaxias[j].X;
				aux_y_j = arregloGalaxias[j].Y;
				aux_x_j_1 = arregloGalaxias[j+1].X;
				aux_y_j_1 = arregloGalaxias[j+1].Y;
				
				arregloGalaxias[j] = arregloGalaxias[j+1];
				arregloGalaxias[j+1] = aux;

				arregloGalaxias[j].X = aux_x_j;
				arregloGalaxias[j].Y = aux_y_j;

				arregloGalaxias[j+1].X = aux_x_j_1;
				arregloGalaxias[j+1].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle="#fff";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloGalaxias.length - 1; i >= 0; i--) 
	{
		arregloGalaxias[i].Dibujar(context);
	}
}