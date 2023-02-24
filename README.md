
# Motor Shop

O Motor Shop é uma plataforma de intermediação de vendas de veículos, tem como seu objetivo indexar anuncios de vendedores, podendo os anuncios serem da modalidade venda ou leilão.





## Instalação

Para utilizar o Motor Shop é nexessário ter

Após clonar o repositório, na raiz do repositório instale as dependências necessárias para rodar o projeto: https://github.com/grupo32-t12-paulo/grupo32-t12-paulo-back-end

### Backend

1. Na pasta raiz do backend você encontrará um arquivo *.env.example* crie um arquivo *.env* com base nesse arquivo e preencha as informações necessárias para criar o banco de dados e rodar a aplicação.

2. Instale as dependências com yarn:

```bash
  yarn install
```

3. Carregue as migrations pelo yarn:
```bash
  yarn typeorm migration:run -d src/data-source
```

4. Rode o servidor local pelo yarn:
```bash
  yarn dev
```

### Frontend

1. Instale my-project com yarn:

```bash
  yarn install
```

2. Rode o servidor local com o yarn:
```bash
  yarn start
```
## Autores

- [@Everton Vieira](https://github.com/evertondsvieira)
- [@Naymi Prestes](https://github.com/naymiprestes)
- [@Rafael Formiga](https://github.com/RafaelAraujoFormiga)
- [@Wendel Bueres](https://github.com/WendelBueres)

