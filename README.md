# Relatorio_Dinamico
Essa aplicação web simula um relatório dinâmico, onde o usuário consiga adicionar componentes e organizá-los para impressão.

- Configuração do projeto
    - React - framework utilizada para desenvolvimento do front-end.
    - Typescript - superset do javaScript usado para evitar possíveis problemas no código e aumentar a eficiência do código.
    - Eslint, prettier e editorConfig - adicionado ao projeto para configurar padrão de código.
    - .vscode - pasta adicionada ao projeto contendo configuração complementar do eslint e sugestão de extensões para o visual studio code.
- Bibliotecas utilizadas
    - Mantine - utilizada para adicionar imagens na aplicação, estilização da aplicação e formulário.
    - Echarts - utilizado para adicionar gráfico na aplicação.
    - React-Draggable - utilizado para tornar componentes deslizáveis.
    - React-to-print - utilizado para gerar o PDF para salvar ou imprimir.

- Como utilizar a aplicação
    - Para a instalação de dependências se é recomendado a utilização do Yarn ([https://yarnpkg.com/](https://yarnpkg.com/)
    ), com o yarn instalado, no terminal digite o comando "yarn", com as dependências instaladas,  execute o comando "yarn dev" para inicializar a aplicação.
    - Abra seu navegador e digite [http://localhost:5173/](http://localhost:5173/)  na barra de URL para acessar a aplicação.
    - A tela inicial é composta por uma folha A4 em branco e dois botões, o primeiro escrito “Adicionar” e o segundo “Imprimir”.
    - Ao clicar no botão Adicionar um modal se abre, nesse modal temos do lado esquerdo a configuração para adicionar uma imagem a folha A4 citada anteriormente, ao lado direto temos a configuração para adicionar um gráfico a mesma folha A4.
    - Campos a serem preenchidos para adição de imagem:
        - Checkbox “Imagem” - Serve para adicionar ou remover a imagem da folha.
        - Título - Referente ao título que ficará logo acima do componente na folha A4.
        - Altura - Define a altura da imagem, o valor adicionado a esse campo será considerado na unidade de medida pixel(px)
        - Largura - Define a largura da imagem, o valor adicionado a esse campo será considerado na unidade de medida pixel(px)
        - Checkbox “Borda?” - serve para adicionar ou remover uma borda a imagem.
        - Tamanho borda - define a espessura da borda da imagem, o valor adicionado a esse campo será considerado na unidade de medida pixel(px)
        - Campo arraste uma imagem - Abre o explorador de arquivos do  computador para selecionar uma imagem ou recebe uma imagem arrasatada até esse campo .
        - Botão selecionar uma imagem - Abre o explorador de arquivos do computador para selecionar uma imagem.

    - Campos a serem preenchidos para adição do gráfico:
        - Checkbox “Gráfico” - Serve para adicionar ou remover o gráfico na folha.
        - Título - Referente ao título que ficará logo acima do componente na folha A4.
        - Altura - Define a altura do gráfico, o valor adicionado a esse campo será considerado na unidade de medida pixel(px)
        - Largura - Define a largura do gráfico, o valor adicionado a esse campo será considerado na unidade de medida pixel(px)
        - Checkbox “Borda?” - serve para adicionar ou remover uma borda ao gráfico.
        - Tamanho borda - define a espessura da borda do gráfico, o valor adicionado a esse campo será considerado na unidade de medida pixel(px)
    - Após preencher o formulário como desejar, bastar pressionar o botão salvar para retornar a tela inicial.
    - Na tela inicial, caso queira posicionar os componentes em um local especifico dentro da folha A4, basta clicar, segurar e arrastar o componente para o local desejado.
    - Para salvar o relatório em PDF bastar clicar no botão “Imprimir” que fica localizado na tela inicial, abrirá um modal com o preview do pdf, após isso basta clicar em “save” e escolher o local onde salvar o PDF.
- Observações:
    - Caso não seja preenchido nenhum campo da configuração de imagem, a imagem irá com suas configurações nativas.
    - Caso não seja preenchido nenhum campo de configuração do gráfico, o gráfico não aparecerá na folha.
    - A imagem só irá alterar com os seus respectivos campos preenchidos, o mesmo serve para o gráfico.
    - O código não teve componentização em larga escala porque se trata de uma aplicação que não será expandida, por isso não teve a necessidade, porém para representação o gráfico foi componentizado.
    - O eslint, prettier e editorconfig foram adicionados pensando no âmbito empresarial, já que ao configurar essas ferramentas o código é forçado a ficar padronizado de acordo com a configuração passada.
    - funções e bibliotecas foram comentadas explicando para que servem.
    - Existe uma diferença de proporção do papel A4 da aplicação para a de impressão final, o bug foi identificado nos testes, momentos antes do prazo para enviar a aplicação, por isso o bug não foi corrigido, porém creio que a solução está relacionada as dimensões estabelecidas a div da folha A4, precisaria de Media Queries que adapte a div para a dimensão exata de uma folha A4 .
		- O caret foi retirado das versões nas dependências do package.json para que não ocorra atualizações automaticas, assim evitando possíveis erros por alteração em alguma dependência.
