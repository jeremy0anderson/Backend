// noinspection GraphQLUnresolvedReference

import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ApolloConsumer, gql, useMutation, useQuery} from '@apollo/client';
import {motion} from 'framer-motion';
import {Button, Input} from "@nextui-org/react";

function GetUser(){
   
   const nav = useNavigate();
   const [edit, setEdit] = useState(false)
   //eslint-ignore-next-line

   
  
   
   const [editUser] = useMutation(gql`
       mutation Mutation ($firstName:String $lastName:String $email:String $password:String){
           editUser(firstName:$firstName, lastName:$lastName, email:$email, password:$password) {
                _id,
                token
           }
       }
   `)
   async function submit(e){
      e.preventDefault();
      await editUser({
         variables:{
               firstName: state.first,
               lastName: state.last,
               email: state.email,
               // password:state.password
         },
         onCompleted:({editUser})=>{
            console.log(editUser);
               localStorage.setItem('token', editUser.token);
               localStorage.setItem('userId', editUser._id);
         }
      })
   }
   const {error, loading, data, refetch, stopPolling, startPolling} = useQuery(gql`
       query Query {
           verifyUser {
               _id
               firstName
               lastName
               email
           }
       }
   `, {
      onCompleted:({verifyUser})=>{
         localStorage.setItem("user", JSON.stringify(verifyUser));
      },
   });
   
   const [state, setState] = useState({
      ...JSON.parse(localStorage.getItem("user")),
   })
   useEffect(()=>{
     refetch();
     setState({
        ...JSON.parse(localStorage.getItem("user")),
     })
   },[])
   
   if (error) return <p>{error.message}</p>
   if (loading) return <motion.div>Loading...</motion.div>
   if (data) {
      const {verifyUser} = data;
      return (
         <motion.form className={"centered-column"}
            onSubmit={submit}
            style={{position: 'absolute', top: 80}}>
            <Input
               onChange={(e)=>setState({...state,first:e.target.value})}
               label={"First Name"}
               disabled={!edit}
               value={state.firstName || ""}/>
            <Input
               onChange={(e)=>setState({...state,last:e.target.value})}
               label={"Last Name"}
               disabled={!edit}
               value={state.lastName ||""}/>
            <Input
               onChange={(e)=>setState({...state,email:e.target.value})}
               label={"Email"}
               disabled={!edit}
               value={state.email || ""}/>
            {/*<Input.Password*/}
            {/*   onChange={(e)=>setState({...state,email:e.target.value})}*/}
            {/*   label={"Email"}*/}
            {/*   disabled={true}*/}
            {/*   value={state.email || ""}/>*/}
            <Button.Group>
               <Button
                  onPress={()=>setEdit(!edit)}
               >{edit?"Cancel":"Edit"}</Button>
               <Button
                  disabled={!edit}
                  type={"submit"}>Save</Button>
            </Button.Group>
         </motion.form>
      )
   }
}





class User extends React.Component {
  
    constructor(props) {
        super(props);
        this.state={
        
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
    render() {
   
        return (
         <GetUser/>
        );
    }
}

User.propTypes = {};

export default User;
