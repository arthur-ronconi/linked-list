# Linked lists
## Fundamentos
Uma lista ligada é composta por nós, onde cada nó contém dados e uma referência (ou “link”) para o próximo nó da sequência. Isso é diferente dos arrays normais, outra coisa é que as listas ligadas não requerem um bloco contínuo de memória, permitindo inserções e remoções de elementos com eficiência sem a necessidade de reorganizar toda a coleção.

## Implementação
 - Criar uma classe 'Node' com um contructor que leva o valor a ser armazenado como argumento (prop 'data') e um pointer para o próximo Node (next)
 - Criar uma classe 'LinkedList' com um contructor que atribui 'this.next = null'
 - Criar métodos
   - Adicionar no início
   - Adicionar no final
   - Buscar elementos (traverse)
   - Adicionar por índice
   - Remover por índice