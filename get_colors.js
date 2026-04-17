import getColors from 'get-image-colors';
getColors('https://res.cloudinary.com/dsevqnhts/image/upload/v1776449474/Design_sem_nome_16__page-0001_owwchm.jpg').then(colors => {
  console.log(colors.map(color => color.hex()));
}).catch(console.error);
