import { Card, Image, Text, Badge, Button, Group, Grid } from "@mantine/core";

export interface IBaseCard {
  img: string;
  badg: string;
  title: string;
}

export default function ArticleCard({ img, badg, title }: IBaseCard) {
  return (
    <Grid>
      <Grid.Col span={4}>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image src={img} height={160} alt="Norway" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              {badg}
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            {title}
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
