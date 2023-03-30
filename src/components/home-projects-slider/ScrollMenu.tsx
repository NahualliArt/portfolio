import React from 'react';
import {useState} from 'react';
import Slider from 'react-slick';
import Item1 from './MagItem';
import Item2 from './BizItem';
//import ItemsMap from 'react-horizontal-scrolling-menu/dist/types/ItemsMap';
import '../../styles/slider.scss'

//icons
import { RiArrowGoBackLine, RiArrowGoForwardLine } from "react-icons/ri";

export default function App(props:any){
  const items = ["Item1", "Item2"]; //En el ejemplo aquí van el nombre de las imágenes en comillas, ej. "imagen2.jpg"
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [SelectedItems, setSelectedItems] =useState(items[0]);

  const selectNewItem = (index: number, items: string[], next = true) => {
    const condition = next ? selectedIndex < items.length : selectedIndex > 0;
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : 
      condition ? selectedIndex - 1 : items.length - 1;
      setSelectedItems(items[nextIndex]);
      setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewItem(selectedIndex, items, false);
  };

  const next = () => {
    selectNewItem(selectedIndex, items);
  };

  return (

    <div className='buttons-slides'>

      <button onClick={previous} className='action-move'>{<RiArrowGoBackLine className='icon'/> }</button>

      {selectedIndex === 0 && <Item1/>}
      {selectedIndex === 1 && <Item2/>}
     
      <button onClick={next} className='action-move'>{<RiArrowGoForwardLine className='icon'/>}</button>

    </div>

  );
    
}
