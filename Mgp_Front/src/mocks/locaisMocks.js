import Sp from '../assets/Stack_Images/Lista_Locais/SaoPaulo.jpg';
import Zulai from '../assets/Stack_Images/Lista_Locais/Zulai.png';
import Liberdade from '../assets/Stack_Images/Lista_Locais/Liberdade.png';
import TeatroMunicipal from '../assets/Stack_Images/Lista_Locais/TeatroMunicipal.png';
import Vinicula from '../assets/Stack_Images/Lista_Locais/Vinicula.png';
import Paulista from '../assets/Stack_Images/Lista_Locais/AvenidaPaulista.jpg';
import Ibirapuera from '../assets/Stack_Images/Lista_Locais/ibira.jpg';
import Ipiranga from '../assets/Stack_Images/Lista_Locais/museudoipiranga.jpg';
import Mercado from '../assets/Stack_Images/Lista_Locais/mercadao.jpg';
import Se from '../assets/Stack_Images/Lista_Locais/catedralSe.jpg';
import Copan from '../assets/Stack_Images/Lista_Locais/EdificioCopan.jpg';
import LagoZulai from '../assets/Stack_Images/Lista_Locais/LagoZulai.jpg';
import JardimZen from '../assets/Stack_Images/Lista_Locais/JardimZen.jpg';
import SalaEnsaios from '../assets/Stack_Images/Lista_Locais/SalaEnsaios.jpg';
import PracaArtes from '../assets/Stack_Images/Lista_Locais/PracaArtes.jpg';
import FeiraLiberdade from '../assets/Stack_Images/Lista_Locais/FeiraLiberdade.jpg';
import TemploBusshinji from '../assets/Stack_Images/Lista_Locais/TemploBusshinji.jpg';
import JardimOriental from '../assets/Stack_Images/Lista_Locais/JardimOriental.jpg';
import RoteiroVinho from '../assets/Stack_Images/Lista_Locais/RoteiroVinho.jpg';
import SalaDegustacao from '../assets/Stack_Images/Lista_Locais/SalaDegustacao.jpg';
import Parreiral from '../assets/Stack_Images/Lista_Locais/Parreiral.jpg';
import LagoVinicula from '../assets/Stack_Images/Lista_Locais/LagoVinicula.jpg';
import RestauranteVinicula from '../assets/Stack_Images/Lista_Locais/RestauranteVinicula.jpg';

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
      { name: 'Mercado Municipal', latitude: -23.5402, longitude: -46.6286 },
      { name: 'Catedral da Sé', latitude: -23.5504, longitude: -46.6339 },
      { name: 'Edifício Copan', latitude: -23.5489, longitude: -46.6413 },
    ],
    imagens: [
      Paulista,
      Ibirapuera,
      Ipiranga,
      Mercado,
      Se,
      Copan,
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
      { name: 'Lago do Templo', latitude: -23.6332, longitude: -47.5190 },
      { name: 'Sala de Meditação', latitude: -23.6328, longitude: -47.5195 },
      { name: 'Jardim Zen', latitude: -23.6326, longitude: -47.5188 },
      { name: 'Cafeteria do Templo', latitude: -23.6340, longitude: -47.5193 },
    ],
    imagens: [
      Zulai,
      LagoZulai,
      JardimZen,
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
      { name: 'Sala de Ensaios', latitude: -23.5501, longitude: -46.6335 },
      { name: 'Praça das Artes', latitude: -23.5498, longitude: -46.6340 },
      { name: 'Café do Teatro', latitude: -23.5506, longitude: -46.6328 },
      { name: 'Biblioteca do Teatro', latitude: -23.5504, longitude: -46.6332 },
    ],
    imagens: [
      TeatroMunicipal,
      SalaEnsaios,
      PracaArtes, 
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
      { name: 'Feira da Liberdade', latitude: -23.5650, longitude: -46.6357 },
      { name: 'Rua Galvão Bueno', latitude: -23.5652, longitude: -46.6348 },
      { name: 'Museu Histórico da Liberdade', latitude: -23.5647, longitude: -46.6360 },
      { name: 'Jardim Oriental', latitude: -23.5653, longitude: -46.6362 },
    ],
    imagens: [
      Liberdade,
      FeiraLiberdade,
      TemploBusshinji,
      JardimOriental,
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
      { name: 'Terra do Vinho', latitude: -23.1867, longitude: -47.5262 },
      { name: 'Sala de Degustação', latitude: -23.1861, longitude: -47.5270 },
      { name: 'Parreiral', latitude: -23.1858, longitude: -47.5265 },
      { name: 'Lago da Vinícola', latitude: -23.1855, longitude: -47.5269 },
      { name: 'Restaurante da Vinícola', latitude: -23.1864, longitude: -47.5261 },
    ],
    imagens: [
      Vinicula,
      RoteiroVinho,
      SalaDegustacao,
      Parreiral,
      LagoVinicula,
      RestauranteVinicula,
    ],
  },
];
