function canc() {
	document.getElementById("form-pro").reset();

}
function Prodotto(codice, nome, descrizione, quantita, prezzo) {
	this.codice = codice;
	this.nome = nome;
	this.descrizione = descrizione;
	this.quantita = quantita
	this.prezzo = prezzo;
	this.toString = function() {
		return "Codice: " + this.codice + "; Nome: " + this.nome
			+ "; Descrizione: " + this.descrizione + "; Quantità: "
			+ this.quantita + "; Prezzo: " + this.prezzo
	}
}

var prodotti = [];
var i = 0;
function addProduct(e) {
	e.preventDefault();
	var cod = document.getElementById("input-cod").value;
	if (cod == "") {
		alert("ma sei scemo?")
		return;
	}
	var nome = document.getElementById("input-nome").value;
	if (nome == "") {
		alert("ma sei scemo?")
		return;
	}
	var des = document.getElementById("input-des").value;
	if (des == "") {
		alert("ma sei scemo?")
		return;
	}
	var qua = parseInt(document.getElementById("input-qua").value);
	if (qua == "") {
		alert("ma sei scemo?")
		return;
	}
	var pre = parseInt(document.getElementById("input-pre").value);
	if (pre == "") {
		alert("ma sei scemo?")
		return;
	}

	var tBody = document.getElementById("tBody");
	var trAsString =
		`<tr>
	<td> ${cod} </td>
	<td> ${nome} </td>
	<td> ${des} </td>
	<td> ${qua} </td>
	<td> ${pre} </td>
	</tr>`
	tBody.innerHTML += trAsString;
	canc()
}

function delArch() {
	var tBody = document.getElementById("tBody")
	tBody.innerHTML = "";
}

function search() {
	//var cod= document.getElementById("input-cod");
	//var table=document.getElementById("tBody");
	//var tr= table.getElementsByTagName("tr");
	//for (i=0; i< tr.length;i++){
	//	td= tr[i].getElementsByTagName("td")[0];
	//	if (td) {
    //  cod = td.textContent || td.innerText;
    // if (txtValue.toUpperCase().indexOf(filter) > -1) {
     //   tr[i].style.display = "";
    //  } else {
    //    tr[i].style.display = "none";
   //   }
   // }
  }

function highP() {
	var highp = 0;
	for (var i = 0; i < prodotti.length; i++) {
		if (prodotti[i].prezzo > highp) {
			highp = prodotti[i].prezzo;

		}
	}
	alert(prodotto)

}

