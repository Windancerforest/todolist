export const TaskInput = (props) => {
    return (
      <input
        {...props}
        className='w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-300 rounded-xl placeholder:text-zinc-500 focus:border-zinc-700'
        type='text'
      />
    );
  };