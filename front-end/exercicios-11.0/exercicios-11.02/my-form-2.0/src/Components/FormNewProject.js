import React, { Component } from 'react';

class FormNewProject extends Component {
  render() {
    return (
      <form className="new-topic-form">
        <fieldset>

          <label htmlFor="name">
            Name
            <input type="text" name="name" id="name" maxlength="40" style={{ textTransform: 'lowercase'}} required />            
          </label>      
        
        <label htmlFor="email">
            Email
            <input type="text" name="email" id="email" maxlength="50" required />            
          </label>   

           <label htmlFor="CPF">
            CPF
            <input type="texto" name="CPF" id="CPF" maxlength="11" required />            
          </label>  

          <label htmlFor="endereço">
            Endereço
            <input type="texto" name="endereço" id="endereço" maxlength="200" required />  
            {/* Remover qualquer caracter especial que seja digitado          */}
          </label>  

          <label htmlFor="cidade">
            Cidade
            <input type="texto" name="cidade" id="cidade" maxlength="28" required />     
            {/* Ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.        */}
          </label>

          <label htmlFor="estado">
            Estado                     
             <select id="estado" name="estado" maxlength="11" required>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
            </select>
          </label> 

          <label htmlFor="tipo">
            Tipo
            <input type="radio" name="rate" value="casa" required />Casa
            <input type="radio" name="rate" value="apartamento" required />Apartamento                         
          </label>  

          <fieldset>
          <label htmlFor="resumodocurriculo">
            Resumo do currículo
            <textarea name="resumodocurriculo" id="resumodocurriculo" maxlength="1000" required />
          </label>

          <label htmlFor="cargo">
            Cargo
            <textarea name="cargo" id="cargo" maxlength="1000" required />
          </label>

          <label htmlFor="descricaodocargo">
            Descrição do cargo
            <textarea name="descricaodocargo" id="descricaodocargo" maxlength="500" required />
          </label>

          </fieldset>
        </fieldset>

      </form>
    );
  }
}


export default FormNewProject;