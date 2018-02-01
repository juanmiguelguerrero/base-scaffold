import 'bootstrap';

import { ModVar1 } from './modulo1'
import { ModVar2 } from './modulo2'
import { Clase1 } from './clase1'

let clase = new Clase1();
console.log(clase.hola());

const pp = 'hola';


(<any>window).pp = pp;
