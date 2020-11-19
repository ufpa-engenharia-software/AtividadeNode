module.exports = app => {
	const Categoria = app.models.categoria;
	app.get("/categoria", (req, res) => {
			Categoria.findAll(  
				 {},(retorno) =>
							{
								res.json({categoria: retorno})
							}
			);
	}
	);	
};