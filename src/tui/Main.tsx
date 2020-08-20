import * as React from 'react';
import { render, Text, Box, } from 'ink';
import { IApplication } from '../interfaces';
import { LogFactory } from '../services/Logger';
import { getLogRecords } from './LoggerService';
import Newline from './Newline';


const Counter = (props: any) => {
  const [info, setInfo] = React.useState<any[]>([]);
  const [log, setLog] = React.useState<any[]>([]);
  const [error, setError] = React.useState<any[]>([]);

  React.useEffect(() => {
    const doit = () => {
      const logger = props.app.container.resolve(LogFactory)
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
        {log.slice(-20).map((row, index) => (
          <span key={`${row}-${index}`}>
            <Text color='gray'>[LOG]: {row}</Text>
            <Newline />
          </span>
        ))}
      </Box>
      <Box height="33%" flexDirection="column">
        {info.slice(-20).map((row, index) => (
          <span key={`${row}-${index}`}>
            <Text color='green'>[INFO]: {row}</Text>
            <Newline />
          </span>
        ))}
      </Box>
      <Box height="33%" flexDirection="column">
        {error.slice(-20).map((row, index) => (
          <span key={`${row}-${index}`}>
            <Text color='red'>[ERROR]: {row}</Text>
            <Newline />
          </span>
        ))}
      </Box>
    </Box>
  );
};

export function main(app: IApplication) {
  return render(<Counter app={app} />);
}
