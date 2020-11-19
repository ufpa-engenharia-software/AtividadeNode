module.exports = app => {
  return {
    findAll: (params,callback) => {
      return callback(
        [
          {
            produto: "Camisa Pollo",
            tamanho:"PP",
            valor:"R$ 45,00",
            idProd: 1,
          },

          {
            produto: "Camisa Pollo",
            tamanho:"P",
            valor:"R$ 50,00",
            idProd: 2,
          },

          {
            produto: "Camisa Pollo",
            tamanho:"M",
            valor:"R$ 55,00",
            idProd: 3,
          },

          {
            produto: "Camisa Pollo",
            tamanho:"G",
            valor:"R$ 60,00",
            idProd: 4,
          },

          {
            produto: "Camisa Pollo",
            tamanho:"GG",
            valor:"R$ 65,00",
            idProd: 5,
          },
        ]
      )
   }
  }
};