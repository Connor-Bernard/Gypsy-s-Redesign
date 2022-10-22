/**
 * Copyright (c) 2022
 *
 * Utility for updating the menu from a json file
 * containing the menu data
 *
 * @summary Utility for updating the menu items
 * @author Connor Bernard <connorbernard@berkeley.edu>
 *
 */

function populateMenuByTemplate(menuData){
    const menuSectionTemplate = document.querySelector("[menuNodeTemplate]")
    for(category in menuData){
        const menuNode = menuSectionTemplate.content.cloneNode(true).children[0]
        const menuItemTemplate = menuNode.querySelector("[menuItemTemplate]")
        const itemsField = menuNode.querySelector(".menuItems")
        menuNode.id = category.toLowerCase().split(" ").join("")
        menuNode.querySelector("h2").textContent = category.toUpperCase()
        menuData[category].forEach((itemData) => {
            const menuItem = menuItemTemplate.content.cloneNode(true).children[0]
            const modifierTemplate = menuItem.querySelector("[modifier]")
            const modifiersField = menuItem.querySelector(".modifiers")
            menuItem.querySelector("h3").textContent = itemData["title"]
            menuItem.querySelector(".dollar").textContent = Math.trunc(itemData["price"])
            menuItem.querySelector(".cents").textContent = Math.trunc(itemData["price"]%1*100)
            menuItem.querySelector("p").textContent = itemData["description"]
            itemData["modifiers"].forEach((modifierName) => {
                const modifier = modifierTemplate.content.cloneNode(true).children[0]
                modifier.classList.add(modifierName)
                modifier.querySelector("p").textContent = modifierName
                modifiersField.appendChild(modifier)
            })
            itemsField.appendChild(menuItem)
        })
        document.querySelector("[menu]").appendChild(menuNode)
    }
}

fetch("./assets/js/menuItems.json").then(response => {
    response.json().then(data => {
        populateMenuByTemplate(data)
    })
})
