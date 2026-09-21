/**
 * ============================================================================
 * 🎀 NUESTRA HISTORIA DE AMOR - JOSUE (ABRHAM) & ANITA 💕
 * ============================================================================
 * Crónica completa de nuestro amor: 2021, 2024, 2025 y 2026.
 * Basado en:
 * - "¿Casualidad, suerte o destino?" (2024)
 * - "Primer Mes" (02/2025)
 * - "Día de la Mujer" (08/03/2025)
 * - "Segundo Mes & Nuestro Verano Juntos" (22/03/2025)
 * - "Tercer Mes: Madurar y Crecer Juntos" (22/04/2025)
 * - "Seis Meses: El Amor es Elegirse Todos los Días" (22/07/2025)
 * - "Nueve Meses: Porque Simplemente Pasan" (22/10/2025)
 * - "Primer Aniversario: Un Año Juntitos" (22/01/2026)
 * - "Spider-Man & Gwen: Almas Gemelas" (01/03/2026)
 * - "Día de la Mujer 2026: La Promesa" (08/03/2026)
 * ============================================================================
 */

const storyEvents = [
  // ==================== 2021: LOS COMIENZOS ====================
  {
    id: 1,
    year: "2021",
    date: "Años escolares & Círculo de Estudios",
    title: "El Inicio de Todo",
    location: "Colegio y recuerdos de secundaria",
    iconType: "school",
    tag: "Los Inicios",
    summary: "Desde verte detrás de tus amigas en segundo de secundaria hasta el círculo de estudios de Caleb, el destino ya preparaba nuestro encuentro.",
    content: `La primera vez que te vi fue en segundo de secundaria. Recuerdo haberte visto cuando Naomy, Noemí y tú vinieron a hablar con Caleb; estabas ahí atrás y le pregunté a Caleb cómo te llamabas porque no tuve el atrevimiento de preguntártelo a ti directamente.

Años después, en el 2021, Caleb iba a hacer un círculo de estudios donde tú estarías. Por cosas de la vida no pude asistir y supe que viajarías a España. Pero las historias destinadas a ser, siempre encuentran su momento perfecto...`,
    quote: "Las cosas buenas toman su tiempo, y nuestro reencuentro valdría cada segundo de espera."
  },

  // ==================== 2024: LAS CASUALIDADES Y PRIMERAS CITAS ====================
  {
    id: 2,
    year: "2024",
    date: "22 de Junio, 2024",
    title: "La Panadería: El Reencuentro Más Inesperado",
    location: "La panadería del barrio",
    iconType: "bread",
    tag: "Casualidad 1",
    summary: "Yo con mis fachas más horribles y tú tan hermosa como siempre. Un giro del destino tras más de cuatro años sin vernos.",
    content: `Un día completamente aleatorio y de las formas más extrañas de reencontrarse. Yo estaba con mi ropa más descuidada y sin lavarme la cara, y tú tan bonita como siempre. Pagué el pan, volteé... ¡y te vi ahí!

El único nombre que se me vino a la mente fue el tuyo: Anita. Te esperé para regresar juntos conversando hasta la esquina. Me contaste de España y tu bachillerato. En ese momento pensé que las probabilidades de volver a cruzarnos eran mínimas, pero el destino ya tenía otros planes para nosotros.`,
    quote: "Cosas tan simples y espontáneas terminan marcando los recuerdos más bonitos."
  },
  {
    id: 3,
    year: "2024",
    date: "28 de Julio, 2024",
    title: "El Mercado: Segunda Coincidencia",
    location: "Esquina frente a la posta médica",
    iconType: "sparkle",
    tag: "Casualidad 2",
    summary: "Acompañando a mamá a las compras, en un puesto donde casi nunca íbamos, estabas tú.",
    content: `Mi mamá me pidió que la acompañara al mercado para ayudarle con las bolsas. Caminamos mucho y de pronto se le ocurrió comprar en una caserita específica, en una esquina al frente de la posta donde casi nunca compraba conmigo.

Mientras mamá compraba, volteé y ¡otra vez te vi ahí con tu tía! Aunque el saludo y la charla fueron breves, no dejó de ser una casualidad asombrosa y hermosa. Me quedé pensando con una sonrisa: 'Si la primera vez la vi arriba en la panadería, ¿por qué viviría por abajo?'`,
    quote: "¿Casualidad, suerte o destino? Las probabilidades empezaban a desafiar a la lógica."
  },
  {
    id: 4,
    year: "2024",
    date: "19 de Septiembre, 2024",
    title: "Aniversario del Colegio: La Tercera es la Vencida",
    location: "Patio del Colegio",
    iconType: "bow",
    tag: "Casualidad 3",
    summary: "'Ya me van a robar'... volteé ¡y eras tú! Conversar de la UTP, agarrarme del brazo y sentir tu hermosa vibra.",
    content: `Fui al aniversario del colegio para ver a mi hermano bailar. Caleb me canceló a última hora y yo estaba solo mandando un mensaje. De repente vi una sombra detrás de mí y pensé: '¡Ya me van a robar!' Volteé... ¡y estabas ahí!

¿Cómo era posible que las tres veces que te vi estabas detrás de mí? Conversamos mucho, me contaste que ibas a entrar a la UTP a Ingeniería de Sistemas (¡carrera top!) y me agarraste del brazo al entrar para no perdernos. Me transmitiste una vibra tan bonita y especial que esa noche supe que no podía perder la oportunidad de seguir conociéndote.`,
    quote: "¿Es el destino que quiere que te conozca? Tres veces tan aleatorias no podían ser un simple accidente."
  },
  {
    id: 5,
    year: "2024",
    date: "22 de Septiembre, 2024",
    title: "Examen de Admisión & Primeros Mensajes",
    location: "WhatsApp & la pantalla de mi celular",
    iconType: "chat",
    tag: "El Primer Paso",
    summary: "La excusa perfecta para escribirte, saber cómo te fue y planear nuestra primera salida.",
    content: `El 20 y 21 busqué mentalmente la excusa perfecta para escribirte sin que fuera repentino. Recordé que el 22 dabas tu examen de admisión a la universidad. Te escribí por la tarde para saber cómo te fue y terminamos conversando de todo: tus materias favoritas en España, anécdotas y detalles.

Te dije 'Pido perdón si pregunto demasiado', y me respondiste que lo hablaríamos en otra ocasión que nos viéramos. En ese momento se me aceleró el corazón. Te propuse ir a unas cafeterías por el ICPNA y me dijiste: 'Son mis favoritas'. Así comenzó a cocinarse nuestra primera cita oficial.`,
    quote: "Ese 'son mis favoritas' aceleró mi corazón y abrió la puerta a nuestra historia."
  },
  {
    id: 6,
    year: "2024",
    date: "03 de Octubre, 2024",
    title: "Nuestra Primera Cita: Una Aventura Completa",
    location: "Universidad, Teatro Larco, Parque de la Exposición & Centro de Lima",
    iconType: "theater",
    tag: "Primera Cita",
    summary: "Doble exposición en la u, correr sin llaves, tu vestido celeste con angelitos, póker de cinco, la ratita de ballet y olvidar mi polera.",
    content: `Un día lleno de adrenalina: me levanté a las 5 am para exponer primero en la universidad, corrí a casa pero no tenía llaves, fui a lavarme donde mi abuelita y llegué a tiempo para recogerte.

Saliste de tu casa con tu vestido celeste con angelitos y tu carterita... estabas simplemente preciosa. Fuimos al Parque de la Exposición, escuchamos 'Happiness by Super Junior', me acompañaste a mi segunda exposición, vimos la obra de teatro, jugamos al póker de cinco (¡donde me ganaste!) y caminamos por Jirón de la Unión y Plaza de Armas.

En el camino me contaste la anécdota más icónica: cuando en ballet querías ser la princesa y te eligieron de ratita. Al dejarte en casa, te quedaste con mi polera... y no me importó en lo absoluto, porque la salida fue perfecta.`,
    quote: "Te veías tan hermosa que cada minuto corriendo valió totalmente la pena."
  },
  {
    id: 7,
    year: "2024",
    date: "12 de Octubre, 2024",
    title: "Charla en el Parque: A Tres Minutos de Distancia",
    location: "Parque cerca de nuestras casas",
    iconType: "cards",
    tag: "Confidencias",
    summary: "Un mazo de cartas, póker de cinco, risas sobre Mathias y darnos cuenta de lo cerquita que vivimos.",
    content: `Me dijiste 'Eso sí tiene que contarse en persona, salgamos'. Nos encontramos en un parque muy cerca de nuestras casas. Llevé mis cartas para jugar póker de cinco (tu juego favorito) donde seguías ganándome orgullosa mientras yo me 'frustraba' de cariño.

Hablamos de nuestras familias, de las frases célebres de tu papá y descubrimos que estábamos a menos de tres minutos de distancia. Una tarde corta pero que nos unió aún más.`,
    quote: "Querer compartir una tarde sentados en el pasto fue el mejor regalo."
  },
  {
    id: 8,
    year: "2024",
    date: "10 de Noviembre, 2024",
    title: "Segunda Cita: Parque Kennedy & Atardecer en la Playa",
    location: "Miraflores, Parque Kennedy & Costa Verde",
    iconType: "sunset",
    tag: "Atardecer Rosado",
    summary: "Los gatitos de Miraflores, tres puentes tomados del brazo, cielo rosado como tu color favorito y la revelación de Cascanueces.",
    content: `Paseamos por el Kennedy buscando gatitos y luego bajamos a la playa. Me agarraste del brazo para cruzar los tres puentes para sentirte segura. En la playa tendí mi polera en las piedras, vimos el mar y el cielo se tiñó de rosado, tu color preferido.

Allí se me escapó el regalo de tu cumpleaños: las entradas para 'El Cascanueces' en el Teatro Municipal. Te emocionaste tanto que me abrazaste y te di un tierno beso en la cabeza. Más tarde, mientras me contabas tus sueños de viajar juntos a Madrid (Gran Vía, El Retiro, El Prado), en mi mente sonaba 'A dónde vamos' de Morat.`,
    quote: "'A dónde vamos' empezó a sonar en mi corazón desde que te vi soñar conmigo en ese atardecer."
  },
  {
    id: 9,
    year: "2024",
    date: "07 - 08 de Diciembre, 2024",
    title: "Tu Fiesta de Cumpleaños & El Primer Beso",
    location: "Fiesta de cumpleaños de Anita",
    iconType: "heart",
    tag: "El Primer Beso",
    summary: "El libro de Julio Cortázar, tu vestido negro deslumbrante, bailar 'A dónde vamos' y un beso inolvidable bajo la luna.",
    content: `Te llevé de regalo un libro de tu autor favorito, Julio Cortázar. Llegué y estabas divina con un vestido negro que resaltaba toda tu belleza. Bailamos salsa, merengue y cuando sonó 'A dónde vamos' de Morat, fuimos al centro de la pista a bailar solo los dos.

Más tarde salimos a tomar aire y comenzamos a hablar de cosas del pasado. Te dije mis razones de por qué jamás dejaría de hablarte y, de pronto, muy cerca el uno del otro... ¡pum! Nos estábamos besando. Al despedirnos a las 5 am nos dimos otro besito suave en los labios con una duda que me acompañó: ¿quién de los dos inició el primer beso?`,
    quote: "Fue un final perfecto para una noche mágica donde el tiempo se detuvo."
  },
  {
    id: 10,
    year: "2024",
    date: "10 de Diciembre, 2024",
    title: "Tu Cumpleaños Oficial: La Escalera a Medianoche",
    location: "La escalera cerca a tu casa (11:30 PM)",
    iconType: "star",
    tag: "Cumpleaños Anita",
    summary: "Esperar a medianoche para darte un abrazo en el pecho, besos tiernos y tus labios marcados con labial.",
    content: `Esperé toda la noche hasta que regresaras del cine con tu papá y Naomy. A las 11:30 pm bajé a verte a la escalera. Estabas un escalón arriba, lo que te hacía ver un poco más alta. Te abracé fuerte con mi cabeza recostada en tu pecho; sentí una paz gigantesca.

Me confesaste que conmigo sentías una tranquilidad y paz única. Al despedirme con un beso en la mejilla, nuestras miradas se encontraron y volvimos a besarnos. Me fui a casa con una sonrisa infinita y un mensaje tuyo diciendo que me limpiara los labios porque tenían tu labial.`,
    quote: "Sentir esa paz en tu abrazo me confirmó que eres mi lugar seguro en el mundo."
  },
  {
    id: 11,
    year: "2024",
    date: "15 de Diciembre, 2024",
    title: "Parque Wiracocha: Conversación Sincera Bajo el Árbol",
    location: "Colina y árbol del Parque Wiracocha",
    iconType: "tree",
    tag: "Lugar Seguro",
    summary: "Confesión mutua, entender que la respuesta era un sí, 'cuatro horas de batería social que contigo son infinitas' y caramandungas en Metro.",
    content: `Nos sentamos en la sombra de un árbol en una colina. Hablamos de todo con sinceridad: confesaste que fuiste tú quien empezó el beso en la fiesta y me dijiste que te gustaba. Yo te dejé claro que no pensaba alejarme jamás, que te quiero para mucho más que un momento.

Me contaste que normalmente tu batería social dura cuatro horas, pero que conmigo las horas vuelan y sientes una paz absoluta. Nos abrazamos fuerte y nos besamos como si fuéramos nosotros contra el mundo. Regresamos de la mano por Metro comprando caramandungas, viendo las luces navideñas en las calles.`,
    quote: "'Querer a alguien no es simplemente quedarse, es elegir quedarse una y otra vez.'"
  },
  {
    id: 12,
    year: "2024",
    date: "22 de Diciembre, 2024",
    title: "El Cascanueces: Como Sacado de un Cuento",
    location: "Teatro Municipal de Lima & Plaza de Armas",
    iconType: "ballet",
    tag: "Un Cuento Real",
    summary: "Tu top y falda deslumbrantes, títeres, el separador de gatitos 'Nosotros', ver las ratitas en el escenario y un regreso en taxi inolvidable.",
    content: `La fecha más esperada. Estabas radiante con tu top y falda. Fuimos a una función de títeres antes de la obra y te compré un separador de dos gatitos (uno negro y uno naranja) con fondo rosado al que llamaste 'Nosotros'.

En el Teatro Municipal vimos 'El Cascanueces' tomados de la mano, sonriendo cuando salieron las ratitas recordando tu anécdota. Paseamos por la Plaza de Armas iluminada con luces navideñas a solo tres días de Navidad. Y en el taxi de regreso vivimos un momento íntimo, lleno de ternura, complicidad y abrazos que marcó un antes y un después en nuestras vidas.`,
    quote: "Cascanueces marcó un antes y un después. Eres el lugar donde siempre quise estar."
  },
  {
    id: 13,
    year: "2024",
    date: "31 de Diciembre, 2024",
    title: "Fin de Año: Carta de Amor de Abrham",
    location: "Desde lo más profundo de mi corazón",
    iconType: "letter",
    tag: "Carta de Amor",
    summary: "La certeza de que mi suerte la usé en volverte a encontrar.",
    content: `Haberte conocido es lo mejor que me ha pasado en la vida. En muy poco tiempo te volviste una persona fundamental para mí. No sé si fue el destino o fue la suerte, lo único claro que tengo es que mi suerte la gasté en volverte a encontrar.

Eres una chica espectacular: me encanta tu personalidad, que hables, cuentes historias y corrijas tus errores ortográficos de tercero de secundaria. Quiero que sepas que cuentas conmigo incondicionalmente. Eres mi prioridad y nunca olvides que estás en mi corazón. Gracias por todo lo compartido. Cari ^^`,
    quote: "Eres especial e importante. Te quiero con todo mi corazón. Atte. Abrham"
  },

  // ==================== 2025: NUESTRO PRIMER AÑO COMO ENAMORADOS ====================
  {
    id: 14,
    year: "2025",
    date: "22 de Enero, 2025",
    title: "El Día que dijimos Sí: Oficialmente Enamorados",
    location: "En nuestro parque de siempre",
    iconType: "ring",
    tag: "Oficialmente Enamorados",
    summary: "Aquel 22 de enero en el parque cuando te pregunté si podías ser mi enamorada... y empezó formalmente nuestro camino juntos.",
    content: `En ese parque al que tanto acostumbramos ir, te pregunté con el corazón acelerado si podías ser mi enamorada. Aunque en el fondo ya sabía la respuesta, no te imaginas los nervios tan hermosos que sentía ese día.

Gracias por haberme aceptado como tu enamorado. Ese 22 de enero sellamos una promesa de amor, respeto y complicidad que marcaría cada día de este año maravilloso.`,
    quote: "No hay día más feliz que aquel en que me dijiste que sí."
  },
  {
    id: 15,
    year: "2025",
    date: "Febrero, 2025",
    title: "Primer Mes: Spider-Man, el Lore de Series y Cortázar",
    location: "Noches en el parque y risas por chat",
    iconType: "book",
    tag: "Primer Mes",
    summary: "El cuadro Amazing de Spider-Man, escuchar todo el lore de tus series favoritas y la frase de Rayuela.",
    content: `Hoy cumplimos un mes, un mes lleno de experiencias y momentos juntos. Gracias por hacerme reír por chat y en persona, por compartir tu tiempo conmigo aun cuando llegas cansada del trabajo. 

Solo bastó decirte una vez que me gustaba Spider-Man para que me llenaras de detalles preciosos: el cuadro es 'Amazing' y lo tengo en el lugar perfecto para recordar que tú eres mi camino. Me encanta escucharte contar todo el lore de cada serie animada; me fascina saber de ti. Y como dijo Cortázar en Rayuela: 'Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos'.`,
    quote: "Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos — Julio Cortázar"
  },
  {
    id: 16,
    year: "2025",
    date: "08 de Marzo, 2025",
    title: "Día de la Mujer 2025: 'Lucky Vicky, Cariño'",
    location: "En mi corazón",
    iconType: "rose",
    tag: "Día de la Mujer",
    summary: "Admiración profunda por la mujer inteligente, divertida, amorosa y fuerte que eres.",
    content: `Desde que llegaste a mi vida soy inmensamente feliz. Eres una chica maravillosa que está para mí incluso cuando ni yo mismo estoy para mí; con solo verte un momento me arreglas el día. 

Admiro profundamente tu fortaleza y esa mentalidad positiva tuya, como cuando en los días difíciles me dices con una sonrisa: 'Lucky Vicky, cariño'. Eres la representación perfecta de una mujer virtuosa, inteligente y tenaz.`,
    quote: "Con solo verte un momento me arreglas el día por completo."
  },
  {
    id: 17,
    year: "2025",
    date: "22 de Marzo, 2025",
    title: "Segundo Mes & Nuestro Verano Juntos",
    location: "La playa el 22/02 y tardes de atardecer",
    iconType: "sun",
    tag: "Segundo Mes",
    summary: "El misterio del número 22, nuestro amor como función exponencial y tumbados en la arena del mar.",
    content: `Cumplimos dos meses de enamorados. No es lo mismo vivir que sentirse vivo, y contigo yo me siento plenamente vivo. Nuestro amor crece como una función exponencial: somos un sistema dinámico que requiere lógica, pero también creatividad y pasión.

El número 22 nos persigue: 22 de junio reencuentro, 22 de enero novios, y el 22/02 nuestro día inolvidable en la playa, tumbados en la arena y dentro del mar. Aunque soy 'team frío', este verano a tu lado fue insuperable. Como dice Morat: 'Somos la prueba de que existe amor a primera vista'.`,
    quote: "Somos como un algoritmo diseñado para encontrarte en cada coincidencia y elegirte en cada posibilidad."
  },
  {
    id: 18,
    year: "2025",
    date: "22 de Abril, 2025",
    title: "Tercer Mes: Madurar y Crecer Juntos",
    location: "Lima Centro y nuestros paseos",
    iconType: "path",
    tag: "Tercer Mes",
    summary: "Aprender que no todo está bajo mi control, valorar tus viajes a Lima Centro y 'Those Eyes'.",
    content: `Un mes donde pasaron muchas cosas y sentimientos encontrados. Pero lo más valioso fue que aprendimos a mejorar juntos. Gracias por todo el tiempo que me brindas, por venir hasta Lima Centro sabiendo que es un gran esfuerzo.

Entendí que a veces es necesario tomar una pausa para hablar con calma y madurez. Como dice la canción Those Eyes: 'All of the small things that you do are what remind me why I fell for you'. Gracias por elegirme, por quedarte.`,
    quote: "Amar también es saber pausar, comprender y elegirnos con mayor fuerza cada día."
  },
  {
    id: 19,
    year: "2025",
    date: "22 de Julio, 2025",
    title: "Seis Meses: 'El Amor es Elegirse Todos los Días'",
    location: "En cada paso que damos",
    iconType: "heart",
    tag: "Medio Año",
    summary: "No tenemos que estar al 100 para ser amados, dos contra el problema y envejecer juntos.",
    content: `Medio año de enamorados. El amor es una de las experiencias más hermosas, pero elegir amar y respetar a tu pareja va un paso más allá: te elijo en los días felices y también en los difíciles.

Recuerdo la frase que compartimos: 'A veces no necesitamos a alguien que nos arregle, solo necesitamos a alguien que nos quiera mientras nos arreglamos nosotros mismos'. No tenemos que estar al 100 para ser amados. Contigo aprendí que el amor no es perfección, sino el compromiso de dos personas imperfectas que deciden crecer en la misma dirección hasta envejecer juntos.`,
    quote: "El amor no es perfección, es el compromiso de dos personas imperfectas que deciden caminar juntas."
  },
  {
    id: 20,
    year: "2025",
    date: "22 de Octubre, 2025",
    title: "Nueve Meses: 'Simplemente Pasan'",
    location: "Nuestras noches de sueños",
    iconType: "sparkle",
    tag: "Nueve Meses",
    summary: "Comer nubes, verte dormir protegida y soñar con nuestra futura familia.",
    content: `Nueve meses juntos. Reflexionando sobre si la pandemia no hubiera ocurrido, sé con certeza que nuestro destino era encontrarnos en algún punto, porque cuando las cosas buenas tienen que pasar, simplemente pasan.

Te amo tanto como los días en que te gusta comer nubes, te amo tanto como las veces que te quedas dormida sintiéndote protegida a mi lado, y te amo demasiado como para no imaginar un futuro entero a tu lado, formando nuestra familia sin dejar de ser nunca nosotros dos.`,
    quote: "Porque cuando las cosas buenas tienen que pasar, simplemente pasan."
  },

  // ==================== 2026: UN AÑO JUNTOS Y NUESTRO PRESENTE ====================
  {
    id: 21,
    year: "2026",
    date: "22 de Enero, 2026",
    title: "Primer Aniversario: 365 Días de Amarte",
    location: "El parque donde todo se volvió oficial",
    iconType: "ring",
    tag: "Un Año Juntos",
    summary: "Un año de novios: 'Si en algún momento piensas que eres difícil de amar, recuerda que para mí lo difícil es no amarte'.",
    content: `¡Feliz primer aniversario, mi vida! Doce meses enteros desde que en ese parque te pedí ser mi enamorada. Un año lleno de miles de experiencias, de risas, lágrimas compartidas, canciones y complicidad.

Volvería a tener la valentía de hablarte en la panadería mil veces más. Y ese amor que te prometí no ha hecho más que crecer. Si en algún momento piensas que eres difícil de amar, recuerda que para mí lo verdaderamente difícil es no amarte. Muchos dirían que morirían por amor, pero yo decido vivir por ti. Nuestro amor es un lienzo en blanco que seguimos pintando juntos.`,
    quote: "Para mí, lo verdaderamente difícil en este mundo sería no amarte."
  },
  {
    id: 22,
    year: "2026",
    date: "01 de Marzo, 2026",
    title: "Spider-Man & Gwen: Almas Gemelas",
    location: "Apoyándonos en nuestras metas",
    iconType: "bow",
    tag: "Compañeros de Vida",
    summary: "Mis prácticas de carrera, tu esfuerzo en el trabajo con tus pacientes y ser equipo siempre.",
    content: `Nunca amé escribir hasta que te conocí y encontré en ti la razón para plasmar todo en palabras. Gracias por apoyarme en mi nueva etapa de prácticas universitarias, y yo admiro profundamente tu dedicación diaria en el trabajo cuidando a tus pacientes.

Eres y serás mi atardecer más bonito, como aquel día en la playa cuando el cielo se tornó rosado para nosotros. Como Spider-Man y Gwen, tú y yo siempre juntitos. Con todo el amor de tu amigable compañero Spider-Man, Abrham.`,
    quote: "Como Spider-Man y Gwen, como tú y yo: siempre juntitos."
  },
  {
    id: 23,
    year: "2026",
    date: "08 de Marzo, 2026",
    title: "Día de la Mujer 2026: 'La Promesa'",
    location: "En cada amanecer contigo",
    iconType: "rose",
    tag: "Día de la Mujer",
    summary: "Verte recién despierta, tu sonrisa espontánea y la promesa de Melendi.",
    content: `Cómo me encanta verte sonreír, hacer bromas espontáneas y mirarme con ojos de amor. Cómo me fascina verte recién despierta con tus ojitos tiernos, y verte dormir a mi lado con total tranquilidad y seguridad.

Admiro tu valentía para levantarte cada día y salir adelante. Siempre intentaré hacerte la vida un poquito más fácil, porque no estás sola. Como dice la promesa de Melendi: 'Yo te prometo que yo seré quien cuide tus sueños, y cuando estés despierta el que te ayude a tenerlos'.`,
    quote: "Yo te prometo que seré quien cuide tus sueños, y cuando estés despierta el que te ayude a tenerlos — Melendi"
  },
  {
    id: 24,
    year: "2026",
    date: "Presente & Siempre",
    title: "Nuestra Ruta Infinita: Continuará...",
    location: "En cada latido y sueño futuro",
    iconType: "path",
    tag: "El Futuro",
    summary: "El compromiso de dos personas que se eligen una y otra vez contra cualquier adversidad.",
    content: `Nuestra historia no tiene punto final; solo puntos y comas, puntos suspensivos y nuevos capítulos por escribir. Afrontamos cada obstáculo porque no nos enfrentamos el uno al otro: somos nosotros dos contra el problema.

Gracias por ser mi paz, mi cómplice, mi niña consentida y el amor de mi vida. Esta ruta sigue creciendo en cada salida, en cada café, en cada abrazo... ¡Te amo, Anita!`,
    quote: "Querer a alguien no es simplemente quedarse, es elegir quedarse una y otra vez."
  }
];

// Frases de amor dedicadas a Anita (para el frasquito Coquette de notas)
const loveQuotes = [
  {
    quote: "Querer a alguien no es simplemente quedarse, es elegir quedarse una y otra vez.",
    author: "Nuestra promesa eterna"
  },
  {
    quote: "Si en algún momento piensas que eres difícil de amar, recuerda que para mí lo difícil es no amarte.",
    author: "Feliz Primer Aniversario"
  },
  {
    quote: "Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos.",
    author: "Julio Cortázar — Rayuela"
  },
  {
    quote: "No tenemos que estar al 100 para poder ser amados. Solo necesitamos a alguien que nos quiera mientras nos arreglamos nosotros mismos.",
    author: "Seis Meses Juntos"
  },
  {
    quote: "Somos como un algoritmo diseñado para encontrarte en cada coincidencia y elegirte en cada posibilidad.",
    author: "Segundo Mes & Verano"
  },
  {
    quote: "El cielo se puso rosado en la playa, recordándome que hasta el atardecer sabe cuál es tu color favorito.",
    author: "Segunda Cita"
  },
  {
    quote: "Muchos dirían que morirían por amor, pero yo decido vivir por ti y por todas nuestras promesas.",
    author: "Un Año Juntitos"
  },
  {
    quote: "Porque cuando las cosas buenas tienen que pasar, simplemente pasan.",
    author: "Nueve Meses"
  },
  {
    quote: "Yo te prometo que seré quien cuide tus sueños, y cuando estés despierta el que te ayude a tenerlos.",
    author: "Melendi — La Promesa"
  },
  {
    quote: "Como Spider-Man y Gwen, tú y yo siempre juntitos frente a cualquier universo.",
    author: "Tu amigable compañero Abrham"
  },
  {
    quote: "Normalmente tienes 4 horas de batería social... pero conmigo el tiempo no tiene límites.",
    author: "Parque Wiracocha"
  },
  {
    quote: "En la escalera a las 11:30 pm, abrazado a tu pecho, encontré la mayor paz de mi vida.",
    author: "Tu Cumpleaños"
  }
];

// Palabras exactas para el Pupiletras (12 palabras)
const wordSearchWords = [
  "CARIÑO",
  "AMOR",
  "PAZ",
  "FELIZ",
  "TE AMO",
  "APRENDER",
  "CREER",
  "BESO",
  "MI VIDA",
  "DESTINO",
  "JUNTOS",
  "ETERNO"
];

// Exportación para navegadores y Node.js
if (typeof window !== "undefined") {
  window.storyEvents = storyEvents;
  window.loveQuotes = loveQuotes;
  window.wordSearchWords = wordSearchWords;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { storyEvents, loveQuotes, wordSearchWords };
}
