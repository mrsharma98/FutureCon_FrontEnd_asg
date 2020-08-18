import React from 'react';

const SeachBar = (props) => {
    return (<form className="ui form">
    <div className="field">
      <label>Search by city or name</label>
      <input
        type="text"
        onChange={props.onInputChange}
      />
    </div>
  </form>)
}

export default SeachBar;