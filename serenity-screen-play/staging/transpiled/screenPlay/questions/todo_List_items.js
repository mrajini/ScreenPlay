"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_list_1 = require("../components/todo_list");
var text_1 = require("../../text");
var TodoListItems = (function () {
    function TodoListItems() {
    }
    return TodoListItems;
}());
TodoListItems.errorDisplayedForLogin = text_1.Text.of(todo_list_1.TodoList.error_message_displayed_for_login);
TodoListItems.errorDisplayedForRegistration = text_1.Text.of(todo_list_1.TodoList.error_message_for_registration);
exports.TodoListItems = TodoListItems;
//# sourceMappingURL=todo_List_items.js.map