# Generated by Django 4.1.7 on 2023-05-04 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('words', '0002_remove_country_flag'),
    ]

    operations = [
        migrations.AddField(
            model_name='country',
            name='flag',
            field=models.ImageField(default='Null', max_length=4000, upload_to='uploads/% Y/% m/% d/'),
            preserve_default=False,
        ),
    ]