var operando1 = 0;
var operando2 = 0;
var operacao = null;
var startOperando1 = false;
var startOperando2 = false;
var operador = false;
var id;
var resultado = null;

//A função nos fornece o id do elemento clicado e a partir dai verificamos como proceder
//Caso o valor seja uma virgula e a condição de validade seja atendida a chave casaDecimal é setada como true
function tratamento(id){
    if (id == "virgula" && (startOperando1 == false || startOperando2 == false))
        alert("Use a virgula somente após digitar o valor inteiro");
    else if((id == "adicao" || id == "subtracao" || id == "multiplicacao" || id == "divisao") && startOperando1 == false)
        alert("Use um operador apenas após inserir o primeiro oprerando");
    else if((id == "adicao" || id == "subtracao" || id == "multiplicacao" || id == "divisao") && startOperando1 == true && startOperando2 == true)
        alert("Atenção: Uma operação por vez, tecle ENTER para o resultado");
    else if((id == "adicao" || id == "subtracao" || id == "multiplicacao" || id == "divisao") && startOperando1 == true && startOperando2 == false) {
		operador = true;
        switch(id) {
            case 'adicao':
                operacao = 'adicao';
                document.getElementById('visor').placeholder = (document.getElementById('visor').placeholder + '+');
                break;
            case 'subtracao':
                operacao = 'subtracao';
                document.getElementById('visor').placeholder = (document.getElementById('visor').placeholder + '-');
                break;
            case 'multiplicacao':
                operacao = 'multiplicacao';
                document.getElementById('visor').placeholder = (document.getElementById('visor').placeholder + '*');
                break;
            case 'divisao':
                operacao = 'divisao';
                document.getElementById('visor').placeholder = (document.getElementById('visor').placeholder + '/');
                break;
            default:
                document.getElementById("visor").placeholder = 'ERRO'
                return false;
        }


    }
    else {
		if(operador == false) {
            if(startOperando1 == false) {
                operando1 = document.getElementById(id).value;
                document.getElementById('visor').placeholder = operando1;    
            }
            else {
			operando1 = operando1 + document.getElementById(id).value;
            document.getElementById('visor').placeholder = operando1;
            }
            startOperando1 = true;
		}
		else {
            if (operando2 == false) {
                operando2 = document.getElementById(id).value;
                document.getElementById('visor').placeholder = document.getElementById('visor').placeholder + operando2;    
            }
            else {
                operando2 = operando2 + document.getElementById(id).value;
                document.getElementById('visor').placeholder = document.getElementById('visor').placeholder + operando2;
            }
            startOperando2 = true;
		}       
    }
}

//Operações e resultados quando o botão ENTER (submit) for clicado
function op() {
	operando1 = parseFloat(operando1);
	operando2 = parseFloat(operando2);
    switch(operacao) {
        case 'adicao':
            resultado = operando1 + operando2;
            break;
        case 'subtracao':
            resultado = operando1 - operando2;
            break;
        case 'multiplicacao':
            resultado = operando1 * operando2;
            break;
        case 'divisao':
            resultado = operando1 / operando2;
            break;
        default:
            document.getElementById("visor").placeholder = 'ERRO'
            return false;
    }

    document.getElementById('visor').placeholder = resultado;
    operando1 = String(resultado);
    operando2 = null;
    operacao = null;
    operador = false;
    startOperando2 = false;
    id;
    resultado = null;
}