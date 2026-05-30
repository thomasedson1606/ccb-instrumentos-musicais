export interface InstrumentVideo {
  url: string;
  title?: string;
}

export interface Instrument {
  id: string;
  name: string;
  family: 'cordas' | 'madeiras' | 'metais' | 'teclas';
  description: string;
  descriptionLong: string;
  image: string;
  videos: InstrumentVideo[];
  origin?: string;
  curiosidade?: string;
}

export const instrumentFamilies: { id: string; name: string; subtitle: string }[] = [
  { id: 'cordas', name: 'Cordas', subtitle: 'Instrumentos de corda dedilhada ou friccionada' },
  { id: 'madeiras', name: 'Madeiras', subtitle: 'Instrumentos de sopro em madeira' },
  { id: 'metais', name: 'Metais', subtitle: 'Instrumentos de sopro em metal' },
  { id: 'teclas', name: 'Teclas', subtitle: 'Instrumentos de teclado' },
];

const instruments: Instrument[] = [
  {
    id: 'violino',
    name: 'Violino',
    family: 'cordas',
    description: 'Instrumento de cordas friccionadas, o mais agudo da família das cordas.',
    descriptionLong: 'O violino é um instrumento musical de cordas friccionadas, o menor e mais agudo da família dos violinos. Possui quatro cordas afinadas em quintas. É utilizado em orquestras, música de câmara e como instrumento solo. Na CCB, é um dos instrumentos mais tradicionais e amplamente utilizados no louvor.',
    image: 'https://images.unsplash.com/photo-1558369177-6546e1e15579?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example1', title: 'Introdução ao Violino' },
    ],
    origin: 'Itália, século XVI',
    curiosidade: 'O violino moderno foi desenvolvido na Itália pelos lendários luthiers Stradivari e Guarneri.',
  },
  {
    id: 'viola',
    name: 'Viola',
    family: 'cordas',
    description: 'Instrumento de cordas friccionadas, ligeiramente maior que o violino.',
    descriptionLong: 'A viola é um instrumento de cordas friccionadas, similar ao violino porém de tamanho ligeiramente maior e som mais grave. Sua afinação é uma quinta abaixo do violino. Na CCB, a viola é valorizada por seu timbre aveludado e expressivo, complementando harmoniosamente o conjunto instrumental.',
    image: 'https://images.unsplash.com/photo-1612225330812-01a9e6b5b4c6?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example2', title: 'A Viola na CCB' },
    ],
    origin: 'Itália, século XVI',
    curiosidade: 'A viola possui um som mais encorpado que o violino, sendo frequentemente descrita como "a voz do meio" na orquestra.',
  },
  {
    id: 'violoncelo',
    name: 'Violoncelo',
    family: 'cordas',
    description: 'Instrumento de cordas friccionadas de som grave e expressivo.',
    descriptionLong: 'O violoncelo é um instrumento de cordas friccionadas da família dos violinos, de tamanho muito maior que a viola e o violino. Tocado entre os joelhos, produz um som grave, rico e melodioso. Na CCB, o violoncelo adiciona profundidade e solenidade ao louvor congregacional.',
    image: 'https://images.unsplash.com/photo-1598574897453-37e1e6df6231?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example3', title: 'Violoncelo no Louvor' },
    ],
    origin: 'Itália, século XVI',
    curiosidade: 'O violoncelo é considerado o instrumento que mais se aproxima da voz humana em termos de expressividade.',
  },
  {
    id: 'contrabaixo',
    name: 'Contrabaixo',
    family: 'cordas',
    description: 'O maior e mais grave dos instrumentos de cordas friccionadas.',
    descriptionLong: 'O contrabaixo é o maior e mais grave instrumento da família das cordas friccionadas. Com suas cordas grossas e corpo imponente, produz as notas mais profundas do conjunto. Na CCB, o contrabaixo acústico ou elétrico é fundamental para a base rítmica e harmônica do louvor.',
    image: 'https://images.unsplash.com/photo-1558537347-8e0a8ae6a9a0?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example4', title: 'Contrabaixo na CCB' },
    ],
    origin: 'Europa, século XVI',
    curiosidade: 'Diferente dos outros membros da família do violino, o contrabaixo tem origem em instrumentos da família da viola da gamba.',
  },
  {
    id: 'harpa',
    name: 'Harpa',
    family: 'cordas',
    description: 'Instrumento de cordas dedilhadas de beleza celestial e som etéreo.',
    descriptionLong: 'A harpa é um instrumento musical de cordas dedilhadas, conhecido por seu som celestial e aparência majestosa. Com suas numerosas cordas esticadas em uma armação angular, produz uma sonoridade rica e angelical. Na CCB, a harpa ocupa um lugar especial, sendo frequentemente associada ao louvor celestial descrito nas Escrituras.',
    image: 'https://images.unsplash.com/photo-1592906209472-36b7bd997265?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example5', title: 'Harpa Sagrada' },
    ],
    origin: 'Mesopotâmia, antiguidade',
    curiosidade: 'A harpa é um dos instrumentos mais antigos da humanidade, com registros de mais de 5.000 anos.',
  },
  {
    id: 'flauta',
    name: 'Flauta',
    family: 'madeiras',
    description: 'Instrumento de sopro de som doce e límpido.',
    descriptionLong: 'A flauta é um instrumento de sopro da família das madeiras, conhecida por seu som doce, límpido e brilhante. Apesar de atualmente ser feita de metal, mantém sua classificação histórica como madeira. Na CCB, a flauta doce ou transversal é utilizada para adicionar leveza e melodias celestiais ao louvor.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example6', title: 'Flauta no Louvor' },
    ],
    origin: 'França/Alemanha, século XIX',
    curiosidade: 'A flauta moderna foi revolucionada por Theobald Böhm no século XIX, que criou o sistema de chaves ainda hoje utilizado.',
  },
  {
    id: 'clarinete',
    name: 'Clarinete',
    family: 'madeiras',
    description: 'Instrumento de sopro de palheta única com timbre versátil.',
    descriptionLong: 'O clarinete é um instrumento de sopro de palheta única, conhecido por sua versatilidade e ampla extensão tonal. Seu timbre pode variar de doce e aveludado a brilhante e penetrante. Na CCB, o clarinete enriquece o conjunto com sua voz distinta e capacidade expressiva.',
    image: 'https://images.unsplash.com/photo-1621887343388-fbf3d1b49b0c?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example7', title: 'Clarinete na CCB' },
    ],
    origin: 'Alemanha, século XVIII',
    curiosidade: 'O clarinete foi inventado por Johann Christoph Denner no início do século XVIII em Nuremberg.',
  },
  {
    id: 'oboe',
    name: 'Oboé',
    family: 'madeiras',
    description: 'Instrumento de sopro de palheta dupla com som penetrante.',
    descriptionLong: 'O oboé é um instrumento de sopro de palheta dupla da família das madeiras, conhecido por seu som penetrante, doce e ligeiramente nasal. É o instrumento que dá o "lá" de afinação para toda a orquestra. Na CCB, seu timbre característico adiciona cor e expressividade ao conjunto instrumental.',
    image: 'https://images.unsplash.com/photo-1511127088257-53bf82f3bb33?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example8', title: 'Oboé e Adoração' },
    ],
    origin: 'França, século XVII',
    curiosidade: 'O oboé é descendente direto da charamela, um instrumento medieval de palheta dupla.',
  },
  {
    id: 'trompete',
    name: 'Trompete',
    family: 'metais',
    description: 'Instrumento de sopro de metal de som brilhante e majestoso.',
    descriptionLong: 'O trompete é um instrumento de sopro da família dos metais, conhecido por seu som brilhante, heróico e penetrante. Com seus pistos que permitem variar a altura das notas, é um dos instrumentos mais versáteis. Na CCB, o trompete é frequentemente utilizado em hinos e louvores solenes, evocando um senso de grandeza e celebração.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d0e95c6?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example9', title: 'Trompete no Louvor' },
    ],
    origin: 'Alemanha/Áustria, século XIX',
    curiosidade: 'O trompete é um dos instrumentos mais antigos, utilizado em cerimônias religiosas e militares desde a antiguidade.',
  },
  {
    id: 'trombone',
    name: 'Trombone',
    family: 'metais',
    description: 'Instrumento de metal de som grave e imponente com vara deslizante.',
    descriptionLong: 'O trombone é um instrumento de sopro da família dos metais, caracterizado por sua vara deslizante (vareta) que permite variações contínuas de altura. Seu som é imponente, nobre e cheio. Na CCB, o trombone proporciona uma base sólida e majestosa ao naipe de metais do conjunto.',
    image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example10', title: 'Trombone na CCB' },
    ],
    origin: 'Europa, século XV',
    curiosidade: 'O trombone é o único instrumento de metal que utiliza uma vara deslizante em vez de pistos ou válvulas.',
  },
  {
    id: 'tuba',
    name: 'Tuba',
    family: 'metais',
    description: 'O maior e mais grave dos instrumentos de metal.',
    descriptionLong: 'A tuba é o maior e mais grave instrumento da família dos metais. Com seu enorme tubo cônico e campânula larga, produz um som profundo e ressonante que forma a base do naipe de metais. Na CCB, a tuba adiciona peso e solenidade ao louvor, sustentando a harmonia com sua voz grave e poderosa.',
    image: 'https://images.unsplash.com/photo-1589894404892-7310b92ea7f4?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example11', title: 'Tuba no Conjunto' },
    ],
    origin: 'Alemanha, século XIX',
    curiosidade: 'A tuba foi inventada em 1835 por Wilhelm Wieprecht e Johann Gottfried Moritz para suprir a necessidade de um contrabaixo para os metais.',
  },
  {
    id: 'corneta',
    name: 'Corneta',
    family: 'metais',
    description: 'Instrumento de metal similar ao trompete, de som mais suave.',
    descriptionLong: 'A corneta é um instrumento de sopro da família dos metais, similar ao trompete mas com tubo cônico que lhe confere um timbre mais suave e aveludado. Na CCB, a corneta é muito apreciada por sua sonoridade lírica e expressiva, sendo utilizada tanto em melodias principais quanto em vozes de apoio no conjunto instrumental.',
    image: 'https://images.unsplash.com/photo-1596304925990-6d5c33b8bb4e?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example12', title: 'Corneta na CCB' },
    ],
    origin: 'França, século XIX',
    curiosidade: 'A corneta foi criada na França em 1828 por Jean-Louis Halary, combinando o bocal do trompete com o tubo cônico do cornetim.',
  },
  {
    id: 'piano',
    name: 'Piano',
    family: 'teclas',
    description: 'Instrumento de teclas de cordas percutidas, versátil e expressivo.',
    descriptionLong: 'O piano é um instrumento musical de teclas cujo som é produzido por martelos que percutem cordas de aço. Sua versatilidade, ampla extensão tonal e capacidade expressiva o tornam um dos instrumentos mais completos. Na CCB, o piano é amplamente utilizado para acompanhamento de hinos, ensaios e apresentações especiais.',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example13', title: 'Piano no Louvor' },
    ],
    origin: 'Itália, século XVIII',
    curiosidade: 'O piano foi inventado por Bartolomeo Cristofori por volta de 1700 na Itália. Seu nome completo é "pianoforte", que significa "suave e forte".',
  },
  {
    id: 'orgao',
    name: 'Órgão',
    family: 'teclas',
    description: 'Instrumento de teclas de tubos sonoros, majestoso e solene.',
    descriptionLong: 'O órgão é um instrumento musical de teclas que produz som através de tubos sonoros alimentados por ar comprimido. Conhecido como "o rei dos instrumentos", possui múltiplos teclados e pedais que permitem uma vasta gama de combinações sonoras. Na CCB, o órgão (especialmente o harmônio e o órgão eletrônico) ocupa lugar central no louvor congregacional, conduzindo os cânticos com solenidade e unção.',
    image: 'https://images.unsplash.com/photo-1567503530908-bc9e8e9e1b0e?w=600&q=80',
    videos: [
      { url: 'https://www.youtube.com/watch?v=example14', title: 'Órgão na CCB' },
    ],
    origin: 'Grécia antiga/ Europa medieval',
    curiosidade: 'O órgão de tubos é um dos instrumentos mais antigos ainda em uso, com origens que remontam ao século III a.C. na Grécia.',
  },
];

export default instruments;
