function add_set () {
    let div = document.createElement('div');
    div.className = 'set-block';
    div.innerHTML = '' +
        '<h4>3</h4>\n' +
        '<div class="title-inputs">\n' +
        ' <p type="text">�����</p>\n' +
        ' <p type="text">�������</p>\n' +
        '</div>\n' +
        '<div class="inputs">\n' +
        ' <input type="text" placeholder="�����">\n' +
        ' <input type="text" placeholder="�������">\n' +
        '</div>\n' +
        '<div class="group-buttons-action">\n' +
        ' <button class="btn-card-action btn-delete"></button>\n' +
        '</div>' +
        '';

    const add_div = document.querySelector('.add-div');
    add_div.appendChild(div);
}