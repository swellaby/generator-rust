'use strict';

import chai = require('chai');
import descriptionInput = require('../../../generators/app/inputs/description-input');
import nameInput = require('../../../generators/app/inputs/name-input');
import ownerInput = require('../../../generators/app/inputs/owner-input');
import projectInputs = require('../../../generators/app/project-inputs');
import vscodeInput = require('../../../generators/app/inputs/vscode-input');

const assert = chai.assert;

suite('projectInputs Tests:', () => {
    test('Should have correct number of inputs', () => {
        assert.deepEqual(projectInputs.length, 4);
    });

    test('Should have correct first input', () => {
        const input = projectInputs[0];
        assert.deepEqual(input, nameInput);
    });

    test('Should have correct second input', () => {
        const input = projectInputs[1];
        assert.deepEqual(input, descriptionInput);
    });

    test('Should have correct third input', () => {
        const input = projectInputs[2];
        assert.deepEqual(input, ownerInput);
    });

    test('Should have correct eighth input', () => {
        const input = projectInputs[3];
        assert.deepEqual(input, vscodeInput);
    });
});
