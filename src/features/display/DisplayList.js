import './App.css'

function TodoItem({ title, isDone }) {
    return (
      <div>
        <p className={isDone ? 'done' : 'not-done'}>{title}</p>
      </div>
    );
  }