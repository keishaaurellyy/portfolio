import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';

// Placeholder that proves the design system renders; replace with the real home page.
export default function Home() {
  return (
    <Stack gap={4} padding={10} hAlign="start">
      <Heading level={1}>Portfolio</Heading>
      <Text type="large" color="secondary">
        Astryx is wired up with the neutral theme.
      </Text>
      <Button label="Hello Astryx" variant="primary" />
    </Stack>
  );
}
