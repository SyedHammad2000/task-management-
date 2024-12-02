import React, { useEffect, useState } from "react";
import TaskForm from "../component/TaskForm";
import { useTask } from "../context/taskContext";
import { useAuth } from "../context/authContext";
import { motion } from "motion/react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  const { user } = useAuth();
  const { getTaskDoc, data, setData, handleTask, delDoc } = useTask();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      getTaskDoc(user);
    }
  }, [user]);

  const handleDelete = async (id) => {
    await delDoc(id);
    toast("Task Deleted", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const Toggle = async (id) => {
    setLoading(true);
    await handleTask(id);

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-[100%] min-w-auto h-[100%] min-h-[100vh] rounded-md py-3 px-3 space-y-2 font-roboto relative"
      style={{ backgroundColor: "rgb(21 21 19)" }}
    >
      <button className="absolute btn btn-dark z-50 bg-transparent right-5">
        +
      </button>

      <div className="relative w-[100px] h-[25px]">
        <h1 className="text-[#FFF7D1] ">All Task</h1>
        <span className="absolute bottom-0 left-0 h-[2px] bg-[#FFF7D1] w-[20px] "></span>
      </div>
      <div className="flex flex-wrap gap-2 font-mono">
        {data?.map((doc) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{
                scale: 1.02,
              }}
              key={doc.id}
              className="w-[400px] h-[200px] md:w-[250px] p-2 rounded-md space-y-[70px]"
              style={{ backgroundColor: "rgb(58 58 54 / 47%)" }}
            >
              <div className="text-[white] space-y-2 ">
                <h2>{doc?.name}</h2>
                <p className="text-[12px] h-[38px] ">{doc.desc}</p>
              </div>
              <div className="text-[white] text-[12px]">
                <p>{doc.date}</p>
                <div className="flex justify-between">
                  <div>
                    <button
                      disabled={isLoading}
                      onClick={() => Toggle(doc.id)}
                      className={`btn ${
                        doc?.tog_com ? "btn-success" : "btn-danger"
                      } text-[12px] rounded-full text-center w-[90px] `}
                    >
                      {isLoading ? (
                        <motion.div
                          style={{
                            width: "20px",
                            height: "20px",
                            border: "4px solid white",
                            borderTop: "4px solid blue",
                            borderRadius: "50%",
                            margin: "auto",
                          }}
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                        ></motion.div>
                      ) : doc?.tog_com ? (
                        "Completed"
                      ) : (
                        "Incomplete"
                      )}
                    </button>
                  </div>
                  <div className="space-x-1 ">
                    <button
                      onClick={() => handleDelete(doc?.id)}
                      className="btn hover:animate-pulse rounded-full text-[12px] text-center"
                    >
                      <FontAwesomeIcon
                        icon={faRemove}
                        color="red"
                        fontSize={"20px"}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        <div className="w-[250px] h-[200px] p-2 rounded-md flex justify-center items-center border-1 border-gray-700">
          <TaskForm />
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
