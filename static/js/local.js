export default class Local{
	
	constructor(key){
		this.key = key
		this.item = this.get()

		if(this.item === null){
			this.set([])
		}
	}

	set(value){
		localStorage.setItem(this.key, JSON.stringify(value))
	}

	get(){
		return JSON.parse(localStorage.getItem(this.key))
	}

	add(value){
		let data = this.get()
		data.push(value)
		this.set(data)
	}

	delete(id){
		let list = this.get()
	    for(var i = list.length - 1; i>=0 ;i--){
	    	console.log(i)
	        if(list[i].id == id)
	            list.splice(i, 1);
	    }
	   	this.set(list)
	}
}