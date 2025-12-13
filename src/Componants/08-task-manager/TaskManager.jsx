import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import './TaskManager.css'
import TaskList from "./TaskList";

export default function TaskManager() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([newTask, ...tasks])
    }

    const toggleTask = (id) => {
        setTasks(tasks.map((task) => {
            return task.id == id ? { ...task, completed: !task.completed } : task
        }))
    }

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter((task) => {
            return task['id'] !== id
        });
        setTasks(filteredTasks);
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-start">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-header bg-primary text-white text-center py-4 rounded-top-4 ">
                            <h2 className="mb-0 fw-bold">Task Manager</h2>
                        </div>
                        <div className="card-body p-4">
                            <TaskForm addTask={addTask} />
                            <div className="mt-4">
                                <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
                            </div>
                        </div>
                        <div className="card-footer bg-light text-center py-3 rounded-bottom-4">
                            <small className="text-muted fw-bold">Total Tasks: {tasks.length}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}