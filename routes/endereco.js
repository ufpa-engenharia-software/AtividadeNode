module.exports = app => {
	const Endereco = app.models.endereco;
	app.get("/endereco", (req, res) => {
			Endereco.findAll(  
				 {},(retorno) =>
							{
								res.json({endereco: retorno})
							}
			);
	}
	);	
};