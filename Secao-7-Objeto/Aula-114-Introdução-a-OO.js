// Procedural
// processamento(valor1, valor2, valor3)

// OO
objeto = {
    // Atributos do objeto
    valor1: 5,
    valor2: "Abcd",
    valor3: 3.739,

    // Métodos do objeto
    processamento() {
        return "processamento() é um método do objeto";
    }
}

console.log(objeto.processamento())

/*
 Princípios Importantes:
 1. Abstração: é abstrair (obter informações relevantes) sobre um objeto do mundo real e 
    traduzir essas informações que podem compreender atributos e métodos para a necessidade do software
 2. Encapsulamento: esconder os detalhes de implementação e mostrar apenas para quem (ou o quê) tiver a necessidade
  e direito de acesso a esses dettalhes
 3.a. Composição: partes menores de um método, que fazem parte de uma função, que fazem parte de um objeto que podem compor um módulo ou sistema.
      Devem ser escritos de forma que se forem alterados causem o mínimo impacto possível.
 3.b. Herança: é um princípio baseado na relação " é um ". Usado para composição e reuso de código.
      Por exemplo: pode haver uma instância (objeto) nomeado Civic que É UM carro, então herda os atributos e métodos de carro.
 4. Polimorfismo (mútiplas formas): uma vez que funções são objetos, objetos são mutáveis e variáveis não possuem tipos definidos. 
    Definimos Polimorfismo como um princípio a partir do qual as classes derivadas de uma única classe base são capazes de invocar métodos
    que, embora apresentem a mesma assinatura, comportam-se de maneira diferente para cada uma das classes derivadas.
*/