

function todoItem(props : {item: string}) {
    return (
        <div className="todo-item">
            {props.item}
        </div>
    )
}

export default  todoItem;