import {Router} from 'express';

import { Todos } from '../models/todo';
import { todo } from 'node:test';

type RequestBody={text:string}

type REquestParams={todoId:string}

let todos:Todos[]=[]

const router=Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    const body =req.body as RequestBody
    const newTodo:Todos={
        id:new Date().toISOString(),
        text:body.text
    }
    todos.push(newTodo)
    res.status(201).json({message:'todo is created', todos:todos})
})

router.put("/todo/:todoId",(req,res,next)=>{
    const params=req.body as REquestParams
    const body =req.body as RequestBody
    const tid=params.todoId;
    const todoIndex=todos.findIndex((todoItem)=>todoItem.id==tid)
    if(todoIndex>=0){
        todos[todoIndex]={id:todos[todoIndex].id,text:body.text}
        return res.status(200).json({message:'todo is updated', todos:todos})
    }
    res.status(404).json({message:'could not found todo for this id'})
})

router.delete('/todo/:todoId',(req,res,next)=>{
    const params=req.body as REquestParams
    todos=todos.filter(todoItem=>todoItem.id!=params.todoId)
    res.status(200).json({message:'deleted todo',todos})
})
export default router;
