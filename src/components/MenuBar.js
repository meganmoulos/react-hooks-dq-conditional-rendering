import React from "react";

function MenuBar({onHandleClick, selectedItem}) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  function handleChange(spanType){
      onHandleClick(spanType)
  }

   return (
    <div className="ui four item menu">
      <span className={selectedItem === "profile" ? "item active" : "item"} onClick={() => handleChange("profile")}>
        <i className="user large icon" />
      </span>

      <span className={selectedItem === "photos" ? "item active" : "item"} onClick={() => handleChange("photos")}>
        <i className="photo large icon" />
      </span>

      <span className={selectedItem === "cocktails" ? "item active" : "item"} onClick={() => handleChange("cocktails")}>
        <i className="cocktail large icon" />
      </span>

      <span className={selectedItem === "pokemon" ? "item active" : "item"} onClick={() => handleChange("pokemon")}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
