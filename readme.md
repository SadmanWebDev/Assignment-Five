### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Ans: getElementById selects a single element by its ID.
   getElementsByClassName selects all elements with a class.
   querySelector selects the first element that matches a css selector.
   querySelectorAll selects all elements matching a selector.

2. How do you **create and insert a new element into the DOM**?
   Ans: By using createElement and appendChild I can create and insert a new element into the DOM.

3. What is **Event Bubbling** and how does it work?
   Ans: Event Bubbling is the process where an event starts from the child element and then propagates upward through its parent, grandparent, and up to the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   Ans: Event Delegation in JavaScript is a technique where a single event listener is added to a parent element to handle events on its child elements.
   Why it’s useful for improves performance by reducing the number of event listeners.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   Ans: preventDefault() stops the browser’s default action and stopPropagation() stops the event from bubbling.
