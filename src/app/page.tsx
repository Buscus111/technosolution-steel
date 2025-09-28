'use client';

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Card,
  SimpleGrid,
  Badge,
  Stack,
  Box,
  BackgroundImage,
  Center,
  Overlay,
} from '@mantine/core';
import {
  IconBuildingFactory2,
  IconTool,
  IconTruckDelivery,
  IconShieldCheck,
  IconPhone,
  IconMail,
} from '@tabler/icons-react';

export default function Home() {
  return (
    <Box>
      {/* Hero Section with Glassmorphism */}
      <BackgroundImage
        src="data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e3f2fd' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
        h={600}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <Overlay color="#000" opacity={0.3} />
        <Center h={600}>
          <Container size="lg">
            <Stack align="center" gap="xl">
              <Badge
                size="lg"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                style={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                🏗️ Производство металлоизделий
              </Badge>

              <Title
                order={1}
                size="3.5rem"
                ta="center"
                c="white"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  fontWeight: 700,
                }}
              >
                Technosolution Steel
              </Title>

              <Text
                size="xl"
                ta="center"
                c="white"
                maw={600}
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                Качественные металлоизделия для строительства и промышленности.
                Арматура, трубы, листовой прокат, профили по ГОСТ.
              </Text>

              <Group gap="md">
                <Button
                  size="lg"
                  variant="white"
                  leftSection={<IconPhone size={20} />}
                  style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  Получить консультацию
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  c="white"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  Каталог продукции
                </Button>
              </Group>
            </Stack>
          </Container>
        </Center>
      </BackgroundImage>

      {/* Products Section */}
      <Container size="lg" py={80}>
        <Stack gap="xl">
          <Title order={2} ta="center" size="2.5rem" c="dark">
            Наша продукция
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
            <Card
              shadow="md"
              padding="lg"
              radius="md"
              withBorder
              style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Card.Section p="md">
                <Center>
                  <IconBuildingFactory2 size={48} color="#228be6" />
                </Center>
              </Card.Section>

              <Title order={4} ta="center" mb="sm">
                Арматура строительная
              </Title>
              <Text size="sm" c="dimmed" ta="center">
                Все диаметры от 6 до 40 мм. Соответствие ГОСТ 5781-82.
                Класс прочности А400, А500С.
              </Text>
            </Card>

            <Card
              shadow="md"
              padding="lg"
              radius="md"
              withBorder
              style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Card.Section p="md">
                <Center>
                  <IconTool size={48} color="#228be6" />
                </Center>
              </Card.Section>

              <Title order={4} ta="center" mb="sm">
                Трубы металлические
              </Title>
              <Text size="sm" c="dimmed" ta="center">
                Круглые, квадратные, прямоугольные.
                Различные толщины стенок и диаметры.
              </Text>
            </Card>

            <Card
              shadow="md"
              padding="lg"
              radius="md"
              withBorder
              style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Card.Section p="md">
                <Center>
                  <IconTruckDelivery size={48} color="#228be6" />
                </Center>
              </Card.Section>

              <Title order={4} ta="center" mb="sm">
                Листовой прокат
              </Title>
              <Text size="sm" c="dimmed" ta="center">
                Горячекатаный и холоднокатаный лист.
                Толщины от 0.5 до 40 мм.
              </Text>
            </Card>

            <Card
              shadow="md"
              padding="lg"
              radius="md"
              withBorder
              style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Card.Section p="md">
                <Center>
                  <IconShieldCheck size={48} color="#228be6" />
                </Center>
              </Card.Section>

              <Title order={4} ta="center" mb="sm">
                Профили и балки
              </Title>
              <Text size="sm" c="dimmed" ta="center">
                Швеллеры, уголки, двутавры.
                Все размеры по ГОСТ.
              </Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Contact Section */}
      <Box
        style={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        }}
        py={60}
      >
        <Container size="lg">
          <Stack align="center" gap="xl">
            <Title order={2} ta="center" c="dark">
              Свяжитесь с нами
            </Title>

            <Group gap="xl">
              <Button
                size="lg"
                leftSection={<IconPhone size={20} />}
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                +7 (XXX) XXX-XX-XX
              </Button>

              <Button
                size="lg"
                leftSection={<IconMail size={20} />}
                variant="outline"
              >
                info@technosolution-steel.ru
              </Button>
            </Group>

            <Text ta="center" c="dimmed">
              Режим работы: Пн-Пт 9:00-18:00
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
