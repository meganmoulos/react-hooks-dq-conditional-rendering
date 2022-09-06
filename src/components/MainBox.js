import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
  const [isClicked, setIsClicked] = useState(<Profile />)
  const [selectedItem, setSelectedItem] = useState({})

  let detailsToDisplay = isClicked

  function handleClick(clickedSpan) {
    if(clickedSpan === "profile") {
      setIsClicked(<Profile />)
      setSelectedItem(clickedSpan)
  } else if (clickedSpan === "photos"){
    setIsClicked(<Photos />)
    setSelectedItem(clickedSpan)
  } else if (clickedSpan === "cocktails"){
    setIsClicked(<Cocktails />)
    setSelectedItem(clickedSpan)
  } else {
    setIsClicked(<Pokemon />)
    setSelectedItem(clickedSpan)
  }
}
  
  return (
    <div>
      <MenuBar onHandleClick={handleClick} selectedItem={selectedItem}/>
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
