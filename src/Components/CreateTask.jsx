import React, { useState } from 'react';
import Modal from "../Components/Modal"
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const CreateTask = ({tasks, setTasks}) => {
    const [open, setOpen] = useState(false);
    const [task, setTask] = useState({
        id: "",
        name: "",
        status: "todo",
    })
    console.log(task)
    const handle = (e) => {
        e.preventDefault();
        if(task.name.length < 3) return toast.error("A task must have more than 3 characters")
            if(task.name.length > 40) return toast.error("A task must not be more  than 40 characters")
        setTasks((prev) =>{
            const lists = [...prev, task]
            
            localStorage.setItem("task", JSON.stringify(lists))
            return lists;
        })
        
        setTask({
            id: "",
            name: "",
            status: "todo",
        });
        toast.success('Successfully toasted!')
    };
    return (
        <div className='flex justify-end mt-5 bg-green-400 h-56'>
            <div>
            <button className='border border-neutral-300 rounded-lg py-1.5 px-8 mr-10 mt-10 bg-white text-2xl font-bold  text-green-400' onClick={() => setOpen(true)}>
                New Task
            </button>
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-96 h-40">

                    <div size={56} className="mx-auto text-green-500" />
                    <div className="mx-auto ">
                        <form onSubmit={handle}>
                        {/* <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" /> */}
                            <input placeholder="Type here" className='border mr-4  border-slate-400 bg-slate-100 rounded-md h-20 w-60' required type="text" value={task.name} onChange={(e)=> setTask({...task, id: uuidv4(), name:e.target.value })} />
                            <button className='bg-cyan-500 rounded-md px-4 h-12 text-white'>create</button>
                        </form>
                    </div>
                    <div className="flex justify-end mt-6 gap-4">
                        
                        <button onClick={() => setOpen(false)} className=" bg-cyan-500 rounded-md px-4 h-12 text-white">Cancel</button>

                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CreateTask;