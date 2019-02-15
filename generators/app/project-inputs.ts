'use strict';

import IProjectInput = require('./interfaces/project-input');
import descriptionInput = require('./inputs/description-input');
import nameInput = require('./inputs/name-input');
import ownerInput = require('./inputs/owner-input');
import vscodeInput = require('./inputs/vscode-input');

const inputs: IProjectInput[] = [
    nameInput,
    descriptionInput,
    ownerInput,
    vscodeInput
];

export = inputs;
