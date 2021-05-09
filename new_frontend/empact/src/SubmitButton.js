import React, { useState } from "react";
import Axios from "axios";

class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prompt: "",
            result_text: ""
        };
    }
    handleClick = () => {
        console.log(this.state['prompt']);
        const postObject = {
            "prompt": this.state['prompt'],
            "address": "address xyz"
        }
        
        Axios.post('http://localhost:5000/openai/create_study_notes/', postObject).then(response=>{ 
            this.setState({
                result_text: response.data
            })
            console.log(this.state.result_text)
        });
    }

    handleTLDRClick = () => {
        console.log(this.state['prompt']);
        const postObject = {
            "prompt": this.state['prompt'],
            "address": "address xyz"
        }
        // Axios.defaults.headers.post['Content-Type'] = 'application/json';
        // Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        // Axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'DELETE, POST, GET, OPTIONS';
        // Axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With';

        Axios.post('http://localhost:5000/openai/tldr/', postObject).then(response=>{ 
            this.setState({
                result_text: response.data
            })
            console.log(this.state.result_text)
        });
    }

    handleChange = (e) => {
        this.setState({
        prompt: e.target.value
        })
    }

    handleResponseChange = (e) => {
        this.setState({result_text: e.target.value});
    }

    render() {
        return (
            <div>
            <textarea id="w3review" name="w3review" rows="4" cols="50"  
            placeholder="Enter some notes here..." onChange={this.handleChange}></textarea>
            <button className="submit_button" onClick={this.handleClick}>
                Find Topics to Study
            </button>
            <button className="submit_button" onClick={this.handleTLDRClick}>
                TL;DR
            </button>
            <textarea id="w3review" name="w3review" rows="4" cols="50" 
            readOnly={true}
            value={this.state.result_text} placeholder="Please enter some notes to see the results">{this.state.result_text}</textarea>
            </div>
        )
    }
    
}

export default SubmitButton;