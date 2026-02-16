import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) { 
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  // let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  
  let [filter, setFilter] = useState("")
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])
   let addMenuItem = useCallback(function() {
    console.log("Added menu item")
    // Add the new menu item to the beginning of the array
    setMenuItems([newMenuItem, ...menuItems])
    // Clear the input field after adding
    setNewMenuItem("")
  }, [newMenuItem, menuItems])

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.
   let filteredMenuItems = menuItems.filter(function(item) {
    if (filter === "") {
      return true // Show all items when filter is empty
    }
    // Create a regex pattern from the filter text (case-insensitive)
    let regex = new RegExp(filter, "i")
    return regex.test(item) // Returns true if the item matches the filter
  })

  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick={() =>  {
          addMenuItem() // Call the addMenuItem function when button is clicked
        }}
      >
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
      <ul>
        {filteredMenuItems.map(function(item, index) {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}
