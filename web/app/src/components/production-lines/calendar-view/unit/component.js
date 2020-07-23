import Component from "@glimmer/component"
import {tracked} from "@glimmer/tracking"

export default class ProductionLineCalendarViewDay extends Component{

	
	@tracked today = moment().startOf("day").toDate()

	get poNumber(){
		return "Smith"
	}

	get isSelected(){
		let { day } = this.args
		return day.getTime() === this.today.getTime()
	}
}

