'use client';

import { Container, Stack, Title, SimpleGrid, Box } from '@mantine/core';
import { AdvantageCard } from '../ui/AdvantageCard';
import { advantages } from '@/lib/data';

export function AdvantagesSection() {
    return (
        <Box py={80} style={{ background: 'rgba(255,255,255,0.02)' }}>
            <Container size="xl">
                <Stack gap="xl">
                    <Title order={2} ta="center" size="3rem" c="white" fw={700}>
                        Почему выбирают нас
                    </Title>

                    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
                        {advantages.map((advantage, index) => (
                            <AdvantageCard
                                key={index}
                                icon={<advantage.icon size={40} />}
                                title={advantage.title}
                                description={advantage.desc}
                            />
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}
