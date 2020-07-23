import Component from "@glimmer/component"
import {tracked} from "@glimmer/tracking"


const unitCount = 10

export default class ProductionLineCalendarViewDay extends Component{

	
	@tracked today = moment().startOf("day").toDate()

	get units(){
		let output = []

		let { day } = this.args

		let modifier = moment().diff(day,"days")


		let count = unitCount + modifier

		for(let i = 1;i < count;i++){
			output.push(i)
		}


		return output
	}


	get statusMock(){

		if(this.isSelected){
			return "In Process"
		}
		if(this.inPast){
			return "Complete"
		}
		if(this.inFuture){
			return "Pending"
		}
	}
	get inFuture(){
		let { day } = this.args
		return day.getTime() > this.today.getTime()
	}
	get inPast(){
		let { day } = this.args
		return day.getTime() < this.today.getTime()
	}
	get isSelected(){
		let { day } = this.args
		return day.getTime() === this.today.getTime()
	}
}

