# Generated by Django 5.0.6 on 2024-06-30 17:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_rentplace_location'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='baseuser',
            options={'verbose_name': 'Пользователь', 'verbose_name_plural': 'Пользователи'},
        ),
        migrations.AlterModelOptions(
            name='rentplace',
            options={'verbose_name': 'Место', 'verbose_name_plural': 'Места'},
        ),
        migrations.AlterModelOptions(
            name='weaponapplication',
            options={'verbose_name': 'Заяка', 'verbose_name_plural': 'Заявки'},
        ),
    ]
