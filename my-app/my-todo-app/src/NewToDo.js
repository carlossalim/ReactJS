import React from 'react'

class NewToDo extends React.Component {

    constructor() {
        super();
        this.state = {
            newTask: "",
            taskDate: "",
            taskComment: "",
            isTaskCompleted: true,
            taskType: "Home",
            taskColor: "blue"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        const { name, value, type, checked } = event.target
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }


    render() {
        return (<div>
            <h1>Create new To Do Item</h1>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text" name="newTask"
                    value={this.state.newTask}
                    onChange={this.handleChange}
                    placeholder="New Task" /> <br />
                <input
                    type="text" name="taskDate"
                    value={this.state.taskDate}
                    onChange={this.handleChange}
                    placeholder="Date" /> <br />
                <textarea

                    name="taskComment"
                    value={this.state.taskComment}
                    onChange={this.handleChange}
                    placeholder="Comment" /> <br />
                <label><input
                    type="checkbox"
                    name="isTaskCompleted"
                    onChange={this.handleChange}
                    checked={this.state.isTaskCompleted} /> Completed</label>
                <br />
                <label><input
                    type="radio"
                    name="taskType"
                    value="Home"
                    onChange={this.handleChange}
                    checked={this.state.taskType === "Home"} />Home
                </label>
                <br />
                <label><input
                    type="radio"
                    name="taskType"
                    value="Work"
                    onChange={this.handleChange}
                    checked={this.state.taskType === "Work"} />Work</label>
                <br />
                <label><input
                    type="radio"
                    name="taskType"
                    value="Personal"
                    onChange={this.handleChange}
                    checked={this.state.taskType === "Personal"} />Personal</label>
                <br />
                <select value={this.state.taskColor} style={{ color: this.state.taskColor }} name="taskColor" onChange={this.handleChange} >
                    <option style={{ color: "blue" }} value="blue">Blue</option>
                    <option style={{ color: "green" }} value="green">Green</option>
                    <option style={{ color: "yellow" }} value="yellow">Yellow</option>
                    <option style={{ color: "red" }} value="red">Red</option>
                    <option style={{ color: "magenta" }} value="magenta">Magenta</option>
                </select>

                <br />
                <br />
                <br />
                <button className="btn btn-primary">Submit</button>
            </form >
        </div >)
    };
}


export default NewToDo