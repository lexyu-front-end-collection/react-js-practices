import React, { useState } from 'react';

function WithoutDnDkit() {

	const [tasks, setTasks] = useState(["Eat", "Sleep", "Code", "Shower"]);

	const [newTask, setNewTask] = useState("");

	const [draggedItem, setDraggedItem] = useState(null);

	// ------------------- Input -------------------

	function handleInputChange(event) {
		setNewTask(event.target.value);
	}

	function addTask() {
		if (newTask === "") {
			return;
		}
		setTasks(tasks => [...tasks, newTask]);
		setNewTask("");
	}

	function deleteTask(index) {
		const deletedTask = tasks.filter((task, i) => i !== index);
		setTasks(deletedTask);
	}

	// ------------------- Drag and Drop -------------------

	function moveTask(index, direction) {
		const newTasks = [...tasks];
		const swapIndex = index + (direction === "up" ? -1 : 1);
		if (swapIndex >= 0 && swapIndex < newTasks.length) {
			[newTasks[index], newTasks[swapIndex]] = [newTasks[swapIndex], newTasks[index]];
			setTasks(newTasks);
		}
	}

	function clearAll() {
		setTasks([]);
	}
	function handleDragStart(e, index) {
		setDraggedItem(index);
		e.currentTarget.classList.add('opacity-50', 'border-dashed', 'border-2', 'border-gray-500'); // 使用 Tailwind CSS 類
	}

	function handleDragEnd(e) {
		e.currentTarget.classList.remove('opacity-50', 'border-dashed', 'border-2', 'border-gray-500'); // 移除 Tailwind CSS 類
		setDraggedItem(null);
	}

	function handleDragOver(e) {
		e.preventDefault();
	}

	function handleDrop(e, index) {
		e.preventDefault();
		const newTasks = [...tasks];
		const draggedTask = newTasks[draggedItem];
		newTasks.splice(draggedItem, 1);
		newTasks.splice(index, 0, draggedTask);
		setTasks(newTasks);
	}

	return (
		<div className='text-center mt-24'>
			<h1 className='text-4xl text-wheat'>Without DnD kit</h1>

			<input type="text"
				placeholder='Enter a task...'
				value={newTask}
				onChange={handleInputChange}
				className='text-xl p-2 border-2 border-gray-300 rounded-lg m-2' />

			<div>
				<button
					className='bg-green-500 text-white font-bold text-2xl py-2 px-5 m-2 rounded-lg hover:bg-green-600'
					onClick={addTask}>新增任務
				</button>
				<button
					className='bg-green-500 text-white font-bold text-2xl py-2 px-5 m-2 rounded-lg hover:bg-green-600'
					onClick={clearAll}>清除所有任務
				</button>
			</div>

			<ol className='list-none p-0'>
				{tasks.map((task, index) =>
					<li key={index}
						draggable="true"
						onDragStart={(e) => handleDragStart(e, index)}
						onDragEnd={handleDragEnd}
						onDragOver={handleDragOver}
						onDrop={(e) => handleDrop(e, index)}
						className='font-bold text-2xl p-4 border-2 border-gray-300 rounded-lg 
						m-2 bg-gray-100 flex items-center justify-between 
						cursor-grab transition-all duration-200 ease-in-out 
						w-full max-w-xl mx-auto'>
						<span className='flex-1 mr-2 text-black'>{task}</span>
						<button className='bg-blue-500 text-white font-bold text-xl p-2 m-1 rounded-lg hover:bg-blue-600' onClick={() => moveTask(index, "up")}>
							&#8593;
						</button>
						<button className='bg-blue-500 text-white font-bold text-xl p-2 m-1 rounded-lg hover:bg-blue-600' onClick={() => moveTask(index, "down")}>
							&#8595;
						</button>
						<button className='bg-red-500 text-white font-bold text-xl p-2 m-1 rounded-lg hover:bg-red-600' onClick={() => deleteTask(index)}>
							X
						</button>
					</li>
				)}
			</ol>
		</div>
	)
}

export default WithoutDnDkit