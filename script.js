const insert = document.getElementById('insert');

const RenderCharacters  = keyData => {
    insert.innerHTML = `<div class="key">
        ${keyData.key === ' ' ? 'Space' : keyData.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${keyData.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${keyData.code}
        <small>event.code</small>
    </div>`;
};

window.addEventListener('keydown', (event) => {
    RenderCharacters(event);
})







