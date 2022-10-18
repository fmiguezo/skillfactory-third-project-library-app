import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Cien años de soledad",
    author: ["Gabriel García Márquez"],
    yearOfPublication: "1967",
    srcImage: "https://covers.alibrate.com/b/59872e8acba2bce50c1a6d96/b0bf30dd-8585-4a46-9229-c72a94282fbe/medium",
    description:
      "Cien años de soledad trata un siglo en la vida de la familia Buendía, cuyo patriarca, José Arcadio Buendía, fundó el pueblo ficticio de Macondo, en Colombia. La novela es considerada una obra maestra de la literatura latinoamericana y uno de los ejemplos clásicos del realismo mágico.",
    isbn: "9788420471839",
  },
  {
    id: "2",
    title: "El reino del dragón de oro",
    author: ["Isabel Allende"],
    yearOfPublication: "2003",
    srcImage: "https://www.lanormal.com.ar/media/libros/29a3f71a76e6a40bf93a29e41c0edf89.jpg",
    description:
      "La estatua del Dragón de Oro permanece oculta en un reino pequeño y misterioso, enclavado en la cordillera del Himalaya. Y según cuenta la leyenda, este magnífico objeto, un poderoso instrumento de adivinación incrustado de piedras preciosas, preserva la paz de estas tierras.",
    isbn: "9780060591717",
  },
  {
    id: "3",
    title: "Relato de un náufrago",
    author: ["Gabriel García Márquez"],
    yearOfPublication: "1955",
    srcImage: "https://contentv2.tap-commerce.com/cover/large/9789871138036_1.jpg?id_com=1113",
    description:
      "Relato de un náufrago​ es un reportaje novelado de Gabriel García Márquez que relata la historia de Luis Alejandro Velasco Sánchez, un náufrago que fue proclamado héroe de Colombia, pero tras la versión distribuida por el diario El Espectador de Bogotá, quedó olvidado; este relato obligó a que su autor se diera al .",
    isbn: "9780307350404",
  },
  {
    id: "4",
    title: "Los días del abandono",
    author: ["Elena Ferrante"],
    yearOfPublication: "2002",
    srcImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1173452222l/290188._SY475_.jpg",
    description:
      "Elena Ferrante publicó en 1992 El amor molesto, que se convirtió en un acontecimiento editorial y recibió la unánime aclamación de crítica y público. Once años más tarde, Los días del abandono ha supuesto la incuestionable confirmación de aquel éxito, situándose durante meses en las listas de ventas y consolidando a su autora en la cumbre de la narrativa italiana actual. Una tarde tranquila, mientras recogen la mesa después de comer y los niños juegan en la habitación contigua, Mario anuncia a Olga que la deja. Así, de repente, sin explicación alguna, sin decir adónde va ni despedirse de sus hijos, Mario se marcha con un silencio humillante y profundamente doloroso para Olga, poniendo fin a casi veinte años de matrimonio. De pronto, acosada por los fantasmas de su infancia, Olga ve cómo se derrumba el escenario en el cual transcurría su existencia. En su obligada soledad, en un Turín tórrido y vacío a causa de las vacaciones, apenas puede asumir las responsabilidades cotidianas, hasta que, finalmente, un día aciago en el que la razón amenaza con abandonarla, todo estalla y su mundo se convierte en una espantosa pesadilla de la que cree no poder despertar. El descenso de Olga en los abismos de su infierno interior está narrado con un pulso tan intenso como firme, sin vacilaciones, con una voz desposeída de sentimentalismo y falso pudor. Con la fría precisión del acero, la mano maestra de Elena Ferrante atrapa al lector en un relato sin concesiones y de una sinceridad conmovedora.",
    isbn: "9788478889167",
  },
  {
    id: "5",
    title: "Bajo este sol tremendo",
    author: ["Carlos Busqued"],
    yearOfPublication: "2008",
    srcImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1359249346l/6467123.jpg",
    description:
      "Centarti está hundido en la nada. Sin trabajo ni propósito, pasa sus días encerrado viendo la televisión y fumando porros. Una tarde recibe la llamada de un desconocido que le informa de que su madre y su hermano han sido asesinados a escopetazos. Viaja a Lapachito, el derruido pueblo donde vivía su madre, para hacerse cargo de los cadáveres.",
    isbn: "9788433971852",
  },
  {
    id: "6",
    title: "Magnetizado",
    author: ["Carlos Busqued"],
    yearOfPublication: "2018",
    srcImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519312025l/38721127._SY475_.jpg",
    description:
      "A lo largo de una fantasmal semana de septiembre de 1982, se sucedieron en Buenos Aires cuatro asesinatos nocturnos, sobrios en el despliegue y curiosamente idénticos, a tal punto que se podría pensar en un mismo asesinato repetido cuatro veces. La policía buscó al asesino durante casi un mes, de manera tan intensa como inútil. Finalmente resultó ser un postadolescente de diecinueve años. Un muchacho raro y taciturno que, ya detenido, admitió los crímenes y los describió en detalle sin mostrar emoción alguna. No decía incoherencias, no deliraba, no daba la impresión de estar loco. Sin embargo, el acto mismo era lo loco. Los cuatro asesinatos eran tan específicos como carentes de motivo. No había ninguna razón ni secuencia lógica deducible que llevara a las muertes. Personalidad anómala. Trastorno esquizotípico de la personalidad. Síndrome esquizofrénico sobre personalidad psicopática. Trastorno de personalidad antisocial con núcleos esquizoides. Cuadro delirante crónico, compatible con parafrenia o paranoia. Psicópata esquizo perverso histérico. Autista. Estabilizado. Preso. Aquel muchacho raro de 1982 es hoy un hombre mayor que parece más un empleado público que un asesino en serie. En este libro, ese hombre habla con un escritor en el hospital psiquiátrico del complejo penal de Ezeiza. La conversación visita la nebulosa época de los crímenes y recorre distintos momentos de una historia llena de piezas faltantes, con una variable siempre presente: la extrañeza. Construido a partir de grabaciones de entrevistas, etc.",
    isbn: "9788433939",
  },
  {
    id: "7",
    title: "Gracias por volar conmigo",
    author: ["Fernando Peña"],
    yearOfPublication: "2007",
    srcImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1301347294l/2641751.jpg",
    description:
      "¿Cómo es trabajar en el cielo? ¿Cómo es vivir volando? Fernando Peña, tripulante de a bordo durante once años, nos lo cuenta en primera persona.      Anécdotas, confesiones, sueños, aterrizajes forzosos, pasajeros, tripulantes, pilotos, destinos, amantes, familia, galleys, compañeros, baños, closets, pasiones, corderos, sexo, secretos, apretujes, ciudades, carcajadas, chistes, cargadas, placeres, hoteles, Londres, Nueva York, Miami, personajes, novios, miedos, cómplices, etc., etc.",
    isbn: "9789500728577",
  },
  {
    id: "8",
    title: "El año del pensamiento mágico",
    author: ["Joan Didion"],
    yearOfPublication: "2005",
    srcImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328696739l/8592123.jpg",
    description:
      "Un libro prodigioso por su sinceridad y pasión conmovedoras, Premio Nacional de Estados Unidos a la Mejor Obra de No-ficción de 2005 (The National Book Award), escrito por una de las más emblemáticas escritoras norteamericanas. Joan Didion explora una experiencia intensamente personal y, no obstante, universal: el retrato de un matrimonio - y de una vida en los buenos y en los malos tiempos - que impresionará a cualquiera que haya amado a un marido, a una mujer o a un hijo.",
    isbn: "9788493448745",
  },
  {
    id: "9",
    title: "El lobo estepario",
    author: ["Hermann Hesse"],
    yearOfPublication: "1927",
    srcImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1594758965l/2139323._SY475_.jpg",
    description:
      "Encrucijada de todas las obsesiones e intuiciones de Hermann Hesse (1877-1962) y exponente de su singular talento para el relato, El lobo estepario se inscribe dentro del empeño, patente a lo largo de toda su obra, por iluminar la zona oscura de la condición humana a fin de poner al descubierto su carga trágica y su incierto destino. Ser solitario e incomunicado, extraño y extrañado, Harry Haller, protagonista de esta emblemática novela, ha acabado convirtiéndose en un arquetipo literario en el que se reconocen quienes padecen los devastadores efectos deshumanizadores de una sociedad insolidaria y atomizada.",
    isbn: "9788420633411",
  },
  {
    id: "10",
    title: "Lolita",
    author: ["Vladimir Nabokov"],
    yearOfPublication: "1955",
    srcImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377756377l/7604.jpg",
    description:
      "La historia de la obsesión de Humbert Humbert, un profesor cuarentón, por la doceañera Lolita es una extraordinaria novela de amor en la que intervienen dos componentes explosivos: la atracción perversa por las nínfulas y el incesto. Un itinerario a través de la locura y la muerte, que desemboca en una estilizadísima violencia, narrado, a la vez con autoironía y lirismo desenfrenado, por el propio Humbert Humbert. Lolita es también un retrato ácido y visionario de los Estados Unidos, de los horrores suburbanos y de la cultura del plástico y del motel. En resumen, una exhibición deslumbrante de talento y humor a cargo de un escritor que confesó que le hubiera encantado filmar los pic-nics de Lewis Carrol.",
    isbn: "9788433968272",
  },
  {
    id: "11",
    title: "1984",
    author: ["George Orwell"],
    yearOfPublication: "1949",
    srcImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348990566l/5470.jpg",
    description:
      "1984 es una de las novelas más inquietantes y atractivas del siglo XX. En el año 1984 Londres es una ciudad lúgubre en la que la Policía del Pensamiento controla de forma asfixiante la vida de los ciudadanos. Winston Smith es un peón de este engranaje perverso, su cometido es reescribir la historia para adaptarla a lo que el Partido considera la versión oficial de los hechos... hasta que decide replantearse la verdad del sistema que los gobierna y somete.",
    isbn: "9789875669284",
  },
  {
    id: "12",
    title: "Tokio blues. Norwegian Wood",
    author: ["Haruki Murakami"],
    yearOfPublication: "1987",
    srcImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348287200l/3421809.jpg",
    description:
      "Mientras aterriza en un aeropuerto europeo, Toru Watanabe escucha una vieja canción de los Beatles que le hace retroceder a su juventud, al turbulento Tokio de los años sesenta. Recuerda entonces con melancolía a la misteriosa Naoko, la novia de su mejor amigo de la adolescencia. El suicidio de éste les distanció durante un año, hasta que se reencontraron e iniciaron una relación íntima. Sin embargo, la aparición de otra mujer en su vida lleva a Toru a experimentar el deslumbramiento y el desengaño allí donde todo debería cobrar sentido: el sexo, el amor y la muerte.",
    isbn: "9788483835043",
  },
  {
    id: "13",
    title: "Un mundo feliz",
    author: ["Aldous Huxley"],
    yearOfPublication: "1932",
    srcImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490366342l/53683.jpg",
    description:
      "Un mundo feliz es un clásico de la literatura del siglo XX, una sombría metáfora sobre el futuro. La novela describe un mundo en el que finalmente se han cumplido los peores vaticinios: triunfan los dioses del consumo y la comodidad y el orbe se organiza en diez zonas en apariencia seguras y estables. Sin embargo, este mundo ha sacrificado valores humanos esenciales, y sus habitantes son procreados in vitro a imagen y semejanza de una cadena de montaje.",
    isbn: "9788497594257",
  },
  {
    id: "14",
    title: "Noches blancas",
    author: ["Fyodor Dostoevsky"],
    yearOfPublication: "1848",
    srcImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1370862987l/1628287.jpg",
    description:
      "Noches blancas es una novela del autor ruso Fiódor Dostoievski publicada en 1848, al inicio de la carrera del autor. Como muchas de sus obras, esta novela está narrada en primera persona por un narrador, sin nombre. El protagonista es el arquetipo del joven soñador y solitario e imagina constantemente su vejez solitaria. Durante uno de sus largos y cotidianos paseos por las calles de San Petersburgo se encuentra con una joven, Nástienka. Hasta entonces, él nunca había hablado con mujeres y mucho menos se había enamorado, pero hay algo en ella que le hechiza. El relato está estructurado durante cuatro noches y una mañana.",
    isbn: "9789580471509",
  },
];
export const booksSlice = createSlice({
  //reducers es el que va a contener multiples funciones
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      //console.log(state, action)
      state.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author, yearOfPublication, srcImage, description, isbn } = action.payload;

      const foundBook = state.find((book) => book.id === id);

      if (foundBook) {
        foundBook.title = title;
        foundBook.author = author;
        foundBook.yearOfPublication = yearOfPublication;
        foundBook.srcImage = srcImage;
        foundBook.description = description;
        foundBook.isbn = isbn;
      }
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});
export const { addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;