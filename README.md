

### SVG Animations

SVGs are lightweight files, and animating them can be super fun! While making this repo, I noticed that the trickiest things were 1) making the actual SVGs, and 2) translating it all to work with React.

## [Live Examples](https://emkeator.github.io/svg-animations/)

# Making SVGs

SVGs can be made directly with the SVG HTML tag, and adding various shapes inside, like the circles in the first two animations. While circles and rectangles, and SVG images, even some polygons, can be straightforward, paths get more complicated - especially when you try to make them smooth/curved. A few good resources:
  * [CSS Tricks guide to SVG syntax](https://css-tricks.com/svg-path-syntax-illustrated-guide/)
  * [Article on svg paths that curve](http://vanseodesign.com/web-design/svg-paths-curve-commands/)
  * [MDN documentation on SVGs](https://developer.mozilla.org/en-US/docs/Web/SVG)

If you don't want to code your SVGs, that's totally understandle. JS can help you code the points....but it takes some math to get there. Another great option is to use an application that allows you to draw and export svg files like Adobe Illustrator or the free iOS-friendly Inkscape.

Fair warning: the second option comes with its own set of issues. These files often contain a ton of metadata & links to strip out, and you'll have to convert the HTML that is exported into JSX! Attribute names/style attributes are slightly different for SVGs rendered in React.

[Potentially helpful VS Code extension to strip out metadata from app-created SVGs](https://marketplace.visualstudio.com/items?itemName=jock.svg)

[Useful site to transform your svg elements from HTML to JSX](https://magic.reactjs.net/htmltojsx.htm)

[Good article on making an SVG "write" onto the screen](https://jakearchibald.com/2013/animated-line-drawing-svg/)

[Another good one on SVG Path animation](https://css-tricks.com/svg-line-animation-works/)

[Non-App Drawing of Bezier-curve smoothed lines](https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74)

[Transforming SVGs - read before trying to rotate!](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)

[Linear Gradients for SVGs on MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient)

[Radial Gradients for SVGs on MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient)

# This Repo
This repo contains a few more examples, including:
  * Smoothly changing the color of a circle between red and blue, going through purple.
  * Animating with keyframes in CSS to make flames move.
  * Using requestAnimationFrame and a gradient to animate an SVG that could serve as a button.
  * A fun example of a rotating compass (that would definitely get you lost)
  * Another fun example of a clock that actually tracks the seconds/minutes/hours
  from Greenwich Mean Time (London Time).
  * An example of "writing" words with SVG animations.
  * Another example of writing words with SVG animations, that also changes color.
  * An animation that actually changes the path's nodes in order to transform a circle into a snowflake.
  * My favorite example - an SVG animation that brings to life Van Gogh's "Starry Night"!

Please note: some of these are more complex and time consuming than others! They can also be more expensive programmatically.

# Setting Up a Simple Animation

The easiest formula I have found to animate an SVG is to choose somethign about it that will change, and track that as a variable in state.

You can then set up a function in componentDidMount (or a separate method that will fire on an event instance), and use requestAnimationFrame / cancelAnimationFrame.

Ex circle SVG that will change color constantly between red and blue, every second:
```
export default class Svg extends Component {
    constructor() {
        super();
        this.state = {
            color: 'red',
            last: 0
        }
    }

    //In componentDidMount, create a callback for the requestAnimationFrame
    componentDidMount() {
    
        const animate = (timestamp) => {
        
            //assign the new color
            const color = this.state.color === 'red' ? 'blue' : 'red';
            const last = timestamp - this.state.last >= 1000 ? timestamp : this.state.last
            
            if (last !== this.state.last) {
                this.setState({
                    color, last
                })
            }
            
            //recursive call - this ensures that this keeps running!
            this.rafId = requestAnimationFrame(animate);
        };
        
        //call to START the animation
        this.rafId = requestAnimationFrame(animate);
    }

    //ensure the animation stops if the component dies
    componentWillUnmount() {
        cancelAnimationFrame(this.rafId);
    }

    render(){
        return (
              <svg height="100" width="100" ref="mySVG">
                  <circle cx="50" cy="50" r="40" stroke={this.state.color} strokeWidth="3" fill={this.state.color} />
              </svg>
        )
    }
} 
```

# Rotation
Rotating an svg can be complicated, depending on what you are trying to rotate. SVGs
base rotating around the top left point of their canvas, which is (0,0) to them. If you have everything centered and you want to rotate it, it might be better to give
the whole svg a transform attribute and rotate that by tracking/changing in state. 
(This is how the snowflakes in the live example are rotated on hover.) Otherwise,
you will have to account for this by creating SVG groups that are translated to what you may think of as the center of the SVG canvas, and positioning everything accordingly around that point before rotating (see the compass and clock for examples of this).

# Gradient Color Change
Similar to the color change example above - except you use a template string of rgb to give the stroke or fill color, and change the corresponding r, g, and b in state. If you are using a gradient (linear or radial) this opens up even more options for how you can animate the SVG. Changing the gradient offsets is one really neat way to do it!

# Transforming paths
Complex and requiring extra code and effort, see the snowflake example for more details!

# Writing words
Uses dasharray and dasharray offset properties. Se above for a great article on how to do it, and take a look at the examples in the live demo.



  
  
  
