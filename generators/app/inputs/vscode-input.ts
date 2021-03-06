'use strict';

import YeomanGenerator = require('yeoman-generator');

import IProjectConfig = require('../interfaces/project-config');
import IProjectInput = require('../interfaces/project-input');
import PromptType = require('../enums/prompt-type');

const name = 'vscode';
const defaultValue = true;
const description = 'Do you use Visual Studio Code?';

const prompt: YeomanGenerator.Question = {
    type: PromptType.confirm,
    name: name,
    message: description,
    default: defaultValue
};

const option: YeomanGenerator.OptionConfig = {
    type: Boolean,
    description: description
};

const tryExtractInputValue = (value: unknown, projectConfig: IProjectConfig): boolean => {
    if (value === null || value === undefined || typeof value !== 'boolean') {
        return false;
    }
    projectConfig.includeVSCode = Boolean(value);
    return true;
};

export = <IProjectInput>{
    name: name,
    optionName: name,
    option: option,
    prompt: prompt,
    tryExtractInputValue: tryExtractInputValue
};
