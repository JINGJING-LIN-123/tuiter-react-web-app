import TodoList from "./TodoList.js";
//Jquery, 类似于getElmentById()
//container是用来加padding
$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${TodoList()}
   </div>
`);


