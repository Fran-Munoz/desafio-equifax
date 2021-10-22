import React from "react";
import SelectSearch from "react-select-search";
import { fuzzySearch } from "react-select-search";
import "../styles/DropdownSelector.css";
import { data } from "../data/dataYml";
import { nanoid } from 'nanoid';

const DropdownSelector = ({ listPlugin, setListPlugin }) => {

  const options = [
    { name: "Calculate Models", value: 'calculate-models' },
    { name: "Data Enricher", value: 'data-enricher' },
    { name: "Eval Conditions", value: 'evaluate-conditions' },
    { name: "Filter Clients", value: 'filter-client' },
    { name: "Input Handler", value: 'input-handler' },
    { name: "Key Finder", value: 'key-finder' },
    { name: "Output Handler", value: 'output-handler' }
    // {
    //   items: [{ name: "Spanish", value: "es" }],
    // },
  ];
  
  const selectPlugin = (e) => {
    let dataPlugins = []
    data.forEach(plugin => {
      if(e === plugin.id) {
        const object = {...plugin, uid: nanoid(5)}
        dataPlugins.push(object);
        setListPlugin([...listPlugin, ...dataPlugins]);
      }
    })
  } 

  return (
    <SelectSearch
      options={options}
      search
      filterOptions={fuzzySearch}
      placeholder="Select a plugin"
      onChange={(e) => selectPlugin(e)}
    />
  );
};

export default DropdownSelector;
