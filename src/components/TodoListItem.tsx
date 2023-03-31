interface ItemProps {
  name: string;
  tag: string;
  id: number;
  checked: boolean;
  handleDelete: any;
  handleSelect: any;
  selectedId: number;
  handleCheckChange: any;
}

let TodoListItem = function ({ name, tag, id, checked, handleDelete, handleSelect, selectedId, handleCheckChange } : ItemProps) {

  const onChangeSelect = function(e) {
    checked = e.target.checked;
    console.log(checked);
  }
  
  if (id === selectedId) {
    return (
      <>
        <li role="button" className="text-primary list-group-item d-flex justify-content-between p-3" key={id} onClick={handleSelect}>
          <div>
            <input onChange={handleCheckChange} className="form-check-input me-3" type="checkbox" value="" id={`todo-list-item-` + id} />
            <label className="form-check-label" htmlFor={`todo-list-item-` + id}>
              <h6>{name}</h6>
              <span className="badge rounded-pill text-bg-primary text-uppercase">{tag}</span>
            </label>
          </div>
          <button type="button" className="btn btn-outline-primary btn-sm p-2" key={id} onClick={handleDelete}><i className="bi bi-x"></i></button>
        </li>
      </>
    )
  } else {
    return (
      <>
        <li role="button" className="list-group-item d-flex justify-content-between p-3" key={id} onClick={handleSelect}>
          <div>
            <input onChange={handleCheckChange} className="form-check-input me-3" type="checkbox" value="" id={`todo-list-item-` + id} />
            <label className="form-check-label" htmlFor={`todo-list-item-` + id}>
              <h6>{name}</h6>
              <span className="badge rounded-pill text-bg-dark text-uppercase">{tag}</span>
            </label>
          </div>
          <button type="button" className="btn btn-outline-primary btn-sm p-2" key={id} onClick={handleDelete}><i className="bi bi-x"></i></button>
        </li>
      </>
    )
  }

}

export default TodoListItem;

