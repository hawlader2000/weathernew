import React from "react";

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault(e);
    alert("Hello");
  };
  return (
    <form>
      <input type="txt" />
      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  );
};

export default Search;
