module.exports = app => {
  return {
    findAll: (params,callback) => {
      return callback(
        [
          {
             "cep": "68780-000", 
             "logradouro": "", 
             "complemento": "", 
             "bairro": "", 
             "localidade": "Vigia", 
             "uf": "PA", 
             "ibge": "1508209", 
             "gia": "", 
             "ddd": "91", 
             "siafi": "0563", 

            nomeCompleto:"Ricardo Pinto",
            cep:"68780000",
            estado:"PA",
            cidade:"Vigia de Nazaré",
            bairro:"Amparo",
            ruaAvenida:"Av. Dr. Marcionilo Alves",
            numero:"483",
            dadosAdicionais:"a",
            telefone:"a",
            endereço: "Masculino",
            idEnd: 1
          }
        ]
      )
    }
  }
};