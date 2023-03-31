interface SelectedTaskProps {
  name: string;
  tag: string;
}

const SelectedTask = function ( { name, tag } : SelectedTaskProps ) {
  return (
    <div className="container text-center bg-dark p-4 mt-3 mb-3 rounded-2">
      <p className="text-white fw-normal">For now, let&apos;s work on this task!</p>
      <h4 className="text-white fw-normal">{name}</h4>
      <span className="badge rounded-pill text-bg-light text-uppercase">{tag}</span>
    </div>
  )
}

export default SelectedTask;