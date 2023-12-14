
const TaskContext = React.createContext({ todos: [], createToDo: () => {}, markAsDone: () => {}})

// type ToDoContextState = {
//   createToDo: ({propertyA, propertyB  }) => { // adds to local storage, and updates state },
//   markAsDone: (toDoId) => { // update the appropiate todo based on id in state, and update localstorage },
//   toDos: [{}, {} .. //]
// }

const TaskContextProvider = ({ children }) => {

    // const [tasks, setTasks] = useState([]);
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, dispatch] = useReducer(reducer, storedTasks)

    const addTask = ({ title, description }) => {
        // create something
        dispatch(createTask({ title, description}))
    }

    return (<TaskContext.Provider value={{ addTask, markTaskAsDone, tasks}}>{children}</TaskContext.Provider>)}


    
const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            return [...state, {...action.task}];
        case 'UPDATE_TASK':
            
        default:
            return state;
    }
}

const createTask = ({ title, description}) => ({ type: 'CREATE_TASK', task: { title, description } })
