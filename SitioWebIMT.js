﻿// Archivo JScript

//Funcion para Abrir pop up en base a una imagen o pagina

var popUpWin=0;

function popUpWindow(URLStr, left, top, width, height)

{

  if(popUpWin)

  {

	if(!popUpWin.closed) popUpWin.close();

  }

  popUpWin = open(URLStr, 'popUpWin', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=yes,width='+width+',height='+height+',left='+left+', top='+top+',screenX='+left+',screenY='+top+'');

}

function popUpWindowDitectory(URLStr, left, top, width, height)
{

    if(popUpWin)

    {

	    if(!popUpWin.closed) popUpWin.close();

        }

            popUpWin = open(URLStr, 'popUpWin', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=yes,width='+width+',height='+height+',left='+left+', top='+top+',screenX='+left+',screenY='+top+'');

        }     