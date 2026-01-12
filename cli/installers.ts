import { installers } from './mapper.js';
import { axiosInstaller, shadcnInstaller } from './packages.js';
import { Answers } from './types.js';

export function collectDependencies(answers: Answers) {
    const dependency = new Set<string>();
    const devDependency = new Set<string>();
    const cmd: string[] = [];

    // Default base packages
    axiosInstaller.dependency?.forEach(d => dependency.add(d));
    console.log(axiosInstaller)

    // Packages from answers
    Object.entries(answers).forEach(([key, value]) => {
        const installer = installers[value === true ? key : value];

        installer?.dependency?.forEach(d => dependency.add(d));
        installer?.devDependency?.forEach(d => devDependency.add(d));
    })

    if (answers.shadcn && answers.style === 'tailwind') {
        cmd.push(...shadcnInstaller.cmd);
    }

    console.log(dependency)

    return {
        dependency: Array.from(dependency),
        devDependency: Array.from(devDependency),
        cmd
    };
}
