export function stopPropagation(e) {
    e.stopPropagation()
    if (e.nativeEvent.stopImmediatePropagation) {
        e.nativeEvent.stopImmediatePropagation()
    }
}