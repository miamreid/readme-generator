class MarkDown {

    static shieldBadges(license){
        const shield = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://spdx.org/licenses/MIT.html)',
            apache: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache2.0-brightgreen.svg)](https://spdx.org/licenses/Apache-2.0.html)',
            gpl3: '[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-orange.svg)](https://spdx.org/licenses/GPL-3.0-or-later.html)',
            none: '[![License: None](https://img.shields.io/badge/License-none-green.svg)](https://spdx.org/licenses/Unlicense.html)'
        }
        return shield[license]
    }

    static licenseLink(license) {
        const licenseLinks = {
            mit: '[MIT](https://spdx.org/licenses/MIT.html)',
            apache: '[Apache 2.0](https://spdx.org/licenses/Apache-2.0.html)',
            gpl3: '[GPL 3.0](https://spdx.org/licenses/GPL-3.0-or-later.html)',
            none: '[None](https://spdx.org/licenses/Unlicense.html)'
        }
        return licenseLinks[license]
    }

    static licenseText(license) {
        return `Licensed under the ${this.licenseLink(license)} license`
    }

    static generateReadme(answers){
        return `
# ${answers.name}

${this.shieldBadges(answers.license)}

## Description
${answers.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${this.licenseText(answers.license)}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions regarding this application, users can email [${answers.email}](mailto:${answers.email}) or visit my GitHub profile [${answers.github}](https://github.com/${answers.github})
        `
    }
}

module.exports = MarkDown