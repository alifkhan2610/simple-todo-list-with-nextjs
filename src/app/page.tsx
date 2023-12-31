import getAllTodos from "../../apis";
import AddTask from "./componnents/AddTask";
import TodoList from "./componnents/TodoList";


export default async function Home() {
const tasks = await getAllTodos();
console.log(tasks);

  return (
    <main className="max-w-4xl  mx-auto">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold ">Todo List App</h1>
        <AddTask />
      </div>
      <TodoList />
    </main>
  )
}
