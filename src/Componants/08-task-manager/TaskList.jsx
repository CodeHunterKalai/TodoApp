export default function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
        <ul className="list-group list-group-flush">
            {tasks.map((task, index) => (
                <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center mb-2 border rounded fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}>
                    <span
                        onClick={() => toggleTask(task.id)}
                        className={`flex-grow-1 text-break cursor-pointer ${task.completed ? 'text-decoration-line-through text-muted' : 'fw-normal'}`}
                        style={{ cursor: 'pointer', fontSize: '1.05rem', transition: 'color 0.3s ease' }}
                    >
                        {task.text}
                    </span>
                    <button
                        onClick={() => deleteTask(task.id)}
                        className="btn btn-outline-danger btn-sm rounded-circle ms-2 d-flex align-items-center justify-content-center"
                        style={{ width: '32px', height: '32px' }}
                        aria-label="Delete"
                    >
                        X
                    </button>
                </li>
            ))}
            {tasks.length === 0 && (
                <li className="list-group-item text-center text-muted border-0 py-4 fade-in">
                    No tasks yet. Add one above!
                </li>
            )}
        </ul>
    );
}