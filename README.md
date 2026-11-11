# 🐾 PetCare

Landing page responsiva para um negócio de cuidados com pets, desenvolvida com HTML, CSS e JavaScript puro. O layout foi criado a partir de um esboço (wireframe) feito à mão.

## 📋 Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Seções da página](#seções-da-página)
- [Tecnologias](#tecnologias)
- [Estrutura de arquivos](#estrutura-de-arquivos)
- [Como executar](#como-executar)
- [Responsividade](#responsividade)
- [Personalização](#personalização)
- [Próximos passos](#próximos-passos)
- [Licença](#licença)
- [Autor](#autor)

## Sobre o projeto

A PetCare é uma landing page que apresenta uma empresa fictícia de cuidados com animais de estimação. A página reúne produtos, dicas de cuidado e controle de gastos, e permite que o visitante cadastre o seu pet por um formulário.

O projeto não usa frameworks nem bibliotecas: só HTML, CSS e JavaScript.

## Funcionalidades

- Layout responsivo para celular, tablet e desktop
- Cabeçalho fixo no topo da página com menu de navegação
- Menu hambúrguer no celular, que fecha ao clicar em um link ou ao ampliar a tela
- Rolagem suave entre as seções
- Cards com efeito ao passar o mouse
- Formulário de cadastro de pet com validação:
  - campos obrigatórios
  - formato de e-mail
  - destaque em vermelho nos campos com erro
  - mensagem de sucesso com o nome do pet

## Seções da página

| Seção | Descrição |
|---|---|
| Cabeçalho | Logo e menu: Início, Produtos, Cuidados e Contato |
| Hero | Imagem e texto "Quem somos" |
| Cards | Produtos, Cuidados e Gastos com pet |
| Cadastro | Formulário "Cadastre seu pet" (nome, e-mail, tipo de pet e cidade) |
| Rodapé | Sobre, Contato e Redes sociais |

## Tecnologias

- **HTML5**: estrutura semântica (`header`, `main`, `section`, `article`, `footer`)
- **CSS3**: variáveis CSS, Grid, Flexbox e media queries
- **JavaScript (ES6)**: menu mobile e validação do formulário

## Estrutura de arquivos

```
petcare/
├── index.html   # Estrutura da página
├── style.css    # Estilos e responsividade
├── script.js    # Menu mobile e validação do formulário
└── README.md
```

## Como executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/petcare.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd petcare
   ```

3. Abra o arquivo `index.html` no navegador (clique duas vezes nele ou use a extensão Live Server no VS Code).

Não é preciso instalar nada.

## Responsividade

O layout se adapta a três faixas de tela:

| Largura da tela | Comportamento |
|---|---|
| Acima de 920px | Menu completo no topo, hero em duas colunas, cards em três colunas |
| Até 920px | Menu hambúrguer, hero e cards em uma coluna, rodapé empilhado |
| Até 560px | Espaçamentos reduzidos para telas pequenas |

## Personalização

**Cores e medidas:** ficam nas variáveis no início do `style.css`:

```css
:root {
  --cream: #FAF3E6;
  --forest: #1E3D34;
  --gold: #E3A23C;
  --coral: #E96C4F;
  /* ... */
}
```

**Fontes:** o CSS usa Baloo 2, Work Sans e Space Mono. Para carregá-las, adicione no `<head>` do `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Work+Sans:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

Sem esse link, o navegador usa a fonte padrão.

**Imagem do hero:** troque o emoji dentro de `.hero-art` por uma imagem:

```html
<div class="hero-art"><img src="imagens/pets.jpg" alt="Cachorro e gato"></div>
```

## Próximos passos

- [ ] Enviar os dados do formulário para um backend ou serviço de formulários (o formulário atual só valida e mostra a mensagem de sucesso)
- [ ] Criar as páginas de Produtos, Cuidados e Gastos com pet
- [ ] Substituir o emoji do hero por uma foto real
- [ ] Adicionar links reais nas redes sociais
- [ ] Publicar com GitHub Pages

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Autor

Feito por **Seu Nome**
[GitHub](https://github.com/seu-usuario) · [LinkedIn](https://linkedin.com/in/seu-usuario)
