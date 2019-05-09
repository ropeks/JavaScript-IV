// CODE here for your Lambda Classes

class Person {
    constructor(name, age, location, gender) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(name, age, location, gender, specialty, favLanguage, catchPhrase) {
        super(name, age, location, gender);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(name, age, location, gender, previousBackground, className, favSubjects) {
        super(name, age, location, gender);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(name, age, location, gender, specialty, favLanguage, catchPhrase, gradClassName, favInstructor) {
        super(name, age, location, gender, specialty, favLanguage, catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}}.`);
    }
} 