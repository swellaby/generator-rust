'use strict';

import chai = require('chai');
import projectScaffolders = require('../../../generators/app/project-scaffolders');
import dirScaffolder = require('../../../generators/app/scaffolders/directory-scaffolder');
import gitScaffolder = require('../../../generators/app/scaffolders/git-scaffolder');
import vsCodeScaffolder = require('../../../generators/app/scaffolders/vscode-scaffolder');

const assert = chai.assert;

suite('projectScaffolders Tests:', () => {
    test('Should have correct number of scaffolders', () => {
        assert.deepEqual(projectScaffolders.length, 3);
    });

    test('Should have correct first scaffolder', () => {
        const scaffolder = projectScaffolders[0];
        assert.deepEqual(scaffolder, dirScaffolder);
    });

    test('Should have correct fourth scaffolder', () => {
        const scaffolder = projectScaffolders[1];
        assert.deepEqual(scaffolder, vsCodeScaffolder);
    });

    test('Should have correct fifth scaffolder', () => {
        const scaffolder = projectScaffolders[2];
        assert.deepEqual(scaffolder, gitScaffolder);
    });
});
