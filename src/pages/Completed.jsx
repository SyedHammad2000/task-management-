import React, { useEffect, useState } from "react";
import { useTask } from "../context/taskContext";
import { useAuth } from "../context/authContext";

const Completed = () => {
  const { user } = useAuth();
  const [data, setData] = useState();
  const { getDocByCom } = useTask();

  useEffect(() => {
    if (user) {
      getDocByCom(user).then((res) => setData(res));
    }
  }, [user]);

  return (
    <div
      className="w-[100%] h-[100vh] rounded-md py-3 px-3 space-y-2"
      style={{ backgroundColor: "rgb(21 21 19)" }}
    >
      <div className="relative w-[100px] h-[25px]">
        <h1 className="text-[#FFF7D1] ">Completed</h1>
        <span className="absolute bottom-0 left-0 h-[2px] bg-[#FFF7D1] w-[20px] "></span>
      </div>
      <div className="flex flex-wrap gap-2 ">
        {data?.map((doc) => {
          return (
            <div
              key={doc.id}
              className="w-[250px] h-[200px] p-2 rounded-md space-y-[70px]"
              style={{ backgroundColor: "rgb(58 58 54 / 47%)" }}
            >
              <div className="text-[white] space-y-2 ">
                <h2>{doc?.name}</h2>
                <p className="text-[12px] h-[38px]">{doc.desc}</p>
              </div>
              <div className="text-[white] text-[12px]">
                <p>{doc.date}</p>
                <div className="flex justify-between">
                  <div>
                    <button
                      onClick={() => handleTask(doc.id)}
                      className={`btn ${
                        doc?.tog_com ? "btn-success" : "btn-danger"
                      } text-[12px] rounded-full text-center`}
                    >
                      {doc?.tog_com ? "Completed" : "Incomplete"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div></div>
      </div>
    </div>
  );
};

export default Completed;
