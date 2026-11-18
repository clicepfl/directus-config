import {
  createLogger as createWinstonLogger,
  transports,
  format,
  Logger as WinstonLogger,
} from "winston";
import { ENVS } from "./env.js";

export type Logger = WinstonLogger;

export default function createLogger(span: string): Logger {
  return createWinstonLogger({
    level: ENVS.logLevel,
    defaultMeta: {
      span,
    },
    format: format.combine(
      format.errors({ stack: true }),
      format.colorize(),
      format.timestamp({
        format: 'hh:mm:ss',

      }),
      format.printf(({ timestamp, level, span, message, stack }) => {
        return `[${timestamp}][${span}] ${level}: ${message}${stack ? "\n" + stack : ""}`;
      }),
    ),
    transports: [new transports.Console()],
  });
}
