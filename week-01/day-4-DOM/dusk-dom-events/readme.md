## DOM Events

| Objectives |
| :---- |
| Explore DOM events and their triggers |
| Attach event listeners to DOM Elements using jQuery |
| Respond to events using jQuery and `this` |

###Events are always happening!

In chrome we can use the following utility function to log events occuring in the window:

`monitorEvents(window, ["click", "keypress", "resize", "scroll"])` 

Here are some more native events:

* click
* mouseenter (i.e. "hover")
* mouseleave
* load
* DOMContentLoaded
* keydown, keypress, keyup
* scroll
* resize

Events tell us lots of information, not just that a "click" occured but: where, when, what was clicked...
- x and y coordinates
- the DOM element that got clicked
- the timestamp when it happened
- and more!

###Got FOMO? Then you need event listeners.

Let's listen for a click on our `greeting` div:

``` javascript
$("#greeting").on("click", function handleClick(event){
  alert("Clicked!!");
};
```

We can also listen for other types of events like hovering (but do we want "mouseover", "mouseenter", or "mouseleave"!?):

``` javascript
$("#greeting").on("mouseover", function handleMouseover(event){
  console.log("You hovered on", this);
};

```

So long as we know the name of the event we're listening for, we can "attach" or "bind" an event listener to our elment!

[Here's a list.](LINK-NEEDED)

### Callbacks & Event Listeners
When you pass a function a function, we call the second function a "callback" function. This is a scary and confusing way of saying, "here are some instructions for you to follow later". This pattern is used a lot in jQuery.

In jQuery we often use a pattern called "Event Binding", we also talk about "Event Listeners".

| metaphor                                      | example               |
|----------------------------------------------:|----------------------:|
| A subject (the thing doing the listening).    | `$("p")`              |
| A trigger (the "event" to listen for).        | `.on("mouseover", ...)`    |
| An action (how to respond).                   | `function handleHover(){ ... }`   |

All together this looks like:  
```
$("p").on("mouseover", function handleHover(event){
    console.log("hi mousey!");
})
```

Sometimes you will see this shorthand:  
```
$("p").mouseover(function(event){
    console.log("hi mousey!");
})
```

- `.mouseover(...)` is the equivalent of `.on("mouseover", ...)`
- A function without a name is called an "anonymous function".

####Pop Quiz
In the last example:  
- What is the subject?
- What are we waiting for?
- What is the action?
- When is the `handleHover` function actually executed?



### Events and Default Behavior

As a digital native, you take these behaviors for granted:

* When you "submit" a form, you want it to send your data somewhere.
* When you "click" on a link, you expect to navigate to a new page.

Try this on the [GA homepage](https://generalassemb.ly/):

``` javascript
var $links = $("a"); // every link on the page
$links.on("click", function handleClick(event){
    alert("You just clicked a link. You are about to be redirected.");
};
```

Redirecting to a new page is the *default behavior* of anchor tags (`a` elements). How would we stop this behavior? What if we need to "prevent (the) default"?

We have two options: we can `return false` or we can use a special method called `.preventDefault()`.

**`.preventDefault()`** (preferred):

``` javascript
$("a").on("click", function handleClick(event){
    event.preventDefault();
    // more code down here
};
```

**`return false`** (this works too!):

``` javascript
$("a").on("click", function handleClick(event){
    // more code up here
    return false;
};
```



**Exercises**

Hijack the big red button on the [GA homepage](https://generalassemb.ly/)!  
- When you click the button...
1. prevent the default link behavior, and print "Clicked!" to the console.
2. use `$(this)` to change the text of the link to say "1".
3. Display the number of times the link has been clicked. If I click it again it should say "2".
