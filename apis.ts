import { ITask } from "./model/tasks"

const baseUrl = 'http://localhost:3001/tasks'
const getAllTodos = async(): Promise <ITask[]>=> {
    const res = await fetch(baseUrl);
    const todos = await res.json();
    return todos;
}

export default getAllTodos;