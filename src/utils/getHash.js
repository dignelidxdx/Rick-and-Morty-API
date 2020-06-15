// se parseo los elementos con slide y lo siguiente
// se tendria #/1/ si no se parsea o si se deja hasta hash/
// eslint-disable-next-line no-restricted-globals
const getHash = () => 
  // eslint-disable-next-line no-restricted-globals
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;