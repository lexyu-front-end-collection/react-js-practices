import { useState } from 'react';
import { COLUMNS, INITIAL_TASKS } from '@/data/columns';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Column } from './Column';
import { Task } from '@/types/dnd';

function WithDnDkit() {
	const [tasks, setTasks] = useState(INITIAL_TASKS);

	function handleDragEnd(e: DragEndEvent) {
		const { active, over } = e;

		if (!over) return;

		const taskId = active.id;
		const newStatus = over.id as Task['status'];

		setTasks(() =>
			tasks.map((task) => {
				if (task.id === taskId) {
					return {
						...task,
						status: newStatus
					}
				}
				return task;
			}),
		);
	}


	return (
		<>
			<h1 className='text-center'>With DnD Kit</h1>
			<div className='flex text-center p-4 justify-center items-center'>
				<DndContext onDragEnd={handleDragEnd}>
					<div className='flex gap-8'>
						{
							COLUMNS.map(
								column =>
									<Column
										key={column.id}
										column={column}
										tasks={
											tasks.filter(task => task.status === column.id)
										}
									/>
							)
						}
					</div>
				</DndContext>
			</div>
		</>
	)
}

export default WithDnDkit