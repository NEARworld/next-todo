import { AiOutlinePlus } from 'react-icons/ai';

export const AddTask = () => {
  return (
    <div>
      <button className='btn btn-primary w-full'>
        Add new Task <AiOutlinePlus className='' size={18} />
      </button>
    </div>
  );
};
