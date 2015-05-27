function getToggledPopoverState(el) {
  return (el.dataset.hasPopover) ? "" : "open";
}

function togglePopover(e) {
  var target = e.target;

  if ($(target).closest(".popover").length) {
    return;
  }

  if ($(target).closest("[data-has-popover]").length) {
    target.dataset.hasPopover = getToggledPopoverState(target);
  }
}

document.addEventListener("click", togglePopover);
