import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Aeropuertos} from './aeropuertos.model';

@model()
export class Rutas extends Entity {
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
  tiempo_estimado: string;

  @belongsTo(() => Aeropuertos, {name: 'origenfk'})
  origen: string;

  @belongsTo(() => Aeropuertos, {name: 'destinofk'})
  destino: string;

  constructor(data?: Partial<Rutas>) {
    super(data);
  }
}

export interface RutasRelations {
  // describe navigational properties here
}

export type RutasWithRelations = Rutas & RutasRelations;
