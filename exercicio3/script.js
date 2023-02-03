let comparacaoA = 5 > 20 && 5 < 2
let comparacaoB = 5 === 5 || 5 === '5'
let comparacaoC = !(20 > 50)
let comparacaoD = !(20 > 50 || 50 > 60)

console.log(comparacaoA, comparacaoB, comparacaoC, comparacaoD)
// salario
let salario = 2000
let salarioBaseTotal = salario * 6
// vendas
let vendasJaneiro = 5784.5
let vendasFevereiro = 3148.41
let vendasMarco = 4124.1
let vendasAbril = 1874
let vendasMaio = 7000
let vendasJunho = 9450
let vendasTotal = vendasJaneiro + vendasFevereiro + vendasMarco + vendasAbril + vendasMaio + vendasJunho

// auxilio + comissao
let auxilioCreche = 45.5
let auxilioCrecheTotal = auxilioCreche * 6
let comissaoJaneiro = vendasJaneiro * 0.1
let comissaoFevereiro = vendasFevereiro * 0.1
let comissaoMarco = vendasMarco * 0.1
let comissaoAbril = vendasAbril *  0.1
let comissaoMaio = vendasMaio * 0.1
let comissaoJunho = vendasJunho * 0.1 
let comissaoTotal = comissaoJaneiro + comissaoFevereiro + comissaoMarco + comissaoAbril + comissaoMaio + comissaoJunho
// descontos
let inssJaneiro = (salario + comissaoJaneiro) * 0.05
let inssFevereiro = (salario + comissaoFevereiro) * 0.05
let inssMarco = (salario + comissaoMarco) * 0.05
let inssAbril = (salario + comissaoAbril) * 0.05
let inssMaio = (salario + comissaoMaio) * 0.05
let inssJunho = (salario + comissaoJunho) * 0.05
let inssTotal = inssJaneiro + inssFevereiro + inssMarco + inssAbril + inssMaio + inssJunho


console.log(`O salario fixo mais o auxilio creche eh: ${salario + 2 * auxilioCreche}`)
console.log(`Fulano da Silva recebera de comissao no mes de janeiro: ${vendasJaneiro * 0.1}`)
console.log(`Fulano da Silva sera descontado do INSS no mes de janeiro: ${inssJaneiro}`)
console.log(`O salario de Fulano da Silva por 6 meses sera: ${(salarioBaseTotal + auxilioCrecheTotal + comissaoTotal ) - inssTotal} `)
console.log(`A media do salario de Fulano em 6 meses sera: ${(salarioBaseTotal + auxilioCrecheTotal + comissaoTotal) / 6}`)