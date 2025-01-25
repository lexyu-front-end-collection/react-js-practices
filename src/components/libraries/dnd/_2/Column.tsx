import { Column as ColumnType, Task } from "@/types/dnd";
import { TaskCard } from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";


type ColumProps = {
	column: ColumnType
	tasks: Task[]
}

export function Column({ column, tasks }: ColumProps) {
	const { setNodeRef } = useDroppable({
		id: column.id
	})

	return (
		<div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
			<h2 className="mb-4 font-semibold text-neutral-200">{column.title}</h2>
			<div className="flex flex-1 flex-col gap-4"
				ref={setNodeRef}>
				{
					tasks.map((task) => {
						return (
							<TaskCard task={task} key={task.id} />
						)
					})
				}

			</div>
		</div>
	)
}