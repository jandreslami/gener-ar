import { faker } from '@faker-js/faker/locale/es';
import { generarCUITAleatorio, randomElement, formatDate } from './utils.js';
import { HABITACIONES, TIPOS_DE_RESERVAS, VENDEDORES, MEDIOS_DE_VENTA } from './categories.js';

export function generateRandomData () {
  return {
    fecha: formatDate(faker.date.recent({ days: 365 })),
    habitación: randomElement(HABITACIONES),
    tipoDeReserva: randomElement(TIPOS_DE_RESERVAS),
    nombre: `${faker.person.firstName()} ${faker.person.lastName()}`,
    CUIT: generarCUITAleatorio(),
    tarifa: faker.finance.amount({ min: 10000, max: 115000, autoFormat: true }),
    vendedor: randomElement(VENDEDORES),
    medioDeVenta: randomElement(MEDIOS_DE_VENTA),
    noches: Math.ceil(Math.random() * 15)
  };
}
