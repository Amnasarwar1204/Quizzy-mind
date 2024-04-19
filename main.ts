#!/usr/bin/env node


// import inquirer and chalk
import inquirer from 'inquirer';

import chalk from "chalk"

console.log(chalk.greenBright.bold("               <<<<<<<<<<<<<Welcome to the Test>>>>>>>>>>>>          "));
console.log(chalk.yellowBright.bold("                                Let start         "));

// function
async function paper(){

//Make object to give options 
const selection = await inquirer.prompt(
    [
        {
            type: "list",
            name: "choose",
            message: "Which topic u want to select",
            choices:["General knowlege", "Politic","islamic history", "Sports"]
                

        }
    ]
)

// subject 1
if(selection.choose === "General knowlege" ){
let correctAnswers = 0;

const level1 = await inquirer.prompt(
    [
        {
            type: "list",
            name: "level1",
            message: "Question 1: What is the capital city of Pakistan?",
            choices:["A) Karachi",
                "B) Islamabad",
                "C) Lahore",
                "D) Peshawar"]

        }
    ]
)


if(level1.level1 === "B) Islamabad"){
    console.log(chalk.yellow("Correct answer"));
    correctAnswers++;
} 
else{
    console.log(chalk.red("Wrong answer: B) Islamabad"));
}

const level2 = await inquirer.prompt(
    [
        {
            type: "list",
            name: "level2",
            message: "Question 2: Which river is known as the lifeline of Pakistan?",
            choices:["A) Ravi",
                "B) Chenab",
                "C) Jhelum",
                "D) Indus",
                ]

        }
    ]
)


if(level2.level2 === "D) Indus"){
    console.log(chalk.yellow("Correct answer"));
    correctAnswers++;
}
else{
    console.log(chalk.red("Wrong answer: D) Indus"));
}

const level3 = await inquirer.prompt(
    [
        {
            type: "list",
            name: "level3",
            message: "Question 3: Who is the founder of Pakistan?",
            choices:["A) Muhammad Ali Jinnah",
                "B) Allama Iqbal",
                "C) Liaquat Ali Khan",
                "D) Benazir Bhutto",
                ]

        }
    ]
)


if(level3.level3 ==="A) Muhammad Ali Jinnah" ){
    console.log(chalk.yellow("Correct answer"));
    correctAnswers++;
}
else{
    console.log(chalk.red("Wrong answer: A) Muhammad Ali Jinnah"));
}

const level4 = await inquirer.prompt(
    [
        {
            type: "list",
            name: "level4",
            message: "Question 4: Which mountain range is located in the northern part of Pakistan?",
            choices:["A) Alps",
                "B) Rocky Mountains",
                "C) Himalayas",
                "D) Andes",
                ]

        }
    ]
)


if(level4.level4 === "C) Himalayas"){
    console.log(chalk.yellow("Correct answer"));
    correctAnswers++;
}
else{
    console.log(chalk.red("Wrong answer: C) Himalayas"));
}

const level5 = await inquirer.prompt(
    [
        {
            type: "list",
            name: "level5",
            message: "Question 5: What is the national flower of Pakistan?",
            choices:["A) Rose",
                "B) Jasmine",
                "C) Sunflower",
                "D) Tulip"
                ]

        }
    ]
)


if(level5.level5 ==="B) Jasmine" ){
    console.log(chalk.yellow("Correct answer"));
    correctAnswers++;
}
else{
    console.log(chalk.red("Wrong answer: B) Jasmine"));
}

console.log(chalk.blue(`In General knowlege You scored ${correctAnswers} out of 5.`));

}

// subject 2
if(selection.choose === "islamic history"){
    let correctAnswers = 0;

const level1 = await inquirer.prompt(
    [
        {
            type: "list",
            name: "level1",
            message: "Question 1: Who was the first Caliph of Islam?",
            choices:["A) Umar ibn Al-Khattab",
                "B) Abu Bakr Al-Siddiq",
                "C) Ali ibn Abi Talib",
                "D) Uthman ibn Affan",
                ]

        }
    ]
)


if(level1.level1 === "B) Abu Bakr Al-Siddiq"){
    console.log(chalk.yellow("Correct answer"));
    correctAnswers++;
} 
else{
    console.log(chalk.red("Wrong answer: B) Abu Bakr Al-Siddiq"));
}

const level2 = await inquirer.prompt(
    [
        {
            type: "list",
            name: "level2",
            message: "Question 2: In which year did the Hijra (migration of Prophet Muhammad from Mecca to Medina)",
            choices:["A) 610 CE",
                "B) 620 CE",
                "C) 630 CE",
                "D) 622 CE",
                
                ]

        }
    ]
)


if(level2.level2 === "D) 622 CE"){
    console.log(chalk.yellow("Correct answer"));
    correctAnswers++;
}
else{
    console.log(chalk.red("Wrong answer: D) 622 CE"));
}

const level3 = await inquirer.prompt(
    [
        {
            type: "list",
            name: "level3",
            message: "Question 3: Which battle marked the end of the early Muslim community's persecution in Mecca?",
            choices:["A) Battle of Uhud",
                "B) Battle of Khandaq (Trench)",
                "C) Battle of Badr",
                "D) Treaty of Hudaybiyyah",
                
                ]

        }
    ]
)


if(level3.level3 === "D) Treaty of Hudaybiyyah"){
    console.log(chalk.yellow("Correct answer"));
    correctAnswers++;
}
else{
    console.log(chalk.red("Wrong answer: D) Treaty of Hudaybiyyah"));
}

const level4 = await inquirer.prompt(
    [
        {
            type: "list",
            name: "level4",
            message: "Question 4: What is the name of the holy book revealed to Prophet Muhammad?",
            choices:["A) Psalms",
                "B) Torah",
                "C) Bible",
                "D) Quran",]

        }
    ]
)


if(level4.level4 === "D) Quran" ){
    console.log(chalk.yellow("Correct answer"));
    correctAnswers++;
}
else{
    console.log(chalk.red("Wrong answer: D) Quran"));
}

const level5 = await inquirer.prompt(
    [
        {
            type: "list",
            name: "level5",
            message: "Question 5: Which wife of Prophet Muhammad is known as the 'Mother of the Believers'?",
            choices:["A) Khadijah bint Khuwaylid",
                "B) Aisha bint Abi Bakr",
                "C) Fatimah bint Muhammad",
                "D) Hafsa bint Umar",
                
                ]

        }
    ]
)


if(level5.level5 === "B) Aisha bint Abi Bakr" ){
    console.log(chalk.yellow("Correct answer"));
    correctAnswers++;
}
else{
    console.log(chalk.red("Wrong answer: B) Aisha bint Abi Bakr"));
}

console.log(chalk.blue(`In islamic history You scored ${correctAnswers} out of 5.`));

}


// subject 3
if(selection.choose === "Politic"){
    let correctAnswers = 0;

    const level1 = await inquirer.prompt(
        [
            {
                type: "list",
                name: "level1",
                message: "Question 1: Who was the first Prime Minister of Pakistan?",
                choices:["A) Liaquat Ali Khan",
                    "B) Zulfikar Ali Bhutto",
                    "C) Nawaz Sharif",
                    "D) Benazir Bhutto",]
    
            }
        ]
)


if(level1.level1 === "A) Liaquat Ali Khan"){
        console.log(chalk.yellow("Correct answer"));
        correctAnswers++;
    } 
    else{
        console.log(chalk.red("Wrong answer: A) Liaquat Ali Khan"));
    }
    
const level2 = await inquirer.prompt(
    [
        {
            type: "list",
            name: "level2",
            message: "Question 2: Who is known as the 'Father of the Nation' in Pakistan?",
            choices:["A) Muhammad Ali Jinnah",
                    "B) Allama Iqbal",
                   "C) Liaquat Ali Khan",
                   "D) Zulfikar Ali Bhutto"]
    
        }
    ]
)


if(level2.level2 === "A) Muhammad Ali Jinnah"){
        console.log(chalk.yellow("Correct answer"));
        correctAnswers++;
}
else{
        console.log(chalk.red("Wrong answer: A) Muhammad Ali Jinnah"));
}


const level3 = await inquirer.prompt(
        [
            {
                type: "list",
                name: "level3",
                message: "Question 3: Which political party was founded by Benazir Bhutto?",
                choices:["A) Pakistan Tehreek-e-Insaf (PTI)",
                    "B) Pakistan Muslim League-Nawaz (PML-N)",
                    "C) Pakistan Peoples Party (PPP)",
                    "D) Muttahida Qaumi Movement (MQM)"]
            }
        ]
)


if(level3.level3 ==="C) Pakistan Peoples Party (PPP)" ){
        console.log(chalk.yellow("Correct answer"));
        correctAnswers++;
}
else{
        console.log(chalk.red("Wrong answer: C) Pakistan Peoples Party (PPP)"));
}
    
const level4 = await inquirer.prompt(
        [
            {
                type: "list",
                name: "level4",
                message: "Question 4: Who served as the President of Pakistan from 2001 to 2008?",
                choices:["A) Asif Ali Zardari",
                    "B) Pervez Musharraf",
                    "C) Mamnoon Hussain",
                    "D) Arif Alvi"]
                    
            }
        ]
)


if(level4.level4 === "B) Pervez Musharraf"){
        console.log(chalk.green("Correct answer"));
        correctAnswers++;
}
else{
        console.log(chalk.red("Wrong answer:  B) Pervez Musharraf"));
}
    
const level5 = await inquirer.prompt(
        [
            {
                type: "list",
                name: "level5",
                message: "Question: Which Prime Minister of Pakistan was removed from office in a military coup in 1999?",
                choices:["A) Nawaz Sharif",
                    "B) Benazir Bhutto",
                    "C) Zulfikar Ali Bhutto",
                    "D) Imran Khan"]
                    
            }
        ]
)


if(level5.level5 === "A) Nawaz Sharif" ){
        console.log(chalk.yellow("Correct answer"));
        correctAnswers++;
}
else{
        console.log(chalk.red("Wrong answer: A) Nawaz Sharif"));
}
    
    console.log(chalk.blue(`In Politic You scored ${correctAnswers} out of 5.`));
    
}


// subject 4
if(selection.choose === "Sports"){
let correctAnswers = 0;

    const level1 = await inquirer.prompt(
        [
            {
                type: "list",
                name: "level1",
                message: "Question 1: Who is known as the 'Rawalpindi Express' in cricket?",
                choices:["A) Shahid Afridi",
                    "B) Younis Khan",
                    "C) Wasim Akram",
                    "D) Shoaib Akhta"]
            }
        ]
)



if(level1.level1 === "D) Shoaib Akhta"){
        console.log(chalk.yellow("Correct answer"));
        correctAnswers++;
    
} 
else{
        console.log(chalk.red("Wrong answer: D) Shoaib Akhta"));
}

    
    
const level2 = await inquirer.prompt(
        [
            {
                type: "list",
                name: "level2",
                message: "Question 2: Which Pakistani squash player won the World Open title a record ten times?",
                choices:["A) Jahangir Khan",
                    "B) Jansher Khan",
                    "C) Qamar Zaman",
                    "D) Hashim Khan"]
            }
        ]
)


if(level2.level2 === "A) Jahangir Khan"){
        console.log(chalk.yellow("Correct answer"));
        correctAnswers++;
}
else{
        console.log(chalk.red("Wrong answer: A) Jahangir Khan"));
}


    
const level3 = await inquirer.prompt(
        [
            {
                type: "list",
                name: "level3",
                message: "Question 2: In which sport did Pakistan win its first Olympic gold medal?",
                choices:["A) Hockey",
                    "B) Cricket",
                    "C) Squash",
                    "D) Athletics"]
                    
            }
        ]
)


if(level3.level3 ==="A) Hockey" ){
        console.log(chalk.yellow("Correct answer"));
        correctAnswers++;
}
else{
        console.log(chalk.red("Wrong answer: A) Hockey"));
}
 


const level4 = await inquirer.prompt(
        [
            {
                type: "list",
                name: "level4",
                message: "Question 4: Who was the captain of the Pakistan cricket team when they won the ICC World T20 in 2009?",
                choices:["A) Shahid Afridi",
                    "B) Younis Khan",
                    "C) Shoaib Malik",
                    "D) Misbah-ul-Haq"]
                    
            }
        ]
)


if(level4.level4 === "A) Shahid Afridi"){
        console.log(chalk.yellow("Correct answer"));
        correctAnswers++;
}
else{
        console.log(chalk.red("Wrong answer: A) Shahid Afridi "));
}
    
    
const level5 = await inquirer.prompt(
        [
            {
                type: "list",
                name: "level5",
                message: "Question 5: Which Pakistani boxer won a silver medal in the 1988 Seoul Olympics?",
                choices: ["A) Hussain Shah",
                    "B) Muhammad Waseem",
                    "C) Syed Hussain Shah",
                    "D) Mehrullah Lassi"]
                    
            }
        ]
)


if(level5.level5 ===  "C) Syed Hussain Shah"){
        console.log(chalk.yellow("Correct answer"));
        correctAnswers++;
}
else{
        console.log(chalk.red("Wrong answer: C) Syed Hussain Shah"));
}
    
    console.log(chalk.blue(`In Sports You scored ${correctAnswers} out of 5.`));

}
    

let selecte = await inquirer.prompt(
    [
        {
            name: "selectee",
            type: "list",
            message: "Do you want to try it again",
            choices: ["Yes","No"],
    
        }
    ]
);  


if(selecte.selectee === "No"){
        console.log(chalk.red("Thank u for using it."));
        
}
else{
       await paper();
    
}
}

// call function
    paper()
    
 
    
    


