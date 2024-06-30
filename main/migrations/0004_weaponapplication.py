# Generated by Django 5.0.6 on 2024-06-30 12:53

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_baseuser_buyed_products_baseuser_cart'),
    ]

    operations = [
        migrations.CreateModel(
            name='WeaponApplication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weapon_type', models.CharField(max_length=255, verbose_name='Тип оружия')),
                ('reason', models.TextField(verbose_name='Причина получения оружия')),
                ('comment', models.TextField(verbose_name='Комметрарий')),
                ('application_date', models.DateTimeField(auto_now_add=True, verbose_name='Дата подачи заявки')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
