1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    => getElimentByID : it selects one element by ID . But id must be unique . Returns a single Element.
    => getElementsByClassName : it selects elements based on their class name . it can select multiple classes at a time . gives live html collections 
    => querySelector : it is almost like getElimentByID. it selects the first matching elements. gives a single element.
    =>  querySelectorAll : it can take ID and class both.  gives static nodelist as array.

2. How do you create and insert a new element into the DOM?
  => we create new element into dom using document.createElement()
  => we insert that using innerText ,innerHTML = `` then appendChild()

3. What is Event Bubbling? And how does it work?
    => Event Bubbling is when an event starts on an element and moves up to its parents.
    => If i clicked element and then it can go up to its parent elements automatically.

4. What is Event Delegation in JavaScript? Why is it useful?
    => Event delegation is like if we add a parent to eventListener then we can trigger its child's.
    => its very useful because we don't need to add a event listener to every child. it makes our work easy.
5. What is the difference between preventDefault() and stopPropagation() methods?
    => preventDefault() stops the browser’s default action for an event (like following a link or submitting a form).
    => stopPropagation() stops the event from bubbling (or capturing) to parent elements.
