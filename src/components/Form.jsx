import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const [emp, setEmp] = useState({});
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state.book);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEmp({ ...emp, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch();
  };
  
  return (
    <>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="my-4">Employee Data Form : </h1>
            <form method="post" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Employee Name :
                </label>
                <input
                  type="text"
                  name="eName"
                  value={emp.eName || ""}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email :
                </label>
                <input
                  type="email"
                  name="email"
                  value={emp.email || ""}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password :
                </label>
                <input
                  type="password"
                  name="password"
                  value={emp.password || ""}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="my-3">Employee Data : </h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Employee-Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  book.map((item,idx)=>(
                    <tr key={item.id}>
                      <td>{idx+1}</td>
                      <td>{item.eName}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>
                        <button className="btn btn-warning me-1">Edit</button>
                        <button className="btn btn-danger me-1">Delete</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
