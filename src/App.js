import React, {Component} from 'react';
import Detail from './Compo/Detail'
import './App.css';
import SearchBar from './Compo/Search.js'

class App extends Component {
  state = {
    paid : [],
    free : [],
    search : ""
  }

  async componentDidMount() {
    const url = 'https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      paid: data.paid,
      free: data.free
    })
  }

  onInputChange = (e) => {
    this.setState({term:e.target.value})
  }
  



  render(){

    const { search } = this.state;
    const filteredPaidList = this.state.paid.filter(p => {
      return p.confName.toLowerCase().indexOf(search.toLowerCase()) !== -1 || p.city.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
    });
    const filteredFreeList = this.state.free.filter(f => {
      return f.confName.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1 || f.city.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
    })


    let show = ''

    show = (
      <div>
      <h3>Paid</h3>
  <div style={{ display: "flex",flexWrap:"wrap"}}>
    
    {filteredPaidList.map((p, index) => {
    return <Detail key={index} imageURL={p.imageURL} city={p.city} state={p.state} confName={p.confName} confStartDate={p.confStartDate} entryType={p.entryType}/>
    })}
  </div>
  <h3>Free</h3>
  <div style={{ display: "flex",flexWrap:"wrap"}}>
    
    {filteredFreeList.map((f, index) => {
    return <Detail key={index} imageURL={f.imageURL} city={f.city} state={f.state} confName={f.confName} confStartDate={f.confStartDate} entryType={f.entryType}/>
    })}
  </div>
</div>
    )


    return (<div>
      <SearchBar onInputChange={this.onInputChange}/>

      {show}

    </div>
    );
  }

  
}

export default App;
