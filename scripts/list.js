/**
 * Created by IlyaLitvinov on 20.12.16.
 */
(() => {
    const templateStatic = `<div class="todo_list">
        <div class="todo_list__head row">
            <h3 class="teal-text text-darken-2">{{listHeader}}</h3>
            <div class="todo_list__head_input input-field col s12">
                <input class="todo_list__head_input__field" type="text" id="todo_list__head_input__field">
                <label for="todo_list__head_input__field">{{placeHolderText}}</label>
            </div>
        </div>
        <ul class="todo_list__section row">
        </ul>
    </div>`;
    const listItemTemplate = `
            <li class="card-panel todo_list__todo_item row" id="{{_id}}">
                <div class="col s1 m1 l1 checkbox">
                    <input type="checkbox" id="{{input_id}}" {{checked}}/>
                    <label for="{{input_id}}"></label>
                </div>
                <div class="todo_list__todo_item__title">{{title}}</div>
                <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons todo_list__btn_delete">X</i></a>
            </li>`;

    class List {
        constructor(rootEl, listTitle, placeHolderText) {
            this.data = [
                {
                    title: 'Купить яблок',
                    completed: false,
                    id: Date.now() + 5
                },
                {
                    title: 'Проверить почту',
                    completed: false,
                    id: Date.now() + 15
                }
            ];

            this.rootEl = $(rootEl);
            this.listTitle = listTitle;
            this.placeHolder = placeHolderText;

           this.init();
        }

        init() {
            this.renderStatic();

            this.output = this.rootEl.find('.todo_list__section ');
            this.input = this.rootEl.find('.todo_list__head_input__field');

            this.renderList();

            this.initEvents();
        }

        renderStatic() {
            const todoTemplate = templateStatic
                .replace('{{listHeader}}', this.listTitle)
                .replace('{{placeHolderText}}', this.placeHolder);

            this.rootEl.html(todoTemplate);
        }

        renderList() {
            let ouptutContent = '';

            this.data.forEach((item) => {
                ouptutContent += this.renderOneItem(item);
            });

            this.output.html(ouptutContent);
        }

        renderOneItem(item) {
            return listItemTemplate
                .replace('{{title}}', item.title)
                .replace('{{_id}}', item.id);
        }

        initEvents () {
            this.input.on('keypress', (e) => {
               console.log(e.keyCode);
               if(e.keyCode === 13) {
                   this.addItem(this.input.val());
                   this.input.val('');
               }
            });
            this.output.on('click', (e) => {
                if(e.target.classList.contains('todo_list__btn_delete')) {
                   const id = $(e.target).closest('li').attr('id');
                   this.removeItem(Number(id));
                   this.renderList();
                }
            })

            //зачеркивать при нажатии
            this.output.on('click', (event) => {
                console.log($(event.target).closest('li').attr('id'));
                if (event.target.hasAttribute('type')) {
                    $(event.target).parent().next('div').toggleClass('cross-out');
                }
            })
        }

        addItem(text) {
            const newItem =   {
                    title: text,
                    completed: false,
                    id: Date.now() + 5
                };

            this.data.push(newItem);
            this.renderList();
        }

        removeItem(id) {
            let index = 0;
            this.data.forEach((item, i) => {
                 if(item.id === id) {
                     index = i;
                 }
            });
            this.data.splice(index, 1);
        }
    }

    const todoList = new List('.widget', 'Tasks list', 'Enter new tasks');
})();
