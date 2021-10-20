class Cadastro{

    constructor() {
        this.id = 1;
        this.arrayCadastros = []
    }
    salvar(){
        let cadastro = this.lerdado();


        if ( this.validacampo(cadastro) ) {
           this.adicionar(cadastro)
        }


        this.listatabela()
        this.cancelar()
    }
    adicionar(cadastro){
        this.arrayCadastros.push(cadastro)
        this.id++
    }
    listatabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ""

        for ( let contador = 0; contador < this.arrayCadastros.length; contador++ ) {
              let tr = tbody.insertRow()

              let td_id = tr.insertCell()
              let td_nome = tr.insertCell()
              let td_sobrenome = tr.insertCell()
              let td_apelido = tr.insertCell()
              let td_telefone = tr.insertCell()
              let td_cidade = tr.insertCell()
              let td_estado = tr.insertCell()
              let td_acao = tr.insertCell()

              td_id.innerText = this.arrayCadastros[contador].id
              td_nome.innerText = this.arrayCadastros[contador].nome
              td_sobrenome.innerText = this.arrayCadastros[contador].sobrenome
              td_apelido.innerText = this.arrayCadastros[contador].apelido
              td_telefone.innerHTML = this.arrayCadastros[contador].telefone
              td_cidade.innerHTML = this.arrayCadastros[contador].cidade
              td_estado.innerHTML = this.arrayCadastros[contador].estado

              td_id.classList.add('center')
              td_acao.classList.add('center')

              let imgeditar = document.createElement('img')
                  imgeditar.src = 'img/editar.png'

              let imgexcluir = document.createElement('img')
                  imgexcluir.src = 'img/excluir.png'

              td_acao.appendChild(imgeditar)
              td_acao.appendChild(imgexcluir)
        }
    }
    lerdado(){
        let  cadastro = {}

        cadastro.id = this.id;
        cadastro.nome = document.getElementById('nome').value
        cadastro.sobrenome = document.getElementById('sobrenome').value
        cadastro.apelido = document.getElementById('apelido').value
        cadastro.telefone = document.getElementById('telefone').value
        cadastro.cidade = document.getElementById('cidade').value
        cadastro.estado = document.getElementById('estado').value

        return cadastro
    }

    validacampo(cadastro){
        let msg = '';

        if ( cadastro.nome == '' ) {
            msg += 'Informe o nome \n'
        }
        if ( cadastro.sobrenome == "" ) {
            msg += 'Informe o sobrenome \n'
        }
        if ( cadastro.telefone == "" ) {
            msg += 'Informe o telefone \n'
        }
        if ( cadastro.cidade == "" ) {
            msg += 'Informe a cidade \n'
        }

        if ( cadastro.estado == "" ) {
            msg += 'Informe o estado \n'
        }
        if ( msg != '' ) {
            alert(msg)
            return false;
        }
        return true;

    }
    cancelar(){
        document.getElementById('nome').value = ""
        document.getElementById('sobrenome').value = ""
        document.getElementById('apelido').value = ""
        document.getElementById('telefone').value = ""
        document.getElementById('cidade').value = ""
        document.getElementById('estado').value = ""
    }
}

var cadastro = new Cadastro();

