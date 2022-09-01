import {useMutation} from '@apollo/client';
import React from "react";
import {Button, Input} from '@nextui-org/react';
import * as IO from 'react-icons/io5';
import {Mutation} from './index';
import {useNavigate} from "react-router-dom";

function Login(){
    const nav = useNavigate();
    const [state, setState] = React.useState({
        email:"",
        password:""
    });
    const [login] = useMutation(Mutation.loginMutation);
    async function submit(e:any){
        e.preventDefault();
        await login({
            variables:{
                email: state.email,
                password: state.password
            },
            onCompleted:({login})=>{
                console.log(login);
                localStorage.setItem('token',login);
                nav('/')
            }
        })
    }
    return(
        <div style={{position: 'absolute', top:80, left:80}}>
        <form
            onSubmit={submit}>
        <Input
            onChange={(e)=>setState({...state, email:e.target.value})}
            labelPlaceholder={"Email"}
            color={"primary"}
            contentRight={<IO.IoMailOutline/>}/>
        <Input.Password
            onChange={(e)=>setState({...state, password:e.target.value})}
            color={"primary"}
            hideToggle={false}
            labelPlaceholder={"Password"}/>
        <Button type={"submit"}>
            Sign In
        </Button>
        </form>
        </div>
    )
}
export {Login}