import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class extends Route {
  @service session

  beforeModel(transition) {
    console.log(this.session)
    this.session.requireAuthentication(transition, 'login')
  }
}