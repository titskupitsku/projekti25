
// sivulta Medium
function AvaaLisää(elementId, visible = true) {
    const element = document.getElementById(elementId);
    element.style.visibility = visible ? 'visible' : 'hidden';
}

