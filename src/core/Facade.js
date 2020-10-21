// Контроллер наследуется от фасада. Фасад работает с моделью. ЧТобы у контроллера не было возможности изменять модель напрямую.

import {Model} from "./Model";


export class Facade extends Model {
  super(count, changeCount)
}