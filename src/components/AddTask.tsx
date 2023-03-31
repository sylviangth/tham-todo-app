interface Props {
  handleInput: any;
}

const AddTask = function( { handleInput } : Props) {

  const handleSubmit = (e) => {
    if ( inputTaskName.value == "") {
      alert("Please enter a valid task name!");
      e.preventDefault();
    } else if ( inputTag.value == "None" ) {
      alert("Please choose a valid task tag!");
      e.preventDefault();
    } else {
      handleInput(inputTaskName.value, inputTag.value);
      inputTaskName.value = "";
      inputTag.value = "None";
      e.preventDefault();
    }
  }

  return (
    <>
      <form className="row g-3 mt-1">
        <div className="col-md-6">
          <label htmlFor="inputTaskName" className="form-label">Task name</label>
          <input type="text" className="form-control" id="inputTaskName" placeholder="Type the name here..."></input>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputTag" className="form-label">Task tag</label>
          <select id="inputTag" className="form-select">
            <option selected>None</option>
            <option>Learn</option>
            <option>Study</option>
            <option>Work</option>
          </select>
        </div>
        <div className="col-md-2 position-relative">
          <button type="submit" className="btn btn-primary position-absolute bottom-0" onClick={handleSubmit}><i className="bi bi-plus me-1"></i>Add</button>
        </div>
      </form>
    </>
  )
}

export default AddTask;