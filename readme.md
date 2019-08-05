# Bookmarks and shortcuts

This will be an utility to save browser tabs / link local server and files in a web browser.

Drag and drop a tab from a browser to make a link with thumbnail, website name and favicon

Drag and drop game icon from your desktop to make a browser based version of your desktop.

Run optional local server for more functionality. Explore all your files with your browser.

Everything with possible CSS customization. Dark mode / light mode included.

Add server to startup and web client as your home page for maximum convenience.

## Implementation Progress

Features implemented: 1%

## Tech

It will be compiled to HTML+CSS+JS, not sure now what exact tech will be used for development. Probably node js and sass/less. Use web components

## TODO

* Refactor everything
* Define custom elements for icons '\<icon>example.com\</icon>' and folders
* Create classes for
  * Icons
  * Selection
  * Folders
  * Recycle bin
* Maybe: Bottom bar that shows link address on hovering an icon
* Auto aligning icons to grid
* Context menu that allows deleting icons
* Deleting selected on pressing delete
* Opening selected on pressing enter
* Folders
  * Maybe just add Path to Icon class, and filter all icons before displaying, if they are in given path
  * Use '?path=games' parameters to display path. A folder is just an icon with an URL with path parameter
  * Add folder icon to all icons with path parameter
  * Or maybe use Prefixed localStorage, where each Folder path is a prefix to starage - each icon in localstorage has a prefix with its path
* Add default icon when favicon isn't found
* In context menu on right clicking icon: Add custom icon, that will let user upload an icon and it will be encoded to string and saved in localDB
