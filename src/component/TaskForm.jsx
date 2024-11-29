import React, { useRef, useState } from "react";
import Modal from "./Modal";
import { useAuth } from "../context/authContext";
import { useTask } from "../context/taskContext";


const TaskForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompleted, setisCompleted] = useState(false);
  const [isImportant, setisImportant] = useState(false);
  const { addTask } = useTask();
  const { user } = useAuth();
  // !modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // !modal
  const task = useRef();
  const date = useRef();
  const description = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTask(
      task.current.value,
      description.current.value,
      date.current.value,
      isCompleted,
      isImportant,
      user
    );
  };

  return (
    <div>
      <button onClick={openModal} className="text-white">
        Add Task
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-3 space-y-2">
          <h1 className="text-white">Create a Task</h1>

          <div className="space-y-2">
            <h3 className="text-white">Title</h3>
            <div className="bg-black w-[100%] h-[40px] rounded-md flex items-center px-2">
              <input
                type="text"
                className="bg-transparent outline-none border-none w-[100%] text-white"
                ref={task}
                placeholder="Task Name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-white">Description</h3>
            <div className="bg-black w-[100%] h-[100px] rounded-md py-2 px-2">
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                className="bg-transparent w-[100%] outline-none border-none text-white"
                ref={description}
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-white">Date</h3>
            <div className=" bg-white w-[100%] h-[40px] rounded-md flex items-center px-2">
              <input
                type="date"
                className="bg-transparent outline-none border-none placeholder:text-white w-[100%]"
                ref={date}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className=" flex justify-between">
              <h3 className="text-white">Toggle Completed</h3>
              <input
                type="checkbox"
                className="bg-transparent outline-none border-none placeholder:text-white "
                value={isCompleted}
                onChange={() => setisCompleted(true)}
              />
            </div>
            <div className=" flex justify-between">
              <h3 className="text-white">Toggle Important</h3>
              <input
                type="checkbox"
                className="bg-transparent outline-none border-none placeholder:text-white  "
                value={isImportant}
                onChange={() => setisImportant(true)}
              />
            </div>
          </div>
          <button
            className="btn btn-info float-right mt-5"
            onClick={handleSubmit}
          >
            + Create Task
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TaskForm;
