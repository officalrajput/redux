 export const actionIncrement=(num)=>{
    return{
        type:'INCREMENT',
        payload:num,

    }


}
export const actionDecrement=(num)=>{
    return{
        type:'DECREMENT',
        payload:num,
    }
}