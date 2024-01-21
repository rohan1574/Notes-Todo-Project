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
        <div className='flex justify-end mt-5'>
            <button className='border border-neutral-300 rounded-lg py-1.5 px-10 bg-blue-500 hover:bg-blue-600 text-white' onClick={() => setOpen(true)}>
                Open
            </button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-96 h-56">

                    <div size={56} className="mx-auto text-green-500" />
                    <div className="mx-auto ">
                        <form onSubmit={handle}>
                            <input className='border mr-4 border-slate-400 bg-slate-100 rounded-md h-24 w-60' type="text" value={task.name} onChange={(e)=> setTask({...task, id: uuidv4(), name:e.target.value })} />
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