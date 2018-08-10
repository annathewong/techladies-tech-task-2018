import React from "react"

export class Todos extends React.Component {
    state = {
        
        todos: [         
        
            {
                description: 'Photoshop course',
                isDone: false
            },
            {
                description: 'Videography course',
                isDone: false
            },
            {
                description: 'Grocery shopping',
                isDone: true
            },
            {
                description: 'Spring cleaning',
                isDone: true
            }
        ], 
        newTodoDescription: "",
        
    }
        

    handleOnChange = event => {
        const { name,value } = event.target;
    
        this.setState({
            newTodoDescription: value,
            [name]: value,
             
        })
    }


    handleTodoClick = (currentTodo) => {
        if (currentTodo.isDone) {
            currentTodo.isDone = false;

        } else {
            currentTodo.isDone = true;

        }
    
        const updatedState = {
            todos: this.state.todos
        }

        this.setState(updatedState)

    }

    handleAddTodo = () => {
        
        const newTodoDescription = this.state.newTodoDescription
        
        const newTodo = {
            description: newTodoDescription,
            isDone: false,
        };
        
        const newTodos = [
            ...this.state.todos,
            newTodo,
        ];

        this.setState({
            todos: newTodos,
        });

    }

    render() {
        
        return <div>
            <h2>R E M I N D E R S</h2>
            
            &nbsp;&nbsp;
            <input 
            type="text" 
            value={this.state.newTodoDescription}
            name="newTodoDescription"
            id="newTodoDescription"
            onChange={this.handleOnChange}
            />
            &nbsp;
            <button class="button button1" onClick={this.handleAddTodo}>+</button>
            &nbsp;
            <label htmlFor ="newTodoDescription">Add Task</label>
            <ul> 
                {this.state.todos.map((todo) => {
                    let completeClass = ""

                    if (todo.isDone) {
                        completeClass = "complete";
                        
                    }
                    
                    return <li className={completeClass}
                    onClick={() => this.handleTodoClick(todo)}>{todo.description}</li>                               
                })}
            </ul>
        </div>
    }
}

