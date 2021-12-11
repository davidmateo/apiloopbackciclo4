import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Aeropuertos, AeropuertosRelations, Rutas} from '../models';
import {RutasRepository} from './rutas.repository';

export class AeropuertosRepository extends DefaultCrudRepository<
  Aeropuertos,
  typeof Aeropuertos.prototype.id,
  AeropuertosRelations
> {

  public readonly destino_aeropuerto: BelongsToAccessor<Rutas, typeof Aeropuertos.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource
  ) {
    super(Aeropuertos, dataSource);
  }
}
