const initstate={
    status:false
}
exports.loveReducer = (state=initstate,action)=>{
    console.log("reducer",action);
    switch (action.type) {
        case 'send_love':
            // 
            return({status: true});
        
        case 'stop_love':
            return({status: false});
       
        default:
            return state;
    }

}


