import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { useState } from "react";
import { Item } from "@/utils/types";

const TodoCard = () => {
  const [todos, setTodos] = useState<Item[]>([]);
  const [input, setInput] = useState<string>("");
  const [todoCount, setTodoCount] = useState<number>(1);

  const handleToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleButton = () => {
    const newTodo: Item = { id: todoCount, text: input, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoCount((prevCount) => prevCount + 1);
  };
  return (
    <Card className="w-64 flex flex-col">
      <div className="flex text-center justify-center">
        <CardHeader>
          <CardTitle>
            <span className="text-[#e11d48]">To Do</span> List
          </CardTitle>
          <CardDescription>Input todo and click "Add Todo"</CardDescription>
        </CardHeader>
      </div>

      <CardContent className="px-8 overflow-scroll">
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`list-decimal cursor-pointer font-poppins text-sm ${
                todo.completed ? "line-through" : "none"
              } ${todo.completed ? "text-pink-500" : "none"}`}
              onClick={() => {
                handleToggle(todo.id);
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </CardContent>

      <div className="flex flex-col justify-center py-6 px-5 gap-4">
        <Input
          className="h-2 rounded-sm py-4"
          onChange={(e) => setInput(e.currentTarget.value)}
          placeholder="e.g. go to the gym"
        />
        <Button className="h-8" onClick={handleButton}>
          Add Todo
        </Button>
      </div>
    </Card>
  );
};

export default TodoCard;
