import { useState } from "react";

export const AddTask =({setTasks})=>{
    const [title,setTitle]=useState('');
    return(
        <>
            <form>
                <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
                    <input 
                        type="text"
                        placeholder="start typing"
                        />
                </div>
            </form>
        
        </>
    )

}