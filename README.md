
## SVG Animations

SVGs are lightweight files, and animating them can be super fun! While making this repo, I noticed that the trickiest things were 1) making the actual SVGs, and 2) translating it all to work with React.

# Making SVGs

SVGs can be made directly with the SVG HTML tag, and adding various shapes inside, like the circles in the first two animations. While circles and rectangles, and SVG images, even some polygons, can be straightforward, paths get more complicated - especially when you try to make them smooth/curved. A few good resources:
  --[CSS Tricks guide to SVG syntax](https://css-tricks.com/svg-path-syntax-illustrated-guide/)
  --[Article on svg paths that curve](http://vanseodesign.com/web-design/svg-paths-curve-commands/)
  --MDN documentation

If you don't want to code your SVGs, that's totally understandle. JS can help you code the points....but it takes some math to get there. Another great option is to use an application that allows you to draw and export svg files like Adobe Illustrator or the free iOS-friendly Inkscape.

Fair warning: the second option comes with its own set of issues. These files often contain a ton of metadata & links to strip out, and you'll have to convert the HTML that is exported into JSX! Attribute names/style attributes are slightly different for SVGs rendered in React.

[Potentially helpful VS Code extension](https://marketplace.visualstudio.com/items?itemName=jock.svg)

[Useful site to transform your svg elements from HTML to JSX](https://magic.reactjs.net/htmltojsx.htm)

# Setting Up an Animation

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

That's a basic animation with SVG! This repo contains a few more examples, including:
  --Smoothly changing the color of a circle between red and blue, going through purple.
  --Animating with keyframes in CSS to make flames move.
  --Using requestAnimationFrame and a gradient to animate an SVG that could serve as a button.
  --A fun example of a rotating compass (that would definitely get you lost)
  --Another fun example of a clock that actually tracks the seconds/minutes/hours, using requestAnimationFrame (note: it starts at midnight and runs while the page is open to the user. Functionality to relate to actual hour/minute/second pending)
  --An example of "writing" words with SVG animations.
  --Another example of writing words with SVG animations, that also changes color.
  --My favorite example - an SVG animation that brings to life Van Gogh's "Starry Night"!
  
  
