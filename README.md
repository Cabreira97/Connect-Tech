
---

### README - Admin

```markdown
# Admin - Interface de Administração

Este repositório é a interface de administração construída com Expo para gerenciar a API criada no repositório `nest-typescript-starter`. O painel de administração permite a criação e gerenciamento de usuários, além de exibir informações e estatísticas relacionadas ao sistema.

## Tecnologias Usadas

- **Expo**: Framework para construir aplicações nativas com React.
- **React Navigation**: Para gerenciar a navegação no app.
- **Axios**: Para fazer requisições HTTP à API.
- **React Hook Form**: Para gerenciamento de formulários.
- **Zod**: Para validação de dados.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/connectech.git
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o ambiente:
    Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias, por exemplo:
    ```env
    API_URL=http://localhost:3000
    ```

4. Inicie o aplicativo:
    - Para Android:
        ```bash
        npm run android
        ```

    - Para iOS:
        ```bash
        npm run ios
        ```

    - Para Web:
        ```bash
        npm run web
        ```

5. Acesse a interface de administração no seu dispositivo.

## Funcionalidades

- **Login de administrador**: Permite o acesso ao painel de administração.
- **Gestão de usuários**: Criação, edição e exclusão de usuários.
- **Exibição de estatísticas**: Visualização de dados e métricas do sistema.

## Licença

Este projeto está licenciado sob a Licença MIT.
