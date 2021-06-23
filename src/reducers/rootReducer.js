

const initState = {
    url : 'http://localhost/react-construction-company/',
    loading : 'false' ,
    projects : [
        {
            id : 0,
            title : '',
            description : '',
            img : '',
            
        }
    ]
}
///

const reducer = (state = initState ,action) => {
    

    switch (action.type){
        case 'STOPLOADING':{
            return {
                ...state,
                loading : 'false'
            }
        }

        case 'STARTLOADING':{
            return {
                ...state,
                loading : 'true'
            }
        }

        case 'SETPROJECTS' : {
            return (
                {
                    ...state ,
                    projects : action.data
                }
            )
        }
            

        default:
            return state;
    }
    
}

export default reducer;