import { useForm } from "react-hook-form";
import Modal from "../ui/Modal"
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";
const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const dispatch=useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const handleCancel=()=>{
    reset()
    setIsOpen(false)
  }
  const onSubmit = (data) => {
    dispatch(addTask(data))
    handleCancel()
  }

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Learn from hero">
        <form onSubmit={handleSubmit(onSubmit)}>

          <input className="w-full rounded-md my-2" defaultValue="Md Lanju Mia" {...register("name")} />

          <input className="w-full rounded-md my-2" defaultValue="lanju@gmail.com" {...register("email", { required: true })} />

          {errors.email && <span>This field is required</span>}
          <br />
          <div className="flex gap-3">
          <input className="w-1/2 rounded-md my-2 bg-red-300 text-white py-2 font-semibold" type="submit" />
          <button onClick={()=>handleCancel()} className="w-1/2 rounded-md my-2 bg-red-300 text-white py-2 font-semibold" value="cancel" type="button">Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
