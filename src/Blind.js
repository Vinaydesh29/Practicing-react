function Blind() {
    let user1 = {
        name: "arjun",
        age: "20",
        func: function () {
            console.log(this.name);
        }
    }

    let user2 = {
        name: "sai",
        age: "21",
    }

    user1.func.apply(user2); 
}

export default Blind;
