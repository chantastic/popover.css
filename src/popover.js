/*! popover.css v0.0.1 | MIT License | https://github.com/chantastic/popover.css */

/* global document */
/* global $ */

function getToggledPopoverState(el) {
  "use strict";

  return (el.dataset.hasPopover) ? "" : "open";
}

function togglePopover(e) {
  "use strict";

  var target = e.target;

  if ($(target).closest(".popover").length) {
    return;
  }

  if ($(target).closest("[data-has-popover]").length) {
    target.dataset.hasPopover = getToggledPopoverState(target);
  }
}

document.addEventListener("click", togglePopover);
