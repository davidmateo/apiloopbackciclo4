import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Rutas} from './rutas.model';

@model()
export class Aeropuertos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;
  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  pais: string;

  @property({
    type: 'string',
    required: true,
  })
  coord_x: string;

  @property({
    type: 'string',
    required: true,
  })
  coord_y: string;

  @property({
    type: 'string',
    required: true,
  })
  siglas: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;
  constructor(data?: Partial<Aeropuertos>) {
    super(data);
  }
}

export interface AeropuertosRelations {
  // describe navigational properties here
}

export type AeropuertosWithRelations = Aeropuertos & AeropuertosRelations;
