'use strict';

import directoryScaffolder = require('./scaffolders/directory-scaffolder');
import gitScaffolder = require('./scaffolders/git-scaffolder');
import IProjectScaffolder = require('./interfaces/project-scaffolder');
import vsCodeScaffolder = require('./scaffolders/vscode-scaffolder');

const scaffolders: IProjectScaffolder[] = [
    directoryScaffolder,
    vsCodeScaffolder,
    gitScaffolder
];
export = scaffolders;
