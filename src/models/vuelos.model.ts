import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Rutas} from './rutas.model';

@model()
export class Vuelos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'Date',
    required: true,
  })
  fecha_inicio: Date;

  @property({
    type: 'Date',
    required: true,
  })
  hora_inicio: Date;

  @property({
    type: 'Date',
    required: true,
  })
  fecha_fin: Date;

  @property({
    type: 'Date',
    required: true,
  })
  hora_fin: Date;

  @property({
    type: 'number',
    required: true,
  })
  asientos: number;

  @property({
    type: 'number',
    required: true,
  })
  vendidos: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre_piloto: string;

  @belongsTo(() => Rutas, {name: 'rutafk'})
  ruta: string;

  constructor(data?: Partial<Vuelos>) {
    super(data);
  }
}

export interface VuelosRelations {
  // describe navigational properties here
}

export type VuelosWithRelations = Vuelos & VuelosRelations;
