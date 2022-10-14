// const Redux = require('redux');
// const store = Redux.createStore();

// const reducer = (state = { login: false, email: "" }) => {
//   return state;
//   };
  
//   const store = Redux.createStore(reducer);

  // const ESTADO_INICIAL = {
  //   login: false,
  //   email: "",
  //   };
    
  //   const reducer = (state = ESTADO_INICIAL) => {
  //   return state;
  //   };
    
  //   const store = Redux.createStore(reducer);

  // const ESTADO_INICIAL = {
  //   login: false,
  //   email: "",
  // };
  
  // const reducer = (state = ESTADO_INICIAL) => {
  //   return state;
  // };
  
  // const store = Redux.createStore(reducer);
  
  // console.log(store.getState());
  
  // //{ login: false, email: '' }

  const fazerLogin = (email) => ({
    type: "LOGIN",
    email});
  
  const ESTADO_INICIAL = {
    login: false,
    email: "",
  };
  
  const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          login: !state.login,
          email: action.email,
        };
      default: // No switch, sempre precisamos ter um caso default!
        return state;
    }
  };
  
  const store = Redux.createStore(reducer);
  
  store.dispatch(fazerLogin("alguem@email.com"));
  
  console.log(store.getState());
  
  // { login: true, email: 'alguem@email.com' }

// Conseguimos mudar o estado da store utilizando o dispatch. Ele despacha nossa action para //dentro do reducer, para que nosso estado seja alterado. Note, também, que o reducer retorna todo o estado, e não somente o que será modificado. Retornamos, então, um objeto que contém todos os dados atuais do estado { ...state } mais as chaves que serão modificadas pela action! Mas e se tivermos mais de um reducer?
// Exercícios de fixação
// 1 - Criando um Redux store
// 2 - Buscando o estado dentro de um Redux store
// 3 - Definindo uma Action


