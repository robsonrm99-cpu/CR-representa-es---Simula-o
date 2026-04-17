import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace Text
content = content.replace(/Sertão Consórcios/g, 'CR Representações');

// Replace Images
content = content.replace(
  'https://res.cloudinary.com/dsevqnhts/image/upload/v1775843754/Logo_maior_fundo_202604101455_odqaiy.jpg',
  'https://res.cloudinary.com/dsevqnhts/image/upload/v1776449474/Design_sem_nome_16__page-0001_owwchm.jpg'
);

// Replace Colors
content = content.replace(/blue-900/g, 'zinc-900');
content = content.replace(/blue-800/g, 'zinc-800');
content = content.replace(/blue-100/g, 'zinc-100');
content = content.replace(/blue-950/g, 'zinc-950');

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx updated');
