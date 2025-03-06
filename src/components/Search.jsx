const Search = (props) => {
  return (
    <div className="search-container">
      <h1>😎 Emoji Search 😎</h1>
      <input
        type="text"
        value={props.search}
        placeholder="What emoji are you looking for?"
        onChange={(event) => {
          props.setSearch(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
