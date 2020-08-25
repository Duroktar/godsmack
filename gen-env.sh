#!/usr/bim/env node

const Handlebars = require("handlebars");
const fs = require("fs");
const { spawnSync } = require("child_process");

LOG_TIME()

const [inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath)
  ERROR_ABORT();

console.log(`Reading file ${inputPath}`);
const input = fs.readFileSync(inputPath);
const template = JSON.stringify(input);

console.log('Compiling template');
const builder = Handlebars.compile(template);

const model = spawnSync('')

console.log(`Writing file ${outputPath}`);
fs.writeFileSync(outputPath, builder(model));

LOG_TIME()

// -- lib

function ERROR_ABORT() {
  console.error(`Usage: gen-env [input_file] [output_file]`)
  process.exit(1)
}

function LOG_TIME() { console.log(new Date().toUTCString()) }
