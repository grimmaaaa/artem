# Generated by Django 5.0.6 on 2024-06-30 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_remove_rentplace_grade_alter_rentplace_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rentplace',
            name='location',
            field=models.CharField(choices=[('ru', 'Россия'), ('br', 'Бразилия'), ('it', 'Италия'), ('kn', 'Кения'), ('nz', 'Новая Зеландия'), ('zb', 'Зимбабве')], max_length=20, verbose_name='Локация'),
        ),
    ]
