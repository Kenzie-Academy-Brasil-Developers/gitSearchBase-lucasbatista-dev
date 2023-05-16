# Git Search #

## Sobre o Projeto

Nesse projeto, desenvolvi a aplicação Git Search, um ambiente virtual que permite buscar desenvolvedores e visualizar seus repositórios públicos no GitHub. O objetivo é criar uma interface simples e intuitiva, seguindo o protótipo do Figma, e utilizar o consumo da API do GitHub para obter os dados dos usuários e repositórios.

## Fluxo da Aplicação

O fluxo da aplicação Git Search é o seguinte:

1. Acessar a página inicial.
2. Procurar um usuário do GitHub por meio do campo de busca.
3. Se o usuário não for encontrado, o usuário será redirecionado para a página 404.
4. Caso o usuário seja encontrado, o usuário poderá visualizar a página com as informações do usuário pesquisado, incluindo o avatar, nome e lista de repositórios.
5. Na página inicial, é possível buscar os dados da API do GitHub com base no valor inserido no campo de busca. Utilizaremos o endpoint https://api.github.com/users/{value}.
6. Se o usuário não for encontrado, a aplicação redirecionará para uma página com a mensagem "Ooops! Não encontramos o usuário que você procurou. Vamos tentar novamente."
7. O botão "Nova Busca" permite que o usuário retorne à página inicial.
8. Na página Home, serão renderizadas as informações do usuário pesquisado, como o avatar, nome e lista de repositórios.
9. Será criada uma funcionalidade que permita ao usuário retornar à página inicial clicando no link da barra de navegação com o texto "Trocar de usuário".

## Estilização e Navegação

A estilização e a criação das interfaces serão desenvolvidas com base no protótipo fornecido no Figma. Utilizamos CSS para garantir que a aplicação seja fiel ao design proposto.

A navegação entre as páginas foi realizada por meio de links e redirecionamentos, permitindo que o usuário busque por diferentes usuários e retorne à página inicial quando desejado.

## Consumo de API

Utilizamos o consumo da API do GitHub para obter os dados dos usuários e repositórios. Foi feito requisições HTTP para o endpoint https://api.github.com e utilido os dados recebidos para exibir as informações na aplicação.

## Considerações Finais

Neste projeto Git Search, desenvolvi uma aplicação que permite buscar desenvolvedores no GitHub e visualizar seus repositórios públicos. Utilizei o consumo da API do GitHub para obter os dados necessários e criei uma interface fiel ao protótipo fornecido no Figma.

Implementei o fluxo da aplicação, permitindo a busca de usuários, exibindo suas informações e redirecionando o usuário corretamente em caso de usuário não encontrado.

A estilização e a navegação foram implementadas de acordo com o design proposto, utilizando CSS e links para permitir uma experiência de usuário intuitiva.

Em caso de dúvidas ou sugestões, não hesite em entrar em contato.

---

## Contato

Você pode me encontrar no [LinkedIn](https://www.linkedin.com/in/lucasbatista-dev/).

