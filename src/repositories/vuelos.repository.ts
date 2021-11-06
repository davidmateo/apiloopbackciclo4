import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Vuelos, VuelosRelations, Rutas} from '../models';
import {RutasRepository} from './rutas.repository';

export class VuelosRepository extends DefaultCrudRepository<
  Vuelos,
  typeof Vuelos.prototype.id,
  VuelosRelations
> {

  public readonly rutafk: BelongsToAccessor<Rutas, typeof Vuelos.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('RutasRepository') protected rutasRepositoryGetter: Getter<RutasRepository>,
  ) {
    super(Vuelos, dataSource);
    this.rutafk = this.createBelongsToAccessorFor('rutafk', rutasRepositoryGetter,);
    this.registerInclusionResolver('rutafk', this.rutafk.inclusionResolver);
  }
}
