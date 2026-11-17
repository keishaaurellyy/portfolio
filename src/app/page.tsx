import {Heading} from '@astryxdesign/core/Heading';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';

// Placeholder until the real home page is built.
export default function Home() {
  return (
    <Stack gap={4} paddingInline={6} paddingBlock={10} hAlign="start">
      <Heading level={1} type="display-1">
        Keisha
      </Heading>
      <Text type="large" color="secondary">
        [Home page: coming soon]
      </Text>
    </Stack>
  );
}
