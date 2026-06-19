# Todo List

Program todo list menggunakan React Js dan data akan disimpan di local storage.

### Tech Stacks:
- React Js v19x.x.x
- TailwindCSS v4.X.X
- Vite v4.x.x
- Eslint v10.x.x

### Add data to local storage:


```jsx
	function handleAddTask(e){
		e.preventDefault()
		let newData = []
		const task = new FormData(e.target)

		const newTask = {
			name: task.get("task"),
			completed: false
		}
		if(listByDay?.list.length > 0) newData = [...listByDay.list]
		newData.push(newTask)

		const todoList = {
			day:day,
			list:newData
		}
		setData([...data, todoList]) // append new data

		// eliminate the same data by day
		const newDataList = data.filter((item) => item.day !== day)

		newDataList.push(todoList)
		window.localStorage.setItem("todo", JSON.stringify(newDataList))
		inputRef.current.value = ""

	}
```

### Preview demo:
![alt text](/src/assets/todolist.gif)