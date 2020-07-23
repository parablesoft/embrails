import Component from "@glimmer/component"
import {tracked} from "@glimmer/tracking"
import moment from "moment"
import { action } from "@ember/object"

export default class ProductionLineCalendarView extends Component{
	

	@tracked showStations = false

	@action
	handleToggleStations(){
		this.showStations = !this.showStations
	}

	get startOfWeek(){
		return moment().startOf("week").add(1,"day")
	}

	get endOfWeek(){
		return moment().endOf("week")
	}

	get dateRange(){
		let output = []

		let {startOfWeek,endOfWeek} = this

		let currentDate = startOfWeek


		while(currentDate <= endOfWeek){
			output.push(currentDate.toDate())
			currentDate = currentDate.add(1,"day")
		}

		return output
	}
}

