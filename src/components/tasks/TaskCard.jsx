import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../../redux/features/tasks/taskSlice';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch()
  console.log(task);
  let updateTaskStatus;
  if (task?.status === 'pending') {
    updateTaskStatus = 'running'
  }
  if (task?.status === 'running') {
    updateTaskStatus = 'done'
  }
  if (task?.status === 'done') {
    updateTaskStatus = 'archive'
  }
  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
      // className={`text-lg font-semibold mb-3  ${
      //   task.priority === 'high' ? 'text-red-500' : ''
      // } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${
      //   task.priority === 'low' ? 'text-green-500' : ''
      // }`}
      >
        {task?.name}
      </h1>
      <p className="mb-3">{task?.email}</p>
      <p className="mb-3">{task?.status}</p>
      <div className="flex justify-between mt-3">
        <div className="flex gap-3">
          <button onClick={()=>dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            title="Update Status"
            onClick={() => dispatch(updateStatus({ id: task?.id, status: updateTaskStatus }))}
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
