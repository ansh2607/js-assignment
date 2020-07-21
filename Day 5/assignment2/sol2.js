class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.courses = [];
    }

    login() {
        console.log(`Welcome ${this.name}, you are now logged IN!!`);
    }

    logout() {
        console.log(`Thankyou ${this.name}, you are now logged OUT!!`);
    }
}

class Moderator extends User {
    constructor(name, age, email, role){
        super(name, age, email);
        this.role = role;
    }

    addCoins() {
        this.coins++;
        console.log(`Hey ${this.name}, currently you have ${this.coins} coins`);
    }

    delCoins() {
        if (this.coins > 0) {
            this.coins--;
            console.log(`Hey ${this.name}, you have ${this.coins} coins left`);
        } else {
            console.log('You dont have sufficient coins!!');
        }
    }
}

class Admin extends Moderator {
    addCourse(user,course) {
        user.courses.push(course);
        console.log(user);
    }

    delCourse(user,course) {
        const index = user.courses.indexOf(course);
        if (index > -1) {
            user.courses.splice(index, 1);
        }
        console.log(user);
    }
}

let user1 = new User('Tokyo', 21, 'tkyo@gmail.com');
let mod = new Moderator('Professor', 34, 'prof@gmail.com', 'Moderator');
let admin = new Admin('Berlin', 28, 'ber@gmail.com');
mod.addCoins();
mod.addCoins();
mod.addCoins();
mod.delCoins();
mod.delCoins();
mod.delCoins();
mod.delCoins();

admin.addCourse(user1,'JavaScript');
admin.addCourse(user1,'Maths');
admin.addCourse(user1,'Python');
admin.delCourse(user1,'Maths');


        