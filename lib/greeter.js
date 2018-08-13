exports.sayHello = (name, ...extra) => {
  console.log(extra);
  if(extra.length > 0) {
    return 'One At A Time Please'
  }

  //guard against null/undefined name
  name = name && name.trim();
  //same as:
  // name = name ? name.trim() : name;
  if (name)
    return `Hello, ${name}`;


  return 'Hello Everyone';
};