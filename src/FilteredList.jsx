import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All" // Default value for type
    };
  }

  // Updates the search state as the user types
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  // Filters the list based on search and type
  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType = this.state.type === "All" || item.type === this.state.type;
    return matchesSearch && matchesType;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>

        {/* Dropdown for selecting Fruit, Vegetable, or All */}
        <DropdownButton 
          title={this.state.type} 
          id="dropdown-basic"
          onSelect={(selectedType) => this.setState({ type: selectedType })}
        >
          <Dropdown.Item className="dropdown-gap" eventKey="Fruit">Fruit</Dropdown.Item>
          <Dropdown.Item className="dropdown-gap" eventKey="Vegetable">Vegetable</Dropdown.Item>
          <Dropdown.Item className="dropdown-gap" eventKey="All">All</Dropdown.Item>
        </DropdownButton>

        {/* Search bar */}
        <input 
          type="text" 
          placeholder="Search" 
          onChange={this.onSearch} 
        />
        
        {/* Render filtered List */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
