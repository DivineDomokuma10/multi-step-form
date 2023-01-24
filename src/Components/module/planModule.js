class Plantype{
    constructor(state,setState){
        this.state = state;
        this.setState = setState;
    }

    handlePlanType(){
        if (this.state === 'monthly') {
            this.setState('yearly')
        }
        else{
            this.setState('monthly')
        }
    }
}
export default Plantype;