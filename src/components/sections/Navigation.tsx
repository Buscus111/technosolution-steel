'use client';

import { Container, Flex, Title, Group, Anchor, Button, Box } from '@mantine/core';

export function Navigation() {
    return (
        <Box style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <Container size="xl">
                <Flex justify="space-between" align="center" h={70}>
                    <Title order={3} c="white" fw={600}>
                        TechnoSolution Steel
                    </Title>
                    <Group gap="lg" visibleFrom="md">
                        <Anchor c="gray.4" td="none" fw={500}>Продукция</Anchor>
                        <Anchor c="gray.4" td="none" fw={500}>О компании</Anchor>
                        <Anchor c="gray.4" td="none" fw={500}>Контакты</Anchor>
                        <Button size="sm" variant="gradient" gradient={{ from: 'blue.6', to: 'cyan.4' }}>
                            Заказать звонок
                        </Button>
                    </Group>
                </Flex>
            </Container>
        </Box>
    );
}
