const makeActive =(id,state,setState)=>{
   const hel = state.map(e => {
        if (id === e.id) {
            // console.log(e,e.active);
            return {...e, active: true};
        }
        if (id !== e.id) {
            return {...e, active: false};
        }
    });

    setState(hel)
}

export default makeActive