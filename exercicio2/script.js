const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]

	
};


// ```

// a) Qual o código para imprimir o nome do **primeiro** ator/atriz?
const primeiro = filme.elenco[0]
console.log(primeiro)

// b) Qual o código para imprimir o nome do **último** ator/atriz?
const ultima = filme.elenco[3]
console.log(ultima)


// c) Qual o código para exibir o array com **todas** as transmissões de hoje?
const transmissao = filme.transmissoesHoje
console.table(transmissao)


// d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?

console.log(filme.transmissoesHoje[1].horario)

// // respostas aqui ⬇️