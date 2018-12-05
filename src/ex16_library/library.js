function set_rate(event, el) {
    // Позиция клика относительно элемента
    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate=Math.ceil(event.clientX/el.clientWidth*5);
    }
}