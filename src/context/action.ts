export const initialArgs = [
	{
		id: "1",
		title: "La piedra filosofal 💎",
		year: "1997",
	},
	{
		id: "2",
		title: "La cámara secreta 🤫",
		year: "1998",
	},
	{
		id: "3",
		title: "El prisionero de azkaban 👻",
		year: "1999",
	},
	{
		id: "4",
		title: "El cáliz de fuego 🔥",
		year: "2000",
	},
	{
		id: "5",
		title: "La orden del fénix 🦅🔥",
		year: "2003",
	},
	{
		id: "6",
		title: "El misterio del príncipe 🤴",
		year: "2005",
	},
	{
		id: "7",
		title: "Las reliquias de la muerte ☠️",
		year: "2007",
	},
];

type BookTypeProps = {
  id: string,
  title: string,
  year: string
}

export const bookReducer = (state: typeof initialArgs, action: BookTypeProps) => {

  switch(action.type) {
		case 'ADD_BOOK':
			return [ ...state, action.payload ];
		case 'REMOVE_BOOK':
			return state.filter((book) => book.id !== action.payload )
    default: return state;
  }
}