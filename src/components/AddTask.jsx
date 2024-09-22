import { nanoid } from "nanoid";
import { useState } from "react";
import toast from "react-hot-toast";

export const AddTask =({setTasks})=>{
    const [title,setTitle]=useState('');

    const handleSubmit= event =>{
        event.preventDefault();
        if(title.trim()!==''){
            addTask(title);
        }else{
            toast.error('Task field cannot be empty!');
        }
    };

    const addTask= title=>{
        const newTask={
            title:title,
            completed:false,
            id: nanoid(),
        };

        setTasks(prevTask=>[...prevTask,newTask]);
        setTitle('');
        toast.success('New Task added!');
    }
    return(
        <>
            <form>
                <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
                    <input 
                        type="text"
                        placeholder="start typing"
                        className="w-full px-5 py-2 bg-transparent border-2 outline-none 
                        border-zinc-200  rounded-xl placeholder:text-zinc-500 focus:border-zinc-500"   
                        value={title}
                        onChange={event=>setTitle(event.target.value)}
                        />

                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="px-5 py-2 text-white bg-blue-500 border-2 border-transparent rounded-lg hover:bg-blue-600"
                        >
                        Submit
                    </button>
                </div>
            </form>
        
        </>
    )

}