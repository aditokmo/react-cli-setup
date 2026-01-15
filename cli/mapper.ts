import { fontAwesomeIconsInstaller, reactFormHookInstaller, reactHotToastInstaller, reactIconsInstaller, reactQueryInstaller, reactRouterInstaller, reactToastifyInstaller, shadcnInstaller, sonnerInstaller, tailwindInstaller, tanstackFormInstaller, tanstackRouterInstaller, yupInstaller, zodInstaller, zustandInstaller } from './packages.js';
import { PackageInstaller } from './types.js';

export const installers: Record<string, PackageInstaller> = {
    'reactQuery': reactQueryInstaller,
    'zustand': zustandInstaller,
    'react-router': reactRouterInstaller,
    'tanstack-router': tanstackRouterInstaller,
    'tailwind': tailwindInstaller,
    'react-icons': reactIconsInstaller,
    'font-awesome': fontAwesomeIconsInstaller,
    'react-hot-toast': reactHotToastInstaller,
    'react-toastify': reactToastifyInstaller,
    'sonner': sonnerInstaller,
    'react-hook-form': reactFormHookInstaller,
    'tanstack-form': tanstackFormInstaller,
    'zod': zodInstaller,
    'yup': yupInstaller,
}