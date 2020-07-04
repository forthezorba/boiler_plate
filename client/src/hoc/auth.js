import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'

export default function (SpecificComponent , option, adminRoute = null) {
    function AuthenticationCheck(props){
        const dispatch = useDispatch()
        //null -> anyone
        //true -> logined user only
        //false -> logined user block
        useEffect(() => {
            dispatch(auth()).then(response=>{
                //로그인하지 않은 상태
                if(!response.payload.isAuth){
                    //role logined 페이지에 접속하려하면
                    if(option){
                        props.history.push('/login')
                    }
                }else{
                    //admin전용에 admin이 아니라면
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/')
                    }else{
                        //logined user가 loginPage
                        if(option===false){
                            props.history.push('/')
                        }
                    }
                }
            })
        }, [dispatch,props.history])
        return <SpecificComponent {...props}/>
    }
    return AuthenticationCheck
}
