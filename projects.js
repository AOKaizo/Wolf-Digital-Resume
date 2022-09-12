const data = {};

const list = () => {
    return [...data] 
  }; 
  
  const find = (id) => {
    const post = data.find(post => post.id === +id);
    return {...post};
  }
  
  module.exports = { list: list, find: find };