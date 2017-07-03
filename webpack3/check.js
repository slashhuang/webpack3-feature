/**
 * @Author slashhuang
 * 17/7/4
 */

const exec = require('child_process').exec;
const entries = require('./webpack.config').entry;
const path = require('path');
const chalk = require('chalk');

Object.keys(entries).map((key) => {
    let file = path.resolve(__dirname,'dist', `${key}.js`);
    exec(`node ${file}`, (err,stdout,stderr) =>{
        if(err) {
            console.log(chalk.red('test failed'));
            console.log(err);
            process.exit(1)
        };
        console.log(chalk.blue('----the result of entry file stdout is listed below-----------\n'));
        console.log(stdout)
        console.log(chalk.blue('---- result ended ----'));
    });
})


