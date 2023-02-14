import { ScreenContent, History, ValueContent } from './styles'

interface screenProps {
  historic: string
  value: string
}

export function Screen({ value, historic }: screenProps) {
  return (
    <ScreenContent>
      <History>{historic}</History>
      <ValueContent>=<strong>{value}</strong></ValueContent>
    </ScreenContent>
  );
}