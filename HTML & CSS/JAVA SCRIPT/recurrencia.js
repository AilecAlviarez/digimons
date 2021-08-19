class Animal {
  alimentacion;
  patas;
  raza;
  constructor(alimentacion, patas, raza) {
    this.alimentacion = alimentacion;
    this.patas = patas;
    this.raza = raza;
  }
  hacerRaw() {
    return "rawrawrawraw";
  }
}
class Gato extends Animal {
  name;
  age;
  sex;

  constructor(name, age, sex) {
    super("gatarina", 4, "gato");
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  hacerRuru() {
    return "rururuururu";
  }
}

const gato1 = new Gato("zafiro", 1, "gay");
const gato2 = new Gato("sdasda", 2, "sdsds");
console.log(gato1.alimentacion);
const animal1 = new Animal("alimentacion", 4, "raza");
console.log(animal1.hacerRaw());

const factorial = (a) => {
  let aux = 1;
  for (let i = a; i >= 1; i--) {
    aux = aux * i;
  }
  return aux;
};
const factorial2 = (n) => {
  return n >= 1 ? n * factorial2(n - 1) : 1;
};
const imprimir = (valor, n) => {
  if (n >= 1) {
    console.log(valor);
    imprimir(valor, n - 1);
  } else console.log(0);
};
imprimir("imprimir", 5);
console.log(factorial2(4));
