
function myFunction() {
    console.log("worked");
    var data = ['Арбуз', 'Арба', 'Арбалет', 'Апельсин', 'Ананас', 'Банан', 'Виноград', 'Вишня'],
        input = document.querySelector('.AutoComplete > input'),
        list = input.nextElementSibling;
    input['oninput' in input ? 'oninput' : 'onpropertychange'] = function () {
        var li,
            val = this.value.toLowerCase()
                .split(' ')
                .pop();
        if (val.length < 3) list.style.display = 'none';
        else {
            list.innerHTML = '';
            data.forEach(function (i) {
                var reg = new RegExp('^' + val, 'i');
                if (reg.test(i)) {
                    li = document.createElement('li');
                    li.appendChild(document.createTextNode(i))
                    li.onclick = function () {
                        input.value = input.value.replace(/\S+$/, i);
                        input.focus();
                        list.innerHTML = '';
                        list.style.display = 'none';
                    };
                    list.appendChild(li);
                    list.style.display = 'block'
                }
            });
        }
    }
}


