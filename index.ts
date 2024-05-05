#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright(`
█████╗ ██████╗ ██╗   ██╗███████╗███╗   ██╗████████╗██╗   ██╗██████╗ ███████╗         ██████╗  █████╗ ███╗   ███╗███████╗
██╔══██╗██╔══██╗██║   ██║██╔════╝████╗  ██║╚══██╔══╝██║   ██║██╔══██╗██╔════╝        ██╔════╝ ██╔══██╗████╗ ████║██╔════╝
███████║██║  ██║██║   ██║█████╗  ██╔██╗ ██║   ██║   ██║   ██║██████╔╝█████╗          ██║  ███╗███████║██╔████╔██║█████╗  
██╔══██║██║  ██║╚██╗ ██╔╝██╔══╝  ██║╚██╗██║   ██║   ██║   ██║██╔══██╗██╔══╝          ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  
██║  ██║██████╔╝ ╚████╔╝ ███████╗██║ ╚████║   ██║   ╚██████╔╝██║  ██║███████╗        ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
╚═╝  ╚═╝╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝         ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
                                                                                                                        
`));

class Player 
{
    name: string;
    fuel: number = 100;
    constructor(name: string) 
    {
        this.name = name;
    }
    fuelDecrease() 
    {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() 
    {
        this.fuel = 100;
    }
}

class Opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) 
    {
        this.name = name;
    }
    fuelDecrease() 
    {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}


let player = await inquirer.prompt(
{
  type: "input",
  name: "name",
  message: "Please Enter Your Name",
});

let opponent = await inquirer.prompt(
{
  type: "list",
  name: "select",
  message: "Select Your Opponent",
  choices: ["Skeleton", "Assassian", "Zombie"],
});

let p1 = new Player(player.name);
let o1 = new Player(opponent.select);

do {

  //skeleton
  if (opponent.select == "Skeleton") 
    {
        let ask = await inquirer.prompt(
        {
            type: "list",
            name: "opt",
            message: "Select One Of Them",
            choices: ["Attack", "Drink Potion", "Run for Your Life"],
        });

        if (ask.opt == "Attack") 
        {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) 
            {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) 
                {
                    console.log( chalk.bold.italic.red("You loose Better Luck Next Time...."));
                    process.exit();
                }
            }
            if (num <= 0) 
            {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) 
                {console.log(chalk.bold.italic.green("You WIN......."));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Potion") 
        {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Potion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for Your Life") 
        {
            console.log(chalk.bold.italic.red("You loose Better Luck Next Time...."));
            process.exit();
        }
    }

  //assassian
  if (opponent.select == "Assassian") 
    {
        let ask = await inquirer.prompt(
        {
            type: "list",
            name: "opt",
            message: "Select One Of Them",
            choices: ["Attack", "Drink Potion", "Run for Your Life"],
        });
    if (ask.opt == "Attack") 
    {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) 
        {
            p1.fuelDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0) 
            {
                console.log(
                chalk.bold.italic.red("You loose Better Luck Next Time...."));
                process.exit();
            }
        }
      if (num <= 0) 
        {
            o1.fuelDecrease();
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            if (o1.fuel <= 0) 
            {
                console.log(chalk.bold.italic.green("You WIN......."));
                process.exit();
            }
        }
    }
    if (ask.opt == "Drink Potion") 
    {
      p1.fuelIncrease();
      console.log(
      chalk.bold.italic.green(`You Drink Health Potion Your Fuel is ${p1.fuel}`));
    }
    if (ask.opt == "Run for Your Life") 
    {
      console.log(chalk.bold.italic.red("You loose Better Luck Next Time...."));
      process.exit();
    }
  }

  //zoombie
  if (opponent.select == "Zombie") 
    {
        let ask = await inquirer.prompt(
        {
            type: "list",
            name: "opt",
            message: "Select One Of Them",
            choices: ["Attack", "Drink Potion", "Run for Your Life"],
        });

        if (ask.opt == "Attack") 
        {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) 
                {
                    p1.fuelDecrease();
                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                    if (p1.fuel <= 0) 
                    {
                        console.log(chalk.bold.italic.red("You loose Better Luck Next Time...."));
                        process.exit();
                    }
                }
            if (num <= 0)
            {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) 
                {
                    console.log(chalk.bold.italic.green("You WIN......."));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Potion") 
        {
            p1.fuelIncrease();
            console.log(
                chalk.bold.italic.green(`You Drink Health Potion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for Your Life") 
        {
            console.log(chalk.bold.italic.red("You loose Better Luck Next Time...."));
            process.exit();
        }
    }
} 
while (true);
