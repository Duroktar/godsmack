import * as React from 'react';
import { render, Color, Text, Box } from 'ink';
import { IApplication } from '../interfaces';
import { Logger } from '../services';
import { getLogRecords } from './LoggerService';
import Newline from './Newline';


const Counter = (props: any) => {
  const [info, setInfo] = React.useState<any[]>([]);
  const [log, setLog] = React.useState<any[]>([]);
  const [error, setError] = React.useState<any[]>([]);

  React.useEffect(() => {
    const doit = () => {
      const logger = props.app.container.resolve(Logger)
      const records = getLogRecords(logger)
      setInfo([...records.info])
      setLog([...records.log])
      setError([...records.error])
    }
    const interval = setInterval(doit, 1000)
    return () => clearInterval(interval)
  }, []);

  return (
    <Box height={60} flexDirection="column">
      <Box height="33%" flexDirection="column">
        <Color gray>
          {log.slice(-20).map((row, index) => (
            <span key={`${row}-${index}`}>
              <Text>[LOG]: {row}</Text>
              <Newline />
            </span>
          ))}
        </Color>
      </Box>
      <Box height="33%" flexDirection="column">
        <Color green>
          {info.slice(-20).map((row, index) => (
            <span key={`${row}-${index}`}>
              <Text>[INFO]: {row}</Text>
              <Newline />
            </span>
          ))}
        </Color>
      </Box>
      <Box height="33%" flexDirection="column">
        <Color red>
          {error.slice(-20).map((row, index) => (
            <span key={`${row}-${index}`}>
              <Text>[ERROR]: {row}</Text>
              <Newline />
            </span>
          ))}
        </Color>
      </Box>
    </Box>
  );
};

export function main(app: IApplication) {
  return render(<Counter app={app} />);
}
