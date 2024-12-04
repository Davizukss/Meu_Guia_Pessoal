import Sp from '../assets/Stack_Images/Lista_Locais/SaoPaulo.jpg';
import Zulai from '../assets/Stack_Images/Lista_Locais/Zulai.png';
import Liberdade from '../assets/Stack_Images/Lista_Locais/Liberdade.png';
import TeatroMunicipal from '../assets/Stack_Images/Lista_Locais/TeatroMunicipal.png';
import Vinicula from '../assets/Stack_Images/Lista_Locais/Vinicula.png';

export const locais = [
  {
    id: '1',
    image: Sp,
    title: 'Tour - São Paulo',
    avaliacao: 5.0,
    preco: 'Pago',
    categoria: 'Histórico',
    descricao: 'Explore os ícones de São Paulo, como a Avenida Paulista, Parque Ibirapuera e o Mercado Municipal.',
    locais: [
      { name: 'Avenida Paulista', latitude: -23.5617, longitude: -46.6552 },
      { name: 'Parque Ibirapuera', latitude: -23.5875, longitude: -46.6564 },
      { name: 'Museu do Ipiranga', latitude: -23.5908, longitude: -46.6340 },
    ],
    imagens: [
      Sp,
      Liberdade,
      TeatroMunicipal,
    ],
  },
  {
    id: '2',
    image: Zulai,
    title: 'Templo Zulai - Cotia',
    avaliacao: 4.8,
    preco: 'Gratuito',
    categoria: 'Histórico',
    descricao: 'Visite o sereno Templo Zulai e o Parque ao redor, um espaço de meditação e tranquilidade.',
    locais: [
      { name: 'Templo Zulai', latitude: -23.6324, longitude: -47.5197 },
      { name: 'Parque do Templo Zulai', latitude: -23.6350, longitude: -47.5180 },
    ],
    imagens: [
      'https://via.placeholder.com/350x250?text=Templo',
      'https://via.placeholder.com/350x250?text=Parque',
    ],
  },
  {
    id: '3',
    image: TeatroMunicipal,
    title: 'Teatro Municipal - São Paulo',
    avaliacao: 4.7,
    preco: 'Pago',
    categoria: 'Entretenimento',
    descricao: 'O Teatro Municipal oferece uma experiência cultural única em São Paulo, com apresentações de renome.',
    locais: [
      { name: 'Teatro Municipal', latitude: -23.5505, longitude: -46.6333 },
    ],
    imagens: [
      'https://via.placeholder.com/350x250?text=Teatro',
      'https://via.placeholder.com/350x250?text=Cultura',
    ],
  },
  {
    id: '4',
    image: Liberdade,
    title: 'Liberdade - São Paulo',
    avaliacao: 3.9,
    preco: 'Gratuito',
    categoria: 'Cultural',
    descricao: 'Explore a cultura japonesa em São Paulo, com templos, lojas típicas e a famosa Feira da Liberdade.',
    locais: [
      { name: 'Liberdade', latitude: -23.5646, longitude: -46.6359 },
      { name: 'Templo Busshinji', latitude: -23.5648, longitude: -46.6386 },
    ],
    imagens: [
      'https://via.placeholder.com/350x250?text=Liberdade',
      'https://via.placeholder.com/350x250?text=Templo',
    ],
  },
  {
    id: '5',
    image: Vinicula,
    title: 'Vinícola - São Roque',
    avaliacao: 4.9,
    preco: 'Pago',
    categoria: 'Consumo',
    descricao: 'Aprecie o vinho local e o belo cenário da Vinícola em São Roque, com visitas guiadas e degustações.',
    locais: [
      { name: 'Vinícola', latitude: -23.1853, longitude: -47.5278 },
      { name: 'Roteiro do Vinho', latitude: -23.1867, longitude: -47.5262 },
    ],
    imagens: [
      'https://via.placeholder.com/350x250?text=Vinícola',
      'https://via.placeholder.com/350x250?text=Vinho',
    ],
  },
];
