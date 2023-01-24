
class ActiveState{
    constructor(state,setState,compareObj){
        this.state = state;
        this.setState = setState;
        this.compareObj = compareObj;
    }

    activStep(){
        const hel = this.state.map(e=>{
            if(e.no !== this.compareObj.no){
                return {...e, active: false}  
            }
            if (e.no == this.compareObj.no) {
                return {...e,active: true}
            }
        })

        this.setState(hel)
    }
}



export default ActiveState