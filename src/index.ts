import chalk from 'chalk';

console.log(`Thank you for using Xyroo's modified Baileys`);

console.log(chalk.hex('#A020F0')(`Baileys modified by Xyroo`));

const originalLog = console.log;

console.log = (...args) => {
    originalLog(chalk.hex('#A020F0')('XYROO:'), ...args);
};
import makeWASocket from './Socket/index'

export * from '../WAProto/index.js'
export * from './Utils/index'
export * from './Types/index'
export * from './Defaults/index'
export * from './WABinary/index'
export * from './WAM/index'
export * from './WAUSync/index'

export type WASocket = ReturnType<typeof makeWASocket>
export { makeWASocket }
export default makeWASocket
