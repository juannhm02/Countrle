# Generated by Django 4.1.7 on 2023-04-02 10:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('words', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='country',
            name='flag',
        ),
    ]
