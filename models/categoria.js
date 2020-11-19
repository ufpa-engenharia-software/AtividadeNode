module.exports = app => {
  return {
    findAll: (params,callback) => {
      return callback(
        [
          {
            nome: "Masculino",
            id: 1
          },
          {
            nome: "Feminino",
            id: 2
          },
          {
            nome: "Infantil",
            id: 3
          },
        ]
      )
    }
  }
};