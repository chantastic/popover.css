# popover.css

## usage

This is the minimum markup required for this popover implementation.

```html
<div data-has-popover="open">
  Some content
  <div class="popover">
    <div class="popover_content">
      popover
    </div>
  </div>
</div>
```

#### colorbar

You can also add a `colorbar` in two steps.

* add `<div class="popover_colorbar"></div>` as the first-child of your
  `.popover`
* add the data-attribute `data-popover="colorbar"` to your `.popover`

Here's an example.

```html
<div data-has-popover="open">
  trigger content
  <div class="popover" data-popover="colorbar">
    <div class="popover_colorbar"></div>
    <div class="popover_content">
      popover content
    </div>
  </div>
</div>
```

#### dark-border

Depending on the color you're using, you might need to add contrast to the
popover border. add the data-attribute `dark-border` for that.

```html
<div class="popover" data-popover="colorbar dark-border">
  ...
</div>
```

## Questions?

Just hit me up: [@chantastic](http://twitter.com/chantastic).
