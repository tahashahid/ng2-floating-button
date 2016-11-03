# Ng2FloatingButton

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

ng2-floating-button
========================

Material design floating action button implemented as an Angular2 component.
inspired by action buttons from Google Inbox, Evernote and Path.

Made to be fast and easy to customise.

## Demo
Head over to the project [homepage](https://tahashahid.github.io/ng2-floating-button/dist/) to see it in action as a standalone component just take a look at this awesome gif:

<img src="http://zippy.gfycat.com/LimitedTatteredFieldmouse.gif">


### Basic setup
Download the whole repo or clone it

Make sure you reference the Mfb module as a dependecy to your app or module like so:
```js
import { ng2mfbModule } from 'ng-floating-button';
@NgModule({
    ...
  imports: [
    ...
    ng2mfbModule
  ],
  ...
})
```
Finally, place the correct html structure in your template. As a first example, assuming your example is using [Ionicons](http://ionicons.com/) as icon font:

```html
<ng2-floating-button 
  [placement]="'placment'" 
  [effect]="'effect'" 
  [label]="'label'" 
  [iconClass]="'iconClass'" 
  [activeIconClass]="'activeIconClass'"
  [toggle]="'toggle'"
  [buttons]="[buttons]">
</ng2-floating-button>
```

**NOTE**: if you want to change the CSS make you sure you understand how it's supposed to be done.

### Element attributes
A number of attributes can be passed to the elements from the template in order to customise both behavior and appearance.


##### Placement
Defines in which corner of the screen the component should be displayed.

value | explanation
--- | ---
`tl` |  top-left corner
`tr` |  top-right corner
`br` |  bottom-right corner
`bl` |  bottom-left corner

Example:
```html
<ng2-floating-button [placement]="'br'">
  <!-- this will be displayed on the bottom-right corner of the screen -->
</ng2-floating-button>
```

##### Toggling method
Defines how the user will open the menu. Two values are possible:

value | explanation
--- | ---
`hover` | hover to open the menu
`click` | click or tap to open the menu

Example:
```html
<ng2-floating-button [toggle]="'click'">
  <!-- this will be displayed on the bottom-right corner of the screen -->
</ng2-floating-button>
```


**NOTE**: Using `hover` will prevent user browsing on modbile/touch devices to properly interact with the menu. The directive provides a fallback for this case.


##### Effect
Defines the effect that is performed when the menu opens up to show its child buttons.

value |
--- |
`mfb-zoomin` |
`mfb-slidein` |
`mfb-slidein-spring` |
`mfb-fountain` |

Test them [here](https://tahashahid.github.io/ng2-floating-button/dist/).

Example:
```html
<ng2-floating-button [effect]="'mfb-zoomin'">
  <!-- this will be displayed on the bottom-right corner of the screen -->
</ng2-floating-button>
```


##### Label
The text that is displayed when hovering the main button.
Example:
```html
<ng2-floating-button label="'your text here'">
</ng2-floating-button>
```


##### iconClass
The icon that will be displayed by default on the main button.
Example:
```html
<ng2-floating-button [iconClass]="'ion-plus-round'">
</ng2-floating-button>
```

##### activeIconClass
The icon that will be displayed by default on the main button.
Example:
```html
<ng2-floating-button [activeIconClass]="'ion-close-round'">
</ng2-floating-button>
```

##### buttons
The buttons that will be displayed when in active/open state.
buttons shold be array of type MfbButton
Example:
```js
import { MfbButton } from 'ng-floating-button';
buttons: Array<MfbButton> = [
    {
        iconClass: 'ion-social-github', // This icon will be displayed on the button
        label: 'follow me on github', // This is the label text of the button
        onClick: function(){
            ...
        } // This is the button click handler, it will be called when the button is clicked
    }
]
```
```html
<ng2-floating-button [buttons]="buttons">
</ng2-floating-button>
```