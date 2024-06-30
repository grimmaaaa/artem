# Generated by Django 5.0.6 on 2024-06-30 06:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_remove_baseuser_buyed_boats_and_more'),
        ('products', '0002_alter_boat_category_alter_fisingrod_category_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fisingrod',
            name='category',
        ),
        migrations.RemoveField(
            model_name='gun',
            name='category',
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Имя')),
                ('price', models.PositiveIntegerField(default=0, verbose_name='Цена')),
                ('desc', models.TextField(verbose_name='Описание')),
                ('color', models.CharField(choices=[('red', 'Красный'), ('green', 'Зелёный'), ('blue', 'Синий'), ('yellow', 'Жёлтый'), ('black', 'Чёрный')], max_length=255, verbose_name='Цвет')),
                ('producer_country', models.CharField(max_length=255, verbose_name='Старана производитель')),
                ('image', models.ImageField(upload_to='images/', verbose_name='Картинка')),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.category')),
            ],
        ),
        migrations.DeleteModel(
            name='Boat',
        ),
        migrations.DeleteModel(
            name='FisingRod',
        ),
        migrations.DeleteModel(
            name='Gun',
        ),
    ]