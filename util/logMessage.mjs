import { format } from 'date-fns';

function getTimestamp() {
  return format(new Date(), 'HH:mm:ss');
}

export function infoLog(message) {
  const timestamp = getTimestamp();
  const logMessage = ` [INFO]: [${timestamp}] - ${message}`;

  console.info(logMessage);
}

export function errorLog(message) {
  const timestamp = getTimestamp();
  const logMessage = ` [ERRO]: [${timestamp}] - ${message}`;

  console.error(logMessage);
}
