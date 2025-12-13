import { useState } from "react";

export default function TaskForm({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.trim()) {
            //add task to list
            addTask(value);
            setValue("")
        }
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Add a new task..."
                    className="form-control form-control-lg"
                    value={value}
                    aria-label="Add a new task"
                />
                <button type="submit" className="btn btn-primary btn-lg px-4 fw-bold">Add</button>
            </div>
        </form>
    )
}