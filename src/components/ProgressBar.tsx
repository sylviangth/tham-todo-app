interface ProgressProps {
  totalTasks: number;
  completedTasks: number;
}

const ProgressBar = function ( { totalTasks, completedTasks } : ProgressProps ) {

  let remainingTasks = totalTasks - completedTasks;

  if ( totalTasks !== 0 && remainingTasks === 0 ) {
    return (
    <div className="card p-3 rounded-2 mt-3 text-center">
      <h5 className="text-success mb-0"><i className="bi bi-check-circle-fill me-2"></i>Hoorayyy! You have completed all {completedTasks} tasks.</h5>
      <p className="mb-0 mt-2">Time to recharge!</p>
    </div>
    )
  } else if ( totalTasks === 0 ) {
    return (
      <div className="card p-3 rounded-2 mt-3 text-center">
        <h5 className="text-dark mb-0"><i className="bi bi-exclamation-circle-fill me-2"></i>You haven&apos;t planned anything to do today.</h5>
        <p className="mb-0 mt-2">Add your todo list below to start!</p>
      </div>
      )
  } else {
    return (
    <div className="card p-3 rounded-2 mt-3 text-center">
      <h5 className="text-dark mb-0"><i className="bi bi-check-circle-fill me-2"></i>You have completed {completedTasks}/{totalTasks} tasks.</h5>
      <p className="mb-0 mt-2">{remainingTasks} more to go!</p>
    </div>
    )
  }
}

export default ProgressBar;