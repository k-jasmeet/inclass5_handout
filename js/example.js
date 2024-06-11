// ADD NEW ITEM TO END OF LIST
var ul = document.querySelector('ul');
var li = document.createElement('li');
li.textContent = 'cream';
ul.appendChild(li);

// ADD NEW ITEM START OF LIST
li = document.createElement('li');
li.textContent = 'kale';
ul.insertBefore(li, ul.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = ul.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) 
    {
  listItems[i].className = 'cool';
    }

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
var itemCount = listItems.length;
var span = document.createElement('span');
span.textContent = itemCount;
heading.appendChild(span);