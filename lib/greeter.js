exports.sayHello = (name, ...extra) => {
  //console.log(extra);
  if (extra.length > 0) {
    return "ONE AT A TIME PLEASE";
  }

  // Guard against null/undefined name
  name = name && name.trim();
  // Same as:
  // name = name ? name.trim() : name; 
 
  if (name) {
    return `Hello, ${name}!`;
  }

  return "Hello, world!";
};

exports.sayHola = function (name, ...mas) {
  if (mas.length > 0) {
    return "UNO AT A TIME PLEASE";
  }

  // Guard against null/undefined name
  name = name && name.trim();
  // Same as:
  // name = name ? name.trim() : name; 
 
  if (name) {
    return `Hola, ${name}!`;
  }
  return "Hola, mundo!";
};
