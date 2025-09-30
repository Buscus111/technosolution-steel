'use client';

import { Box, Container, Group, Text, Anchor } from '@mantine/core';

export function Footer() {
    return (
        <Box style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} py={40}>
            <Container size="xl">
                <Group justify="space-between" align="center">
                    <Text c="gray.6">
                        © 2024 TechnoSolution Steel. Все права защищены.
                    </Text>
                    <Group gap="lg" visibleFrom="sm">
                        <Anchor c="gray.5" td="none" size="sm">
                            Политика конфиденциальности
                        </Anchor>
                        <Anchor c="gray.5" td="none" size="sm">
                            Условия использования
                        </Anchor>
                    </Group>
                </Group>
            </Container>
        </Box>
    );
}
