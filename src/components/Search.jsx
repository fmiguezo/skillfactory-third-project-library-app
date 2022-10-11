import React from "react";

export const Search = () => {
  return (
    <>
      <div className="container d-flex justify-content-center m-5">
        <div className="row w-50">
          <div className="col buscador p-5 ">
            <p>SEARCH THE CATALOG</p>
            <div >
              <select className="btn btn-dark"  name="" id="">
                <option value="keywords">Keywords</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="category">Category</option>
                <option value="ISBN">ISBN</option>
              </select>
              <input type="text" />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
