'use client';

import {
    Container,
    Grid,
    Stack,
    Title,
    Text,
    Paper,
    NumberInput,
    Textarea,
    Button,
} from '@mantine/core';
import { ContactItem } from '../ui/ContactItem';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import { contactInfo } from '@/lib/data';

export function ContactSection() {
    return (
        <Container size="xl" py={80}>
            <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Stack gap="xl">
                        <div>
                            <Title order={2} size="3rem" c="white" fw={700} mb="md">
                                Свяжитесь с нами
                            </Title>
                            <Text size="xl" c="gray.4" lh={1.6}>
                                Готовы ответить на любые вопросы и помочь с выбором металлопроката
                            </Text>
                        </div>

                        <Stack gap="lg">
                            <ContactItem
                                icon={<IconPhone size={24} />}
                                title={contactInfo.phone}
                                subtitle="Звонки принимаем 24/7"
                                href={`tel:${contactInfo.phone}`}
                            />

                            <ContactItem
                                icon={<IconMail size={24} />}
                                title={contactInfo.email}
                                subtitle="Ответим в течение часа"
                                href={`mailto:${contactInfo.email}`}
                            />

                            <ContactItem
                                icon={<IconMapPin size={24} />}
                                title={contactInfo.address}
                                subtitle="Склад и офис продаж"
                            />
                        </Stack>
                    </Stack>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Paper
                        p="xl"
                        radius="lg"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                        }}
                    >
                        <Title order={3} c="white" mb="lg">
                            Получить консультацию
                        </Title>
                        <Stack gap="md">
                            <NumberInput
                                label="Телефон"
                                placeholder="+7 (999) 123-45-67"
                                styles={{
                                    input: { backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' },
                                    label: { color: 'white' }
                                }}
                            />
                            <Textarea
                                label="Ваш вопрос"
                                placeholder="Расскажите что вас интересует..."
                                rows={4}
                                styles={{
                                    input: { backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' },
                                    label: { color: 'white' }
                                }}
                            />
                            <Button
                                fullWidth
                                size="lg"
                                variant="gradient"
                                gradient={{ from: 'blue.6', to: 'cyan.4' }}
                            >
                                Отправить заявку
                            </Button>
                            <Text size="xs" c="gray.6" ta="center">
                                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                            </Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
            </Grid>
        </Container>
    );
}
