# e-XImages

Esse repositório contém uma aplicação web para que o usuário selecione múltiplas áreas de uma imagem e o cortes sejam feitos com as coordenadas dadas pelo usuário e exibidos.

## Como configurar
Essa aplicação foi feita com Flask e WebComponents. Para configurar, devemos:

### Pelo docker:

` $ python --version`

Dessa forma a aplicação vai rodar em http://127.0.0.1:8080/
Caso você não tenha o docker disponível, siga os passos a seguir:

### Instalar o Python 3.7

* Windows

O instalador encontra-se em https://www.python.org/downloads/windows


Para verificar se ele encontra-se instalado ` $ python --version` 

* Linux 

` $ sudo apt-get install python3`

Para verificar se ele encontra-se instalado

`$ python3 --version` 

### Instalar o Gerenciador de Pacotes do Python

* Windows

Já está instalado, para verificar `$ pip --version`

* Linux

` $ sudo apt-get install python3-pip`

Para verificar:

`$ pip3 --version`

### Instalar o virtualenv

` $ pip install virtualenv`

### Instalar o Flask

`$ pip install flask`

### Entrar no ambiente virtual

Dentro da pasta do projeto:

`$ source env/bin/activate`

### Rodar o Flask

`$ /env/bin/python3 app.py`

* Para que as requisições aconteçam, mude no arquivo image.js, dentro da função submitCoord, o link disponível dentro do fetch para http://0.0.0.0:5000/

* Após isso, a aplicação estará rodando em http://0.0.0.0:5000/

## Como Usar e Funções

### Seleção de uma imagem
Na página inicial da aplicação ('/') é possível que o usuário selecione uma imagem disponível no banco da aplicação.

### Marcação de múltiplas áreas
Após selecionar uma imagem na página inicial, o usuário será designado para a página da imagem ('/image/nomeDaImagem.ext') onde poderá marcar áreas de interesse nessa página. Para marcar, o usuário deve selecionar o ponto inicial do retângulo (canto acima na esquerda) e depois o ponto final (canto abaixo na direita). Após selecionar todas as áreas de interesse, deve apertar no botão enviar coordenadas.

### Visualização de todos os cortes no banco
Na página inicial e na página de cada imagem, o usuário encontra um botão para Visualizar Cortes, esse botão redireciona o usuário para a página de cortes ('/cropped') onde eles serão exibidos.

