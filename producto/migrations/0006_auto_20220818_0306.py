# Generated by Django 3.2 on 2022-08-18 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('producto', '0005_auto_20220818_0220'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='img1',
            field=models.ImageField(blank=True, default='', null=True, upload_to='img/productos/'),
        ),
        migrations.AddField(
            model_name='producto',
            name='img2',
            field=models.ImageField(blank=True, default='', null=True, upload_to='img/productos/'),
        ),
        migrations.AddField(
            model_name='producto',
            name='img3',
            field=models.ImageField(blank=True, default='', null=True, upload_to='img/productos/'),
        ),
        migrations.AddField(
            model_name='producto',
            name='img4',
            field=models.ImageField(blank=True, default='', null=True, upload_to='img/productos/'),
        ),
        migrations.AddField(
            model_name='producto',
            name='img5',
            field=models.ImageField(blank=True, default='', null=True, upload_to='img/productos/'),
        ),
    ]