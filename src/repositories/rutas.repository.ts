import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Rutas, RutasRelations, Aeropuertos} from '../models';
import {AeropuertosRepository} from './aeropuertos.repository';

export class RutasRepository extends DefaultCrudRepository<
  Rutas,
  typeof Rutas.prototype.id,
  RutasRelations
> {

  public readonly Origen_aeropuerto: BelongsToAccessor<Aeropuertos, typeof Rutas.prototype.id>;

  public readonly origen_aeropuerto: BelongsToAccessor<Aeropuertos, typeof Rutas.prototype.id>;

  public readonly origenfk: BelongsToAccessor<Aeropuertos, typeof Rutas.prototype.id>;

  public readonly destinofk: BelongsToAccessor<Aeropuertos, typeof Rutas.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('AeropuertosRepository') protected aeropuertosRepositoryGetter: Getter<AeropuertosRepository>,
  ) {
    super(Rutas, dataSource);
    this.destinofk = this.createBelongsToAccessorFor('destinofk', aeropuertosRepositoryGetter,);
    this.registerInclusionResolver('destinofk', this.destinofk.inclusionResolver);
    this.origenfk = this.createBelongsToAccessorFor('origenfk', aeropuertosRepositoryGetter,);
    this.registerInclusionResolver('origenfk', this.origenfk.inclusionResolver);
  }
}
