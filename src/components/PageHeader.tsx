import {Divider} from '@astryxdesign/core/Divider';
import {Grid} from '@astryxdesign/core/Grid';
import {VStack} from '@astryxdesign/core/Stack';
import {Heading, Text} from '@astryxdesign/core/Text';

// Big page title, a rule, and a three-item info row (left / center / right, one line on phones).
export function PageHeader({title, meta}: {title: string; meta: [string, string, string]}) {
  return (
    <VStack gap={6}>
      <Heading level={1} type="display-1">
        {title}
      </Heading>
      <Divider />
      {/* Wide screens: three columns (.meta-row). Phones: one wrapping line (.meta-line); globals.css swaps them. */}
      <Grid columns={3} gap={2} className="meta-row">
        {meta.map(item => (
          <Text key={item} type="supporting">
            {item}
          </Text>
        ))}
      </Grid>
      <Text type="supporting" className="meta-line">
        {/* Non-breaking spaces keep "Jakarta & Tangerang" on one line when the text wraps. */}
        {meta.join(' · ').replaceAll(' & ', ' & ')}
      </Text>
    </VStack>
  );
}
