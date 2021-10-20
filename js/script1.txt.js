
class Cadastro{

    constructor() {
        this.id = 1;
        this.arrayCadastros = []
        this.editaid = null
    }
    salvar(){
        let cadastro = this.lerdado();


        if ( this.validacampo(cadastro) ) {
            if ( this.editaid == null ){
                this.adicionar( cadastro )
            }
            else {
                this.atualizar( this.editaid, cadastro )
            }
        }


        this.lista()
        this.cancelar()
    }
    adicionar(cadastro){
        this.arrayCadastros.push(cadastro)
        this.id++
    }
    atualizar(id, cadastro){
        for ( let contador = 0; contador < this.arrayCadastros.length; contador++ ) {
            if ( this.arrayCadastros[contador].id == id ) {

                this.arrayCadastros[contador].nome = cadastro.nome
                this.arrayCadastros[contador].sobrenome = cadastro.sobrenome
                this.arrayCadastros[contador].apelido = cadastro.apelido
                this.arrayCadastros[contador].telefone = cadastro.telefone
                this.arrayCadastros[contador].cidade = cadastro.cidade
                this.arrayCadastros[contador].estado = cadastro.estado
            }
        }
    }
    lista(){
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
                  imgeditar.setAttribute("onclick", "cadastro.preparaedicao(" + JSON.stringify(this.arrayCadastros[contador]) + ")");

              let imgexcluir = document.createElement('img')
                  imgexcluir.src = 'img/excluir.png'
                  imgexcluir.setAttribute("onclick", "cadastro.excluir(" + this.arrayCadastros[contador].id + ")");

              td_acao.appendChild(imgeditar)
              td_acao.appendChild(imgexcluir)
        }
    }
    preparaedicao(dados){
        this.editaid = dados.id

        document.getElementById( 'nome' ).value = dados.nome
        document.getElementById( 'sobrenome' ).value = dados.sobrenome
        document.getElementById( 'apelido' ).value = dados.apelido
        document.getElementById( 'telefone' ).value = dados.telefone
        document.getElementById( 'cidade' ).value = dados.cidade
        document.getElementById( 'estado' ).value = dados.estado

        document.getElementById( 'btnatualizar' ).innerText = 'ATUALIZAR'
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
            msg += '- Informe o nome \n'
        }
        if ( cadastro.sobrenome == "" ) {
            msg += '- Informe o sobrenome \n'
        }
        if ( cadastro.telefone == "" ) {
            msg += '- Informe o telefone \n'
        }
        if ( cadastro.cidade == "" ) {
            msg += '- Informe a cidade \n'
        }

        if ( cadastro.estado == "" ) {
            msg += '- Informe o estado \n'
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

        document.getElementById( 'btnatualizar' ).innerText = 'SALVAR'
        this.editaid = null
    }
    excluir(id){

        if ( confirm('Deseja realmente excluir este contato do ID: ' + id + '?'  ) ) {
     
         let tbody = document.getElementById( 'tbody' )    
        
        for ( let contador = 0; contador < this.arrayCadastros.length; contador++){
            if ( this.arrayCadastros[contador].id == id ) {
                this.arrayCadastros.splice(  contador, 1 )
                tbody.deleteRow(contador)
    
            }
          }
        }
        
      } 
}

var cadastro = new Cadastro();
