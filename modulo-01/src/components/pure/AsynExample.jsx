import React from 'react'

const AsynExample = () => {

    async function generateNumber() {
        return 1;
    }

    
    
    async function generatePrimise() {
        return Promise.resolve(2);
    }
    function setNumber() {
        generateNumber()
            .then(resp => alert(`responde: ${resp}`))
            .catch(error => alert(`S{error}`))
    }
    
    function setPromiseNumber() {
        generatePrimise()
            .then(resp => alert(`responde: ${resp}`))
            .catch(error => alert(`S{error}`))
    }
    
    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))
    }
    function showStorage() {
        saveSessionStorage('name', 'Benjy')
            .then(response => {
                alert(`My session Storage es ${response}`)
            })
            .catch(error => alert(`S{error}`))
            .finally(()=> alert('sucess'))
    }

    // function async creando una promesa. Esperamos a que la promesa sea resulta para mostrar el alert
    async function sendMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve('mi mensaje')
            }, 2000)
        });

       
        promise
            .then(results => alert(`${results}`))
    }

    return (
        <div>
            <h2>Example of Async</h2>
            <button onClick={setNumber}>Set Number</button>
            <button onClick={setPromiseNumber}>Set Number</button>
            <button onClick={showStorage}>Show Storage</button>
            <button onClick={sendMessage}>Send Message</button>
        </div>
    )
}

export default AsynExample
