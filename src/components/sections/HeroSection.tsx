'use client';

import {
    Container,
    Grid,
    Stack,
    Badge,
    Title,
    Text,
    Group,
    Button,
    Box,
    Center,
    Paper,
    Select,
    NumberInput,
    Textarea,
} from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';

export function HeroSection() {
    return (
        <Box py={100} style={{ position: 'relative' }}>
            <Container size="xl">
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack gap="xl">
                            <Badge
                                size="lg"
                                variant="gradient"
                                gradient={{ from: 'gray.6', to: 'gray.4' }}
                                style={{
                                    width: 'fit-content',
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                🏗️ Металлоизделия от производителя
                            </Badge>

                            <Title
                                order={1}
                                size="4rem"
                                c="white"
                                fw={700}
                                lh={1.1}
                            >
                                Все виды металлопроката в одном месте
                            </Title>

                            <Text size="xl" c="gray.4" lh={1.6}>
                                Арматура рифленая, трубы электросварные, листовой прокат,
                                металлопрокат профильный. Сертификаты ГОСТ, доставка по Москве и области.
                            </Text>

                            <Group gap="md">
                                <Button
                                    size="lg"
                                    variant="gradient"
                                    gradient={{ from: 'gray.7', to: 'gray.5' }}
                                    leftSection={<IconPhone size={20} />}
                                    style={{
                                        background: 'rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    Получить прайс
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    c="gray.4"
                                    style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                                >
                                    Каталог продукции
                                </Button>
                            </Group>

                            {/* Stats */}
                            <Group gap="xl" mt="xl">
                                <div>
                                    <Title order={2} c="white" fw={700}>15+</Title>
                                    <Text size="sm" c="gray.5">лет на рынке</Text>
                                </div>
                                <div>
                                    <Title order={2} c="white" fw={700}>1000+</Title>
                                    <Text size="sm" c="gray.5">довольных клиентов</Text>
                                </div>
                                <div>
                                    <Title order={2} c="white" fw={700}>24/7</Title>
                                    <Text size="sm" c="gray.5">техподдержка</Text>
                                </div>
                            </Group>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Center h="100%">
                            <Paper
                                p="xl"
                                radius="xl"
                                style={{
                                    background: 'rgba(0,0,0,0.4)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                                }}
                            >
                                <Stack gap="md">
                                    <Title order={3} c="white" ta="center">
                                        Быстрый расчет стоимости
                                    </Title>
                                    <Select
                                        label="Тип металлопроката"
                                        placeholder="Выберите тип"
                                        data={['Арматура рифленая', 'Трубы электросварные', 'Листовой прокат', 'Металлопрокат профильный']}
                                        styles={{
                                            input: { backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' },
                                            label: { color: 'white' }
                                        }}
                                    />
                                    <NumberInput
                                        label="Количество (тонн)"
                                        placeholder="0"
                                        styles={{
                                            input: { backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' },
                                            label: { color: 'white' }
                                        }}
                                    />
                                    <Textarea
                                        label="Дополнительные требования"
                                        placeholder="Опишите ваши требования..."
                                        styles={{
                                            input: { backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' },
                                            label: { color: 'white' }
                                        }}
                                    />
                                    <Button
                                        fullWidth
                                        variant="gradient"
                                        gradient={{ from: 'blue.6', to: 'cyan.4' }}
                                        size="lg"
                                    >
                                        Получить расчет
                                    </Button>
                                </Stack>
                            </Paper>
                        </Center>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}
