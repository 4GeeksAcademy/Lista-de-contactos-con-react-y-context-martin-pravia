const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			listaDeContactos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			obtenerContactos: () => {
				fetch("https://playground.4geeks.com/contact/agendas/martopravia/contacts", {
					method: "GET"
					
				})
				.then ((response) => {
					if(!response.ok) {
						throw new Error ("Error en la obtencion de los datos del contacto")
					}
					return response.json()
				})
				.then ((data) => {
					if (data) {
						setStore({listaDeContactos: data.contacts})
					}
				})
				.catch((error) => {
					console.log("Ocurrió un error: ", error )
				})
			}

		}
	};
};

export default getState;
