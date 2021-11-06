import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Vuelos,
  Rutas,
} from '../models';
import {VuelosRepository} from '../repositories';

export class VuelosRutasController {
  constructor(
    @repository(VuelosRepository)
    public vuelosRepository: VuelosRepository,
  ) { }

  @get('/vuelos/{id}/rutas', {
    responses: {
      '200': {
        description: 'Rutas belonging to Vuelos',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Rutas)},
          },
        },
      },
    },
  })
  async getRutas(
    @param.path.string('id') id: typeof Vuelos.prototype.id,
  ): Promise<Rutas> {
    return this.vuelosRepository.rutafk(id);
  }
}
